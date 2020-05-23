import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'
test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense by id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test('should add expenses', () => {
    const expense = {
        id: '4',
        description: 'GUMMM',
        note: '',
        amount: 200,
        createdAt: 100
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense:expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses,expense])
})

test('should edit expense',() => {
    const action = {
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{
            amount:'30000'
        }
    }
    const state = expensesReducer(expenses,action);
    expect(state[1].amount).toBe('30000');    
})

test('shoudl not edit expense if id is not found',() => {
    const action = {
        type:'EDIT_EXPENSE',
        id:'-1',
        updates:{
            amount:'5000'
        }
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
})