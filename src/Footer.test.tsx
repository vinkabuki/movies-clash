import React from 'react'
import renderer from 'react-test-renderer'
import Footer from './Footer'

describe('Footer component basic test', () => {
  test('Render footer component', () => {
    const component = renderer.create(<Footer />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
