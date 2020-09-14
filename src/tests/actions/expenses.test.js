import {
  addExpense,
  editExpense,
  removeExpense,
} from '../../actions/expenses.js';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});
