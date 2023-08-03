import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData

    }
    onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      {showForm && <ExpenseForm setShowForm={setShowForm} onSaveExpenseData={saveExpenseDataHandler} />}
      {!showForm && <button type="button" onClick={() => setShowForm(true)}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
