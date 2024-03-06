import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import TodoForm from "./addTodo";

function TodoList() {
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Backend w/ Java", status: "Completed" },
    // Add more todos as needed
  ]);

  function handleTodoSelection(todo) {
    const isSelected = selectedTodos.includes(todo.id);
    if (isSelected) {
      setSelectedTodos(selectedTodos.filter((id) => id !== todo.id));
    } else {
      setSelectedTodos([...selectedTodos, todo.id]);
    }
  }

  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo]); // Add the new todo to the list
  }

  function handleDeleteTodos() {
    const updatedTodos = todos.filter(
      (todo) => !selectedTodos.includes(todo.id)
    );
    setTodos(updatedTodos);
    setSelectedTodos([]); // Clear selectedTodos after deletion
  }

  return (
    <div className="container">
      <div className="todo-header">
        <h2>Todo List with Bootstrap!</h2>
        {!showForm && (
          <Button
            className="btn btn-success m-2"
            onClick={() => setShowForm(true)}
          >
            Add New Todo
          </Button>
        )}
        {showForm && (
          <TodoForm onAddTodo={handleAddTodo} setShowForm={setShowForm} />
        )}
      </div>

      <div>
        <Table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.status}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleTodoSelection(todo)}
                    checked={selectedTodos.includes(todo.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        <Button className="btn btn-warning m-2" onClick={handleDeleteTodos}>
          Delete Todo
        </Button>
      </div>
    </div>
  );
}

export default TodoList;
