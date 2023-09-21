import tradicional from '../assets/coffees/tradicional.png'
import americano from '../assets/coffees/americano.png'
import cremoso from '../assets/coffees/cremoso.png'
import gelado from '../assets/coffees/gelado.png'
import cafeComLeite from '../assets/coffees/cafeComLeite.png'
import latte from '../assets/coffees/latte.png'
import Capuccino from '../assets/coffees/capuccino.png'
import Macchiato from '../assets/coffees/Macchiato.png'
import { v4 as uuidv4 } from 'uuid'
import { Coffees } from '../types/coffees'

export const productsList: Coffees[] = [
  {
    id: uuidv4(),
    category: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 990,
    imageUrl: tradicional,
  },
  {
    id: uuidv4(),
    category: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 990,
    imageUrl: americano,
  },
  {
    id: uuidv4(),
    category: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso cremoso com espuma tradicional',
    price: 990,
    imageUrl: cremoso,
  },
  {
    id: uuidv4(),
    category: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 990,
    imageUrl: gelado,
  },
  {
    id: uuidv4(),
    category: ['tradicional', 'com leite'],
    name: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com expresso vaporizado',
    price: 990,
    imageUrl: cafeComLeite,
  },
  {
    id: uuidv4(),
    category: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 990,
    imageUrl: latte,
  },
  {
    id: uuidv4(),
    category: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 990,
    imageUrl: Capuccino,
  },
  {
    id: uuidv4(),
    category: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 990,
    imageUrl: Macchiato,
  },
]