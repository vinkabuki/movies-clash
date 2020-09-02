import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import App from './App'

describe('App component basic shallow test', () => {
  test('Render main component', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<App />)
    const component = renderer.getRenderOutput()
    expect(component).toMatchSnapshot()
  })
})
