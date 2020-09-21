import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem correctly', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[1]} />); // spread the expense at index[1] rather than writing all properties in
  expect(toJSON(wrapper)).toMatchSnapshot();
});
