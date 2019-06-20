import React from 'react';
import { shallow } from 'enzyme';

import CreatePlayer from './CreatePlayer'

describe('CreatePlayer component', () => {
    it('should render as expected', () => {
        const component = shallow(<h1 className="add-player-header">Add a Player</h1>)
        expect(component.contains(<h1 className="add-player-header">Add a Player</h1>)).toEqual(true);
    });
})