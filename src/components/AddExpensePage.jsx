import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export const AddExpensePage = (props) => {
  const onSubmit = (expense) => {
    this.props.onSubmit(expense);
    this.props.history.push('/');
  };

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
          props.history.push('/');
        }}
      />
    </div>
  );
};

const mapDispatchToProps = (disptach) => ({
  onSubmit: (expense) => disptach(addExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
