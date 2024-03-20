import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddExpense() {
    let [expenseName, setExpenseName] = useState("");
    let [expenseAmount, setExpenseAmount] = useState("");
    let [expenseDate, setExpenseDate] = useState("");
    let [expenseCategory, setExpenseCategory] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFormSubmit = () => {
    console.log(document.getElementById("exp-name"));
    setExpenseName(document.getElementById("exp-name").value);
    setExpenseAmount(document.getElementById("exp-amt").value);
    setExpenseDate(document.getElementById("exp-date").value);
    setExpenseCategory(document.getElementById("exp-cat").value);
    console.log(expenseName);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Expense
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Expense Name</Form.Label>
                    <Form.Control id="exp-name" type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Expense Amount</Form.Label>
                    <Form.Control id="exp-amt" type="number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Date</Form.Label>
                    <Form.Control id="exp-date" type="date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Category</Form.Label>
                        <Form.Select id="exp-cat" aria-label="Default select example" >
                            <option>Open this select menu</option>
                            <option value="1">Meals & Entertainment</option>
                            <option value="2">Transportation</option>
                            <option value="3">Office Supplies</option>
                        </Form.Select>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFormSubmit} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddExpense;