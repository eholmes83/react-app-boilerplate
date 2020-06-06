import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListItem from '../components/ExpenseListItem'
import ExpenseListFilters from '../components/ExpenseListFilters'

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListItem />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
