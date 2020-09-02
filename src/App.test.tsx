import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import App from './App'

describe('App component basic shallow render test', () => {
  test('Render App component', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<App />)
    const component = renderer.getRenderOutput()
    expect(component).toMatchSnapshot()
  })
})
