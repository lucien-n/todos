const TodoActions = ({
  checked,
  editing,
  onEdit,
  onDelete,
  toggleChecked,
  toggleEditing,
}: {
  checked: boolean;
  editing: boolean;
  onEdit: () => void;
  onDelete: () => void;
  toggleChecked: () => void;
  toggleEditing: () => void;
}) => {
  return (
    <>
      {checked ? (
        <button className="text-gray underline" onClick={toggleChecked}>
          Uncheck
        </button>
      ) : (
        <>
          {editing ? (
            <button className=" text-blue-500 underline" onClick={onEdit}>
              Save
            </button>
          ) : (
            <button
              className=" text-blue-500 underline"
              onClick={toggleEditing}
            >
              Edit
            </button>
          )}
          <button className=" text-red-500 underline" onClick={onDelete}>
            Delete
          </button>
          <button className=" text-green-500 underline" onClick={toggleChecked}>
            Check
          </button>
        </>
      )}
    </>
  );
};

export default TodoActions;
