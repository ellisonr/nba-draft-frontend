import React from 'react'
import { shallow } from 'enzyme'

import Nav from './Nav'

describe('Nav component', () => {
  it('should render as expected', () => {
    const component = shallow(<h1>2019 NBA Prospects</h1>)
    expect(component.contains(<h1>2019 NBA Prospects</h1>)).toBe(true)
  })
})