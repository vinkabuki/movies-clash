import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Body from './Body'

describe('Body component basic shallow test', () => {
  test('Render Body component', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Body />)
    const component = renderer.getRenderOutput()
    expect(component).toMatchSnapshot()
  })
})
