import { useState } from "react";
import Todos from "./PropsDrilling/Todos";
import { useSmallScreen } from "./hooks/useSmallScreen";

export interface ITodoItem {
  id: number;
  title: string;
}

function PropsDrillingLiftingStateUp() {
  const {isSmallScreen} = useSmallScreen();
  const [todos, setTodos] = useState<ITodoItem[]>([
    {
      id: 1,
      title: "react",
    },
    {
      id: 2,
      title: "angular",
    },
  ]);



  function deleteItem(todoId: number) {
    console.log("deleteItem", todoId);

    const newItem = [...todos].filter((todo) => todo.id !== todoId);
    setTodos(newItem);
  }

  return (
    <div>
      <h1>Props Drilling Lifting state Up</h1>
      <div>
        Window is small screen: {isSmallScreen ? 'Yes' : 'No'}
      </div>
      <div>
        <h3>Todo list</h3>
        <Todos todos={todos} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default PropsDrillingLiftingStateUp;
