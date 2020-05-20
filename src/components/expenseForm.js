import React from 'react'
import moment from 'moment'
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseFrom extends React.Component {
    constructor(props) {
        super(props);
        { console.log(props.expense) }
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (e) => {
        const createdAt = moment(e.target.value);
        this.setState(() => ({ createdAt }))
    }
    onFocusChange = () => {
        this.setState((prevState) => ({ calendarFocused: !prevState.calendarFocused }))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.error &&
                    <p>{this.state.error}</p>
                }
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <input
                        type="date"
                        onChange={this.onDateChange}
                    />
                    <textarea onChange={this.onNoteChange}
                        placeholder="A note for your expense"
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}