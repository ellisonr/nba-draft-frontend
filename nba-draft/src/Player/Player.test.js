import React from 'react'
import { shallow } from 'enzyme'

import Player from './Player'

describe('Player component', () => {
  it('should render as expected', () => {
    const component = shallow(<h1>{singlePlayer.name}</h1>)
    expect(component.contains(<h1>{singlePlayer.name}</h1>)).toBe(true)
  })
})