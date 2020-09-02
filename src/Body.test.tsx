import React from 'react'
import renderer from 'react-test-renderer'
import Body from './Body'

describe('Body component basic test', () => {
  test('Render body component', () => {
    const component = renderer.create(<Body />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
