import React from 'react';
import ExpenseListItem from './ExpenseListItem'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => (
            <ExpenseListItem
                key={expense.id}
                {...expense}
            />
        ))}
    </div>
)
const mapstateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filter)
    }
}
export default connect(mapstateToProps)(ExpenseList);