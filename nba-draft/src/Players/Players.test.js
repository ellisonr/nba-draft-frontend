import React from 'react'
import { shallow } from 'enzyme'

import Players from './Players'

describe('Nav component', () => {
  it('should render as expected', () => {
    const component = shallow(<div className="print-area">{allPlayers}</div>)
    expect(component.contains(<div className="print-area">{allPlayers}</div>)).toBe(true)
  })
})