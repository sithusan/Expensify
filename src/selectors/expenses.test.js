import { AddExpense, RemoveExpense, editExpense } from '../actions/expenses'

test('should setup remove expense action object', () => {
    const action = RemoveExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123', { note: 'New Note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            note: 'New Note value'
        }
    })
})


test('should setup add expenses action object with provided value', () => {
    const expenseData = {
        description: 'Rent',
        note: 'This was last month rent',
        amount: 109500,
        createdAt: 1000
    }
    const action = AddExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
})

test('should setup add expense action object with default value', () => {
    const action = AddExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})