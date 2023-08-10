import { useState } from "react";
import { Todo } from "./lib/types";
import TodoCreate from "./components/TodoCreate";
import TodoView from "./components/TodoView";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const createTodo = (todo: Todo): void => {
    setTodos([...todos, todo]);
  };

  return (
    <section className="flex w-full flex-col gap-y-5">
      <TodoCreate onCreate={createTodo}></TodoCreate>
      <hr className="mx-auto lg:w-1/2" />
      <section className="mx-auto flex flex-col gap-3 lg:w-1/2">
        {todos.map((todo: Todo) => (
          <TodoView key={todo.id} todo={todo}></TodoView>
        ))}
      </section>
    </section>
  );
};

export default App;
