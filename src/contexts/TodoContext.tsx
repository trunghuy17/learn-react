import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext<any>({});

export const TodoProvider = ({ children }: React.PropsWithChildren) => {
  const [todos, setTodos] = useState<any>([]);

  function addTodo(title: string) {
    const newTodo = {
      id: Date.now(),
      title,
    };
    setTodos((prevState: any) => [...prevState, newTodo]);
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
