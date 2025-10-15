import { useState } from "react";
import LogInButton from "./LoginButton";
import LogOutButton from "./LogoutButton";

/*
1. &&
'tony' && 'huy' --> huy
'tony' && 'huy' && 'thanh' --> thanh
'tony' && '' -> ''
'' && 'tony' --> ''
2. ||
- Lay gia tri true dau tien

*/

interface todoItem {
  id: number;
  title: string;
}

function ConditionalRendering() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState<todoItem[]>([]);
  let button = null;

  if (count > 1) {
    button = <LogOutButton />;
  } else {
    button = <LogInButton />;
  }

  function renderListButtonLogin(){
    return (
        <>
        <h1>Render Button login</h1>
        <LogInButton/>
        </>
    )
  }

  function renderListButtonLogout() {
    return (
      <>
        <h1>Render Button logout</h1>
        <LogOutButton/>
      </>
    );
  }

  function updateCount() {
    setCount((prev) => prev + 1);
  }

  function addTodo() {
    const newTodo = {
      id: Date.now(),
      title: "react" + Date.now(),
    };
    setTodo((prev) => [...prev, newTodo]);
  }

  return (
    <div>
      <h1>Conditional Rendering</h1>
      &&: {count > 3 && <>count: {count}</>}
      ||:
      {count > 3 || (
        <>
          <h1>Demo</h1>
        </>
      )}
      <button onClick={updateCount}>+++</button>
      <br />
      Todo List:{" "}
      {todo.length > 0 ? (
        <></>
      ) : (
        <>
          <p>Add todo</p>
        </>
      )}
      <button onClick={addTodo}>Add todo</button>

      Demoe render function variable:
      {count > 3 ? renderListButtonLogout() : renderListButtonLogin()}
    </div>
  );
}

export default ConditionalRendering;
