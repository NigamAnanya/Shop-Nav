import Image from 'next/image'
import { Inter } from 'next/font/google'
import Products from './Products'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Products/>
          </main>
  )
}
