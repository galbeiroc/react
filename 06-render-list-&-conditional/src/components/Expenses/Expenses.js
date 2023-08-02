import { useState } from "react";
import Card from "../UI/Card";
import ExpensiveItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [filtered, setFiltered] = useState("2020");

  const filtereChangeHandler = (selectedYear) => {
    setFiltered(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => filtered === expense.date.getFullYear().toString()
  );

  let expensesContent = <p>Expenses not found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpensiveItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          filtered={filtered}
          onChangeFilter={filtereChangeHandler}
        />
        {expensesContent}
      </Card>
    </>
  );
};

export default Expenses;
