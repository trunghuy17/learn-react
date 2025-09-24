import type { ITodoItem } from "../PropsDrillingLiftingStateUp";
import TodoList from "./TodoList";

interface Todosprops {
  todos: ITodoItem[],
  deleteItem : (todoId: number)=> void
}

function Todos({todos, deleteItem}: Todosprops) {
  return (
    <div>
      <TodoList todos={todos} deleteItem={deleteItem} />
    </div>
  );
}

export default Todos;
