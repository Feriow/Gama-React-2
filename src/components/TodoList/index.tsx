import React, { useContext } from "react";
import { Context as TodoContext } from "../../context/TodoContext";
import { deleteTodo } from "../../actions/TodoActions";

const TodoList: React.FC = () => {
  const {
    state: { todos },
    dispatch,
  } = useContext(TodoContext);

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return todos.length > 0 ? (
    <div>
      <h1>To Do List</h1>
      <ul>
        {todos.map(({ id, title }) => (
          <li key={id}>
            {title} - <button onClick={() => handleDelete(id)}>delete</button>
          </li>
        ))}
      </ul>

      <h5>
        Eu tenho {todos.length} {todos.length > 1 ? "tarefas" : "tarefa"}{" "}
      </h5>
    </div>
  ) : (
    <div>
      <h5>Sem Tarefas</h5>
    </div>
  );
};

export default TodoList;
