import React from 'react'
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/expenseForm';
import expenses from '../fixtures/expenses';


test('should be render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
})

// test('Should render data correctly with expense data', () => {
//     const wrapper = shallow(<ExpenseForm expenses={expenses} />)
//     expect(wrapper).toMatchSnapshot();
// })

// test('should render error for invalid user submission', () => {
//     const wrapper = shallow(<ExpenseForm/>);
//     wrapper.find('form').simulate('submit',{
//         preventDefault: () => {}
//     })
//     expect(wrapper.state('error').length).toBeGreaterThan(0);
//     expect(wrapper).toMatchSnapshot();
// })


// test('Should set description on input change',() => {
//     const value = 'New Description'
//     const wrapper = shallow(<ExpenseForm/>))
//     wrapper.find('input').at(0).simulate('change',{
//         target:{value}
//     })
// expect(wrapper.state('descriptoin')).toBe(value)
// })
// test('Should set description on text area change', () => {
//     const value = 'New Note value'
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('textarea').at(0).simulate('change', {
//         target: { value }
//     })
//     expect(wrapper.state('note')).toBe(value)
// })

// test('Should set amount if valid', () => {
//     const value = '23.50'
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('input').at(1).simulate('change', {
//         target: { value }
//     })
//     expect(wrapper.state('amount')).toBe(value)
// })
// test('Should not set amount if invalid', () => {
//     const value = '23.506'
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('input').at(1).simulate('change', {
//         target: { value }
//     })
//     expect(wrapper.state('amount')).toBe('')
// })