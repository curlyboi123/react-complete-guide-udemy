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

    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="new-expense">
      {!isEditing && (
        <button
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpense={() => {
            setIsEditing(false);
          }}
        />
      )}
    </div>
  );
};

export default NewExpense;
