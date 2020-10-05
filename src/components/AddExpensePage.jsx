import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export const AddExpensePage = (props) => {
  const onSubmit = (expense) => {
    props.startAddExpense(expense);
    props.history.push('/');
  };

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

const mapDispatchToProps = (disptach) => ({
  startAddExpense: (expense) => disptach(startAddExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
