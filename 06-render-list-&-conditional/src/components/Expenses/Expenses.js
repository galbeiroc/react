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

  const filteredExpenses = props.expenses.filter((expense) => filtered === expense.date.getFullYear().toString());

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filtered={filtered}
          onChangeFilter={filtereChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpensiveItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
