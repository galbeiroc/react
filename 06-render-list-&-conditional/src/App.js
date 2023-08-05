import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 20, 7),
  },
  { id: "e2", title: "New Tv", amount: 700.33, date: new Date(2023, 5, 5) },
  { id: "e3", title: "Computer", amount: 1099.5, date: new Date(2023, 28, 6) },
  { id: "e4", title: "Internet", amount: 46, date: new Date(2023, 15, 7) },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("in App.js ->", expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
