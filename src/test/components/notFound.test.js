import { shallow } from 'enzyme'
import React from 'react';
import NotFound from '../../components/NotFoundPage';

test('Should render not found page', () => {
    const wrapper = shallow(<NotFound/>)
    expect(wrapper).toMatchSnapshot();
})