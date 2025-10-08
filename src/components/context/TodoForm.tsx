import { useState } from "react";
import { useTodoContext } from "../../contexts/TodoContext";

function TodoForm() {
  const { addTodo } = useTodoContext();
  const [title, setTitle] = useState("");

  function onChangeTitle(title: string) {
    setTitle(title);
  }

  return (
    <>
      Title:
      <input type="text" onChange={(e) => onChangeTitle(e.target.value)}/>
      <button type="button" onClick={() => addTodo(title)}>
        Add todo
      </button>
    </>
  );
}

export default TodoForm;
