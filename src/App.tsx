import { useEffect, useState } from "react";
import { Todo } from "./lib/types";
import TodoCreate from "./components/TodoCreate";
import TodoView from "./components/TodoView";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.todos) || [];
    setTodos(todos);
  }, []);

  useEffect(() => {
    if (todos.length > 0) localStorage.todos = JSON.stringify(todos);
  }, [todos]);

  const createTodo = (todo: Todo): void => {
    setTodos([...todos, todo]);
  };

  const editTodo = (updated_todo: Todo): void => {
    setTodos([
      ...todos.filter((todo: Todo) => todo.id !== updated_todo.id),
      updated_todo,
    ]);
  };

  const deleteTodo = (todo_id: number): void => {
    setTodos([...todos.filter((todo: Todo) => todo.id !== todo_id)]);
  };

  return (
    <section className="flex w-full flex-col gap-y-5">
      <TodoCreate onCreate={createTodo}></TodoCreate>
      <hr className="mx-auto lg:w-1/2" />
      <section className="mx-auto flex flex-col gap-3 lg:w-1/2">
        {todos.map((todo: Todo) => (
          <TodoView
            key={todo.id}
            todo={todo}
            onEdit={editTodo}
            onDelete={deleteTodo}
          ></TodoView>
        ))}
      </section>
    </section>
  );
};

export default App;
