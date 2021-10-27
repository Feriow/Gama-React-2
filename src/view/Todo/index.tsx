import React from "react";
import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";

// import { Container } from './styles';

const Todo: React.FC = () => {
  return (
    <div>
      <h1>Todo</h1>
      <AddTodo />
      <br />
      <hr />
      <TodoList />
    </div>
  );
};

export default Todo;
