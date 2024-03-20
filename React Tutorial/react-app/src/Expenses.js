import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import "./Expenses.css";
import Row from "react-bootstrap/Row";
import AddExpense from "./components/AddExpense";
import Navigation from "./components/Navigation";

const Expenses = () => {
    let expenseList = [
        {
          date: "2024-03-19",
          expense_name: "Lunch meeting with clients",
          amount: 50.00,
          category: "Meals & Entertainment"
        },
        {
          date: "2024-03-18",
          expense_name: "Gasoline refill",
          amount: 40.00,
          category: "Transportation"
        },
        {
          date: "2024-03-17",
          expense_name: "Office supplies purchase",
          amount: 100.00,
          category: "Office Supplies"
        },
        {
          date: "2024-03-16",
          expense_name: "Dinner with colleagues",
          amount: 60.00,
          category: "Meals & Entertainment"
        },
        {
          date: "2024-03-15",
          expense_name: "Taxi fare",
          amount: 25.00,
          category: "Transportation"
        },
        {
          date: "2024-03-14",
          expense_name: "Printer ink",
          amount: 50.00,
          category: "Office Supplies"
        },
        {
          date: "2024-03-13",
          expense_name: "Coffee with friends",
          amount: 15.00,
          category: "Meals & Entertainment"
        },
        {
          date: "2024-03-12",
          expense_name: "Bus pass",
          amount: 30.00,
          category: "Transportation"
        },
        {
          date: "2024-03-11",
          expense_name: "Notebook purchase",
          amount: 10.00,
          category: "Office Supplies"
        },
        {
          date: "2024-03-10",
          expense_name: "Dinner at a restaurant",
          amount: 70.00,
          category: "Meals & Entertainment"
        }
      ];
      

    return (
        <>
          <Navigation />
          <div className="text-center">
            <h3 className="text-center my-4">Expense Tracker</h3>
            <AddExpense className="text-center" />
            <Row xs={1} md={3} className="g-4 m-5">
                {
                    expenseList.map((expense) => {
                        return <ExpenseItem item={expense} />
                    })
                }
            </Row>
        </div>
        </>
    )
}

export default Expenses;