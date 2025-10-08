import { useTodoContext } from "../../contexts/TodoContext";

function TodoList() {
  const { todos } = useTodoContext();

  return (
    <>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>Title: {todo.title}</li>
        ))}
        <li>Title: React</li>
        <li>Title: Angular</li>
        <li>Title: Vue</li>
      </ul>
    </>
  );
}

export default TodoList;
