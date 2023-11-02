import { useState } from 'react';

const initialProducts = [
  { 
    id: 1, 
    image: 'https://www.healthxchange.sg/sites/hexassets/Assets/food-nutrition/juicing-health-fresh-juice-good.jpg', 
    title: 'JUICE', 
    description: 'Juice is a liquid that comes from plants, animals or fruit. Some fruits that are often made into drinks are apple, orange, tomato, pineapple, watermelon, cranberry, grape, lemon and lime.', 
    price: '100' 
  },
  { id: 2, 
    image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/08/beauty-skin-care-cosmetics_thumb.jpg', 
    title: 'COSMETICS', 
    description: 'Cosmetics are products you apply to your body to clean it, make it more attractive, or change the way it looks. They include: Hair dyes, Makeup. They can come into multiple types with variety of ranges.', 
    price: '600' },
  { id: 3, 
    image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png', 
    title: 'SHOES', 
    description: 'A shoe is an item of footwear intended to protect and comfort the human foot. It is vulnerable, and shoes provide protection. Form was originally tied to function but over time shoes also became fashion items.', 
    price: '400' },
    { id: 4, 
      image: 'https://cdn.shopify.com/s/files/1/0070/7032/files/how_20to_20start_20a_20clothing_20brand.png?format=jpg&quality=90&v=1693935729&width=1024', 
      title: 'CLOTHES', 
      description: 'Discover new arrivals of statement pieces and treat yourself to something really special from our latest assortment of womens clothing. Browse through plenty of new dresses and find the latest trends.', 
      price: '200' },
      { id: 5, 
        image: 'https://stationers.pk/cdn/shop/articles/7_Must_Have_Student_Stationery_Supplies_In_High_School.jpg?v=1635331870', 
        title: 'STATIONARY', 
        description: 'Stationery refers to commercially manufactured writing materials, including cut paper, envelopes, writing implements, continuous form paper, and other office supplies.', 
        price: '50' 
      },
      { 
        id: 6, 
        image: 'https://bd.gaadicdn.com/processedimages/suzuki/hayabusa/640X309/hayabusa6433f99fc006a.jpg', 
        title: 'BIKES', 
        description: 'Bicycle, also called bike, two-wheeled steerable machine that is pedaled by the riders feet. On a standard bicycle the wheels are mounted in-line in a metal frame, with the front wheel held in a rotatable fork. There are variety of bikes available', 
        price: '100' 
      },
      { id: 7, 
        image: 'https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H-optimized.jpeg', 
        title: 'MOBILE PHONE', 
        description: 'a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area, as opposed to a fixed-location phone. There are various companies for mobile phones.', 
        price: '200' 
      },
      { id: 8, 
        image: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-31284,resizemode-75,msid-99794647/top-trending-products/electronics/laptops/best-asus-laptops-seamless-performance-and-unparalleled-quality-at-unbeatable-value.jpg', 
        title: 'LAPTOPS', 
        description: 'Durable 40.64cms (16) AMD Ryzen™-powered business laptop, Up to 40GB memory & 1TB SSD storage, for speed and productivity. Stunning WQXGA (2560 x 1600) display option. Various laptop companies are INTEL , APPLE , LENOVO , DELL.', 
        price: '400' 
      },
      { id: 9, 
        image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/1_2-sixteen_nine.jpg?VersionId=euPBmayE5g7G58NBaFQ_SKWYYLosEfNb', 
        title: 'HEADPHONES', 
        description: 'ANC Hybrid Active Noise Cancelling Bluetooth Wireless Over Ear Headphones with Up to 65H Playtime, ASAP Charge, Ambient Sound Mode, Immersive Sound, Carry Pouch(Gunmetal Grey). 1 year warranty from the date of purchase.', 
        price: '1000' 
      },
      { id: 10, 
        image: 'https://s7g10.scene7.com/is/image/kerry/cocktails-with-fruit-hero?ts=1663162256864&dpr=off&$TERTIARYHERO-Small$', 
        title: 'BEVERAGES', 
        description: 'A beverage is any type of drink. Its something you might offer a guest in your house, its also the favorite moniker of companies that manufacture both soda and juice — they call themselves beverage companies. Several beverages companies like pepsi,coke.', 
        price: '70' 
      },
];

