import React from 'react';
import ExpenseForm from './expenseForm'
import { connect } from 'react-redux'
import { AddExpense } from '../actions/expenses.js'
const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(AddExpense(expense))
                props.history.push('/')
            }}
        />
    </div>
)
export default connect()(AddExpensePage)