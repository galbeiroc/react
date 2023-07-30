import { useState } from "react";
import Card from "../UI/Card";
import ExpensiveItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [filtered, setFiltered] = useState('2020');

  const filtereChangeHandler = selectedYear => {
    setFiltered(selectedYear);
    console.log('expenses.js', selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filtered={filtered} onChangeFilter={filtereChangeHandler} />
        <ExpensiveItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpensiveItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpensiveItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpensiveItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
