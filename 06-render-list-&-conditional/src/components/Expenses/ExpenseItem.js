import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpensiveItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');

  const clickHnadler = () => {
    setTitle('Updated');
    console.log('Clicked!!', title);
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={clickHnadler}>Change Title</button>
        </div>
      </Card>
    </li>
  );
}

export default ExpensiveItem;
