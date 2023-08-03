import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filtered, setFiltered] = useState("2020");

  const filtereChangeHandler = (selectedYear) => {
    setFiltered(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => filtered === expense.date.getFullYear().toString()
  );

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          filtered={filtered}
          onChangeFilter={filtereChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
