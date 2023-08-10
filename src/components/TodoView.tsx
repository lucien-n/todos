import { useEffect, useState } from "react";
import { Todo } from "../lib/types";
import TodoActions from "./TodoActions";
import TodoContent from "./TodoContent";

const TodoView = ({
  todo,
  onEdit,
  onDelete,
}: {
  todo: Todo;
  onEdit: (todo: Todo) => void;
  onDelete: (id: number) => void;
}) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    setChecked(todo.checked);
  }, [todo, setChecked]);

  useEffect(() => {
    todo.checked = checked;
  }, [todo, checked]);

  const toggleEditing = (): void => {
    setEditing(!editing);
  };

  const toggleChecked = (): void => {
    setChecked(!checked);
  };

  const editTodo = (): void => {
    if (!title) return;

    todo.title = title;
    todo.content = content;

    onEdit(todo);
    toggleEditing();
  };

  const deleteTodo = (): void => {
    onDelete(todo.id);
  };

  const onTitle = (new_title: string) => {
    if (new_title) setTitle(new_title);
  };

  const onContent = (new_content: string) => {
    if (new_content) setContent(new_content);
  };

  return (
    <article
      id="todo-{todo.id}"
      className="flex w-full gap-3 rounded border border-black px-3 py-2"
    >
      <div className="flex w-full flex-col gap-2">
        <TodoContent
          checked={checked}
          editing={editing}
          todo={todo}
          onTitle={onTitle}
          onContent={onContent}
        ></TodoContent>
      </div>
      <div className="flex flex-col justify-center">
        <TodoActions
          checked={checked}
          editing={editing}
          onDelete={deleteTodo}
          onEdit={editTodo}
          toggleChecked={toggleChecked}
          toggleEditing={toggleEditing}
        ></TodoActions>
      </div>
    </article>
  );
};

export default TodoView;
