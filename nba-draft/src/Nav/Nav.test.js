import React from 'react'
import { shallow } from 'enzyme'

import Nav from './Nav'

// We will describe a block of tests
describe('Nav component', () => {
  it('should render as expected', () => {
    const component = shallow(<h1>2019 NBA Prospects</h1>)
    expect(component.contains(<h1>2019 NBA Prospects</h1>)).toBe(true)
  })
})