import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "RENT",
      amount: 5000,
      date: new Date(),
    },
    { id: "e2", title: "FOOD", amount: 5000, date: new Date() },
    {
      id: "e3",
      title: "GROCERIES",
      amount: 1000,
      date: new Date(),
    },
    {
      id: "e4",

      title: "ROAMING",
      amount: 1000,
      date: new Date(),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
