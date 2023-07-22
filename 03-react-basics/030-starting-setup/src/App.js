import ExpensiveItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2023, 20, 7) },
    { id: 'e2', title: 'New Tv', amount: 700.33, date: new Date(2023, 5, 5) },
    { id: 'e3', title: 'Computer', amount: 1099.50, date: new Date(2023, 28, 6) },
    { id: 'e4', title: 'Internet', amount: 46, date: new Date(2023, 15, 7) }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpensiveItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpensiveItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpensiveItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpensiveItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </div>
  );
}

export default App;
