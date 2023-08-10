import { useState } from "react";
import { Todo } from "../lib/types";

const TodoCreate = ({ onCreate }: { onCreate: (todo: Todo) => void }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const createTodo = (e: React.FormEvent): void => {
    e.preventDefault();

    if (!title) return;

    const todo: Todo = {
      id: Math.floor(Math.random() * 1_000),
      title,
      content,
    };

    onCreate(todo);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (!value) return;
    setTitle(value);
  };

  const handleTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const value = e.target.value;
    if (!value) return;
    setContent(value);
  };

  return (
    <form
      onSubmit={createTodo}
      className="mx-auto flex flex-col gap-3 rounded border border-black px-3 py-2 lg:w-1/2"
    >
      <section className="flex flex-col">
        <label htmlFor="todo-title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="rounded border border-black px-2 py-1"
          required
          maxLength={80}
          onChange={handleInputChange}
        />
      </section>
      <section className="flex flex-col">
        <label htmlFor="todo-content">Content</label>
        <textarea
          name="content"
          id="content"
          cols={30}
          rows={2}
          className="rounded border border-black px-2 py-1"
          required
          maxLength={300}
          onChange={handleTextAreaChange}
        />
      </section>
      <button
        className="rounded border border-black px-3 py-2 outline-black hover:bg-zinc-100 active:bg-zinc-200"
        type="submit"
      >
        Create
      </button>
    </form>
  );
};

export default TodoCreate;
