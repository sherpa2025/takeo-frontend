import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function TodoForm({ onAddTodo, setShowForm }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");

  function generateRandomId() {
    return Math.floor(Math.random() * 1000000); // Generate a random number
  }
  function handleSubmit(event) {
    event.preventDefault();
    const newTodo = {
      id: generateRandomId(),
      title,
      status,
    };
    onAddTodo(newTodo); // Invoke the callback with the new todo
    setTitle("");
    setStatus("Pending");
    setShowForm(false);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Status:</Form.Label>
        <Form.Control
          as="select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </Form.Control>
      </Form.Group>
      <Button type="submit" className="btn btn-success m-2">
        Add New Todo
      </Button>
      <Button
        type="button"
        className="btn btn-secondary m-2"
        onClick={() => setShowForm(false)}
      >
        Cancel
      </Button>
    </Form>
  );
}

export default TodoForm;
