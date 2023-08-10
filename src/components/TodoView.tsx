import { Todo } from "../lib/types";

const TodoView = ({ todo }: { todo: Todo }) => {
  return (
    <article
      id="todo-{todo.id}"
      className="flex w-full gap-3 rounded border border-black px-3 py-2"
    >
      <div className="flex w-full flex-col gap-2">
        <h1 className="border-b border-white text-xl font-bold">
          {todo.title}
        </h1>
        <p className="border-b border-white">{todo.content}</p>
      </div>
      <div className="flex flex-col justify-center"></div>
    </article>
  );
};

export default TodoView;
