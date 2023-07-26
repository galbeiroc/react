import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpensiveItem = (props) => {
  const clickHnadler = () => {
    console.log('Clicked!!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHnadler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpensiveItem;
