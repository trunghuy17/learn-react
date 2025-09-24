import React from "react";

interface TodoButtonProps {
  id: number;
  deleteItem: (todoId: number) => void;
}

function TodoButton({ deleteItem, id }: TodoButtonProps) {
  return (
    <button type="button" onClick={() => deleteItem(id)}>
      Delete
    </button>
  );
}

export default TodoButton;
