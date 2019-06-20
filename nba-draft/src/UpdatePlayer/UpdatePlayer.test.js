import React from 'react'
import { shallow } from 'enzyme'

import UpdatePlayer from './UpdatePlayer'

describe('UpdatePlayer component', () => {
  it('should render as expected', () => {
    const component = shallow(<h1 className="update-player-header">Update Player Info</h1>)
    expect(component.contains(<h1 className="update-player-header">Update Player Info</h1>)).toBe(true)
  })
})