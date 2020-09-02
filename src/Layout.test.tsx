import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Layout from './Layout'

describe('Layout component basic shallow test', () => {
  test('Render Layout component', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Layout />)
    const component = renderer.getRenderOutput()
    expect(component).toMatchSnapshot()
  })
})
