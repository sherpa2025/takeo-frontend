import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import TodoList from "./components/todo";
import Navbar from "./components/navbar";
import TodoForm from "./components/addTodo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add-todo" element={<TodoForm />} />
      </Routes>
    </>
  );
}

export default App;
