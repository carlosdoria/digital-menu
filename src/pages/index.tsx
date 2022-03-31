import type { NextPage } from 'next'
import { List } from '../components/List'

const Home: NextPage = () => {
  const LIST = [
    'a',
    'b',
    'c'
  ]

  return (
    <List items={LIST} />
  )
}

export default Home
