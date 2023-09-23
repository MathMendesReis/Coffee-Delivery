import { StaticImageData } from 'next/image'

export interface Coffees {
  id: string
  category: string[]
  name: string
  description: string
  price: number
  imageUrl: StaticImageData
}
