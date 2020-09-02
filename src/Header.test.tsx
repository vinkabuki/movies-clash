import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'

describe('Header component basic test', () => {
  test('Render header component', () => {
    const component = renderer.create(<Header />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
