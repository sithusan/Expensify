import { shallow } from 'enzyme'
import React from 'react'
import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../components/ExpenseListItem'

test('Should render with expense list item wit expense', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})