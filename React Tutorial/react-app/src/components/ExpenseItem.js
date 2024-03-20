import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const ExpenseItem = (props) => {
    return (
        <Col>
        <Card>
            <Card.Body>
                <Card.Title>{props.item.expense_name}</Card.Title>
                <Card.Text>{props.item.category}</Card.Text>
                <Card.Text className="align-self-end">₹{props.item.amount}/-</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{props.item.date}</small>
            </Card.Footer>
        </Card>
        </Col>
    )
}

export default ExpenseItem;
