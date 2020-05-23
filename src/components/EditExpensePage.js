import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './expenseForm'
import { RemoveExpense,editExpense } from '../actions/expenses.js'

const EditExpensePage = (props) => (
    <div>
        <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
            props.dispatch(editExpense(props.match.params.id,expense))
            props.history.push('/')
        }}
        />
        <button onClick={() => {
            props.dispatch(RemoveExpense({id:props.expense.id}))
            props.history.push('/')

        }}>Remove</button>
    </div>
)

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}
export default connect(mapStateToProps)(EditExpensePage);