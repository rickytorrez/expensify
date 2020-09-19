import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { ExpenseList } from '../../components/ExpenseList'; // make sure to import the unconnected component for testing
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />); // expenses passed in -> static data
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />); // empty array passed in
  expect(toJSON(wrapper)).toMatchSnapshot();
});
