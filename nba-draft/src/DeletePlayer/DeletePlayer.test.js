import React from 'react'
import { shallow } from 'enzyme'

import DeletePlayer from './DeletePlayer'

describe('DeletePlayer component', () => {
  it('should render as expected', () => {
    const component = shallow(<h1 className="delete-player-header">Delete a Player</h1>)
    expect(component.contains(<h1 className="delete-player-header">Delete a Player</h1>)).toBe(true)
  })
})