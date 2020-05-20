import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import configureStore from './store/configureStore'
import AppRouter from './routes/AppRouter'
import { AddExpense } from './actions/expenses'
import getVisibleExpense from './selectors/expenses';
import { setTextFilter } from './actions/filters';
import './firebase/firebase';
import './playground/promises'

const store = configureStore();
store.dispatch(AddExpense({ description: 'Water Bill', note: 'water', amount: 1000, createdAt: 2000 }));
store.dispatch(AddExpense({ description: 'Gas Bill', note: 'gas', amount: 4500,createdAt:1000 }));
store.dispatch(AddExpense({ description: 'Rent', note: 'rent', amount: 109500, createdAt: 3000 }));


// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)


const state = store.getState();
const visibleExpenses = getVisibleExpense(state.expenses, state.filter);
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter></AppRouter>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
