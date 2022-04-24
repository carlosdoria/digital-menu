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
        description='pratoooo'
        title='prasdfsdfsd asdasd asda asdasdads ads ads ads asdasda '
        urlImg='https://source.unsplash.com/user/willianjusten/151x70'
        value={10}
      />
    </>
  )
}

export default Home
