import React from 'react';
import ExpenseListItem from './ExpenseListItem'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>There is no Expense</p>
            ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem
                            key={expense.id}
                            {...expense}
                        />
                    })
                )
        }
    </div>
)
const mapstateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filter)
    }
}
export default connect(mapstateToProps)(ExpenseList);