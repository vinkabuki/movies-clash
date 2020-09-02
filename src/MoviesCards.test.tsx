import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import 'jest-styled-components'
import MoviesCards from './MoviesCards'

describe('MoviesCards component basic shallow render test', () => {
  const movies = [
    {
      id: 'cool99',
      imageURL: 'https://google.com/images.jpg',
      title: 'Matrix',
      summary: 'badass movie',
      rating: 6.7
    },
    {
      id: 'daddy78',
      imageURL: 'https://google.com/imagesDaddy.jpg',
      title: 'Avatar',
      summary: 'cool movie',
      rating: 9.9
    }
  ]
  test('Render MoviesCards component', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<MoviesCards movies={movies} />)
    const component = renderer.getRenderOutput()
    expect(component).toMatchSnapshot()
  })
})
