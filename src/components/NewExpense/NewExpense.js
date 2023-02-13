import React from 'react';
import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log('Saving expense data');

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);

    updateNewExpense(false);
  };

  const [addNewExpense, updateNewExpense] = useState(false);

  const addNewExpenseHandler = () => {
    updateNewExpense(true);
  };

  const cancelExpenseHandler = () => {
    updateNewExpense(false);
  };

  let content = '';
  if (addNewExpense) {
    content = (
      <div>
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpense={cancelExpenseHandler}
        />
      </div>
    );
  } else {
    content = (
      <div>
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      </div>
    );
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
