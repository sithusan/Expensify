import selectExpenses from '../../selectors/expenses'
import moment from 'moment';
import expenses from '../fixtures/expenses'

test('Should filter by text value', () => {
    const filter = {
        text: 'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([
        expenses[1],
        expenses[2]
    ])
}); 

test('should filter by amount',() => {
    const filter = {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpenses(expenses,filter);
    expect(result).toEqual([
        expenses[1],
        expenses[2],
        expenses[0]
    ])
})