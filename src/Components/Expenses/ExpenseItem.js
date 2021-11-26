import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react"; ///here we use state method so we import
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [tit, setTitle] = useState(props.title); // call our useState object and called inside of our components not outside or inside of custom function

  // functions
  const clicks = () => {
    setTitle("Updated Title"); // NOW IT UPDATED RENT into Updated Title
    console.log(tit);
  }; // function for onclick

  //In React Onclick we just pass the function name not paranthesis*/
  // In React we pass onclick to anyelement like h2 , p , button etc

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{tit}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>

      <button onClick={clicks}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
