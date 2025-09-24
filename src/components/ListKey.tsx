import { useState } from "react";

function ListKey() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "tony",
    },
    {
      id: 2,
      title: "huy",
    },
  ]);

  function updateTodo() {
    const newTodo = {
      id: Date.now(),
      title: "lorem",
    };
    const newTodos = [...todo, newTodo];
    setTodo(newTodos);  
}
  const renderTodo = todo.map((item) => {
    return (
      <div key={item.id}>
        <p>Id: {item.id}</p>
        <p>Title: {item.title}</p>
      </div>
    );
    
  });

  console.log("renderTodo", renderTodo);
  return (
    <>
      <h1>List key</h1>
      <button
        onClick={updateTodo}
        style={{ backgroundColor: "red", borderRadius: "5px" }}
      >
        Add todo
      </button>
      {renderTodo}
    </>
  );
}

export default ListKey;
