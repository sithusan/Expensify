import filterReducer from '../../reducers/filters'
import moment from 'moment'
test('should setup filter values',() => {
    const state = filterReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')

    })
})

test('should setup sort by to amount',() => {
    const state = filterReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should setup sort by to date',() => {
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'date'
    }
    const action = {type:'SORT_BY_DATE'}
    const state = filterReducer(currentState,action)
    expect(state.sortBy).toBe('date')
})


test('should setup text filter',() => {
    const text = 'this is my filter'
    const action = {
        type:'SET_TEXT_FILTER',
        text
    }
    const state = filterReducer(undefined,action);
    expect(state.text).toBe(text);
})