import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends Component {
  onSubmit = (expense) => {
    this.props.onSubmit(expense);
    this.props.history.push('/');
  };

  render() {
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={this.onSubmit} />
    </div>;
  }
}

const mapDispatchToProps = (disptach) => ({
  onSubmit: (expense) => disptach(addExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
