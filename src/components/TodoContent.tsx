import { Todo } from "../lib/types";

const TodoContent = ({
  editing,
  checked,
  todo,
  onTitle,
  onContent,
}: {
  editing: boolean;
  checked: boolean;
  todo: Todo;
  onTitle: (title: string) => void;
  onContent: (conetnt: string) => void;
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (!value) return;
    onTitle(value);
  };

  const handleTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const value = e.target.value;
    if (!value) return;
    onContent(value);
  };

  return (
    <>
      {editing ? (
        <>
          <input
            type="text"
            className="border-b border-black text-xl font-bold"
            defaultValue={todo.title}
            onChange={handleInputChange}
          />
          <textarea
            rows={2}
            className="border-b border-black"
            defaultValue={todo.content}
            onChange={handleTextAreaChange}
          />
        </>
      ) : (
        <>
          <h1
            className={
              "border-b border-white text-xl font-bold " +
              (checked ? "checked" : "")
            }
          >
            {todo.title}
          </h1>
          <p className={"border-b border-white " + (checked ? "checked" : "")}>
            {todo.content}
          </p>
        </>
      )}
    </>
  );
};

export default TodoContent;
