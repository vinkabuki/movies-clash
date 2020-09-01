import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import MoviesCards from './MoviesCards'

describe('MoviesCards component basic render test', () => {
  const movies = [
    {
      id: 'cool99',
      imageURL: 'https://google.com/images.jpg',
      title: 'Matrix',
      summary: 'lorem ipsum',
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
  test('Render example movie item', () => {
    const component = renderer.create(<MoviesCards movies={movies} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
