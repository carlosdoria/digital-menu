import { render, screen } from '@testing-library/react'
import { List } from '.'

const LIST = [
  'a',
  'b',
  'c'
]

describe('List Component', () => {
  it('Render correctly', () => {
    const { debug } = render(<List items={LIST} />)
    debug()
    // expect(screen.getByText('a')).toBeInTheDocument()

  })
})
