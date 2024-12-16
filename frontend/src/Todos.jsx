import { useEffect, useState } from "react";
import { Todo } from "./Todo";
import { CreateTodo } from "./CreateTodo";
export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const json = await response.json();
    setTodos(json);
    console.log(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CreateTodo />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} id={todo._id} />
      ))}
    </div>
  );
};
