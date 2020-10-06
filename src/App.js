import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';

import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();
store.dispatch(startSetExpenses());

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