const Products = () => {
  const [products] = useState(initialProducts);
  const [filter, setFilter] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const handleFilterChange = (filterCategory:string) => {
    setFilter(filterCategory);
  };

  const handleFilterValueChange = (event:any) => {
    setFilterValue(event.target.value);
  };

  const handleSortChange = (sortField:string) => {
    setSortField(sortField);
  };

  const handleSortOrderChange = (order:any) => {
    setSortOrder(order);
  };

  

  const getFilteredAndSortedProducts = () => {
    return products
      .filter((product) => {
        if (!filter || !filterValue) return true;
        
        if (filter === 'description') {
          return product.description.toLowerCase().includes(filterValue.toLowerCase());
        }

        if (filter === 'price') {
          return Number(product.price) <= Number(filterValue);
        }

        return true;
      })
      .sort((a:any, b:any) => {
        if (!sortField) return 0;
        
        let fieldA = a[sortField];
        let fieldB = b[sortField];
        
        if (sortField === 'price') {
          fieldA = Number(a[sortField]);
          fieldB = Number(b[sortField]);
        } else {
          fieldA = fieldA.toLowerCase();
          fieldB = fieldB.toLowerCase();
        }

        if (fieldA < fieldB) return sortOrder === 'asc' ? -1 : 1;
        if (fieldA > fieldB) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = getFilteredAndSortedProducts().slice(indexOfFirstItem, indexOfLastItem);

  const handlePageClick = (event:any) => {
    setCurrentPage(Number(event.target.id));
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li
        key={number.toString()} // Convert number to string for key
        id={number.toString()} // Convert number to string for id
        onClick={handlePageClick}
        className={currentPage === number ? 'bg-gray-800' : 'bg-black'}
        style={{ cursor: 'pointer', padding: '10px', margin: '2px' }}
      >
        {number}
      </li>
    );
  });
  

  return (
    <div className='bg-gray-200 h-[100%] pb-[30px]'>
      <div className='p-[25px] border-b border-black text-center'>
        <label className='text-[40px] text-green-500 font-bold' >SHOP NAV</label>
      </div>
      <div className='flex flex-col md:flex-row justify-end items-center border-b border-black py-5 px-6 bg-gray-600'>
        <label htmlFor="filter" className='text-xl mr-2 text-white'>Filter by : </label>
        <select className='text-black mr-5 mb-4 md:mb-0' id="filter" onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="">Select filter</option>
          <option value="description">Description</option>
          <option value="price">Price</option>
        </select>
        
        {filter && (
          <input
            type={filter === 'price' ? 'number' : 'text'}
            placeholder={`Enter ${filter}`}
            value={filterValue}
            onChange={handleFilterValueChange}
            className='text-black mb-4 md:mb-0'
          />
        )}
      </div>
      <div className='mb-[25px] mt-[25px] px-4 md:px-0 flex flex-col md:flex-row justify-between items-center'>
        <label className='text-[40px] pl-[15px] font-bold text-black'>PRODUCTS</label>
        <div className='flex flex-col md:flex-row items-center'>
          <label htmlFor="sort" className='text-xl mr-2 text-black'>Sort by: </label>
          <select className='text-black mb-4 md:mb-0 md:mr-5' id="sort" onChange={(e) => handleSortChange(e.target.value)}>
            <option value="">Select sort field</option>
            <option value="title">Title</option>
            <option value="price">Price</option>
            <option value="description">Description</option>
          </select>
          <button onClick={() => handleSortOrderChange('asc')} className='text-black md:ml-5'>Asc</button>
          <button onClick={() => handleSortOrderChange('desc')} className='mx-5 text-black md:mx-5'>Desc</button>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mx-[15px]'>
      {currentItems.map((product) => (
          <div key={product.id} className='flex flex-col p-4 rounded-2xl bg-gray-600 shadow-2xl'>
            <div>
              <img src={product.image} alt={product.title} className='h-[300px] md:h-[300px] w-full rounded-xl object-cover mb-5'/>
            </div>
            <div className='text-center font-bold'>{product.title}</div>
            <br/>
            <div className='mb-[10px] text-sm md:text-base'>
              {product.description}
            </div>
            <div className='font-semibold'>
              Price - ${product.price}
            </div>
          </div>
        ))}
      </div>
      <ul className='flex justify-center'>
        {renderPageNumbers}
      </ul>
    </div>
  );
};

export default Products;