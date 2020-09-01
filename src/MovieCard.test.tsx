import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import MovieCard from './MovieCard'

describe('MoviesCards component basic render test', () => {
  const currentItem = {
    id: 'cool99',
    imageURL: 'https://google.com/images.jpg',
    title: 'Matrix',
    summary: 'lorem ipsum',
    rating: 6.7
  }
  test('Render example movie item', () => {
    const component = renderer.create(<MovieCard item={currentItem} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
