import TodoLabel from "./TodoLabel";
import TodoButton from "./TodoButton";
import type { ITodoItem } from "../PropsDrillingLiftingStateUp";

interface TodoItemProps {
  todoItem: ITodoItem;
  deleteItem: (todoId: number) => void;
}

function TodoItem({ todoItem, deleteItem }: TodoItemProps) {
  return (
    <li>
      <TodoLabel title={todoItem.title} />
      <TodoButton deleteItem={deleteItem} id={todoItem.id} />
    </li>
  );
}

export default TodoItem;
