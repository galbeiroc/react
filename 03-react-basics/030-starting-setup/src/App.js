import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2023, 20, 7) },
    { id: 'e2', title: 'New Tv', amount: 700.33, date: new Date(2023, 5, 5) },
    { id: 'e3', title: 'Computer', amount: 1099.50, date: new Date(2023, 28, 6) },
    { id: 'e4', title: 'Internet', amount: 46, date: new Date(2023, 15, 7) }
  ];

  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
