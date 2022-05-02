import { Product } from 'components'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const PRODUCTS = [
    {
      name: 'a',
      description: 'description a'
    },
    {
      name: 'b',
      description: 'description b'
    },
    {
      name: 'c',
      description: 'description 3'
    },
  ]

  return (
    <>
      <Product
        title='Prato'
        description='DEscrição do prato com varios detalhes mais mainsa asdasdanas dasdasda sda sdadasdas '
        urlImg='https://source.unsplash.com/user/willianjusten/151x70'
        price={10}
      />
    </>
  )
}

export default Home
