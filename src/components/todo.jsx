import { Table } from "react-bootstrap";

function TodoList() {
  return (
    <div className="container">
      <h2>Todo List with Bootstrap!</h2>
      <div>
        <Table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Learn Backend w/ Java</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default TodoList;
