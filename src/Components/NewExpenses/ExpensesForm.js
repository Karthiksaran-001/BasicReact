import React from "react";
import "./ExpensesForm.css";

function ExpensesForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__contro">
          <label>Title : </label>
          <input type="text" placeholder="Enter your Title" />
        </div>

        <div className="new-expense__contro">
          <label>Price : </label>
          <input type="number" min="0.01" step="0.01" />
        </div>

        <div className="new-expense__contro">
          <label>Date : </label>
          <input type="date" min="2021-01-01" max="2025-12-31" />
        </div>
      </div>

      <div className="new-expense__actions">
        <button>Add Expenses : </button>
      </div>
    </form>
  );
}

export default ExpensesForm;
