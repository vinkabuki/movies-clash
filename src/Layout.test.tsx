import React from 'react'
import renderer from 'react-test-renderer'
import Layout from './Layout'

describe('Layout component basic test', () => {
  test('Render Layout component', () => {
    const component = renderer.create(<Layout />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
