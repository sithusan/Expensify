import { sortByAmount, sortByDate, setStartDate, setTextFilter, setEndDate } from '../../actions/filters'
import moment from 'moment'

test('should generate set start date action object',() => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    })
})

test('should generate set end date action object',() => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
})

test('should set sortBy amount object',() => {
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})

test('should set sortBy Date object',() => {
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})

test('should set text filter object',() => {
    const text = 'This is text';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    })
})

test('should generate set fext filter object with default value',() => {
    const action =setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})