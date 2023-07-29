import { useState } from "react";
import Card from "../UI/Card";
import ExpensiveItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [filtered, setFiltered] = useState('2020');

  let filterInfoText = '2021, 2022, 2023, 2024 & 2025';

  if (filtered === '2020') {
    filterInfoText = '2021, 2022, 2023, 2024 & 2025';
  } else if (filtered === '2021') {
    filterInfoText = '2020, 2022, 2023, 2024 & 2025';
  } else if (filtered === '2022') {
    filterInfoText = '2020, 2021, 2023, 2024 & 2025';
  } else if (filtered === '2023') {
    filterInfoText = '2020, 2021, 2022, 2024 & 2025';
  } else if (filtered === '2024') {
    filterInfoText = '2020, 2021, 2022, 2023 & 2025';
  } else {
    filterInfoText = '2020, 2021, 2022, 2023 & 2024';
  }


  const filtereChangeHandler = selectedYear => {
    setFiltered(selectedYear);
    /* if (selectedYear === '2020') {
      setFilterInfoText('2021, 2022, 2023, 2024 & 2025');
    } else if (selectedYear === '2021') {
      setFilterInfoText('2020, 2022, 2023, 2024 & 2025');
    } else if (selectedYear === '2022') {
      setFilterInfoText('2020, 2021, 2023, 2024 & 2025');
    } else if (selectedYear === '2023') {
      setFilterInfoText('2020, 2021, 2022, 2024 & 2025');
    } else if (selectedYear === '2024') {
      setFilterInfoText('2020, 2021, 2022, 2023 & 2025');
    } else {
      setFilterInfoText('2020, 2021, 2022, 2023 & 2025');
    } */
    console.log('expenses.js', selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filtered={filtered} onChangeFilter={filtereChangeHandler} />
        <p>Data for years {filterInfoText} is hidden.</p>
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
