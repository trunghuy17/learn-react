import React, { useState } from "react";

/*
Pure component/Presentation Component/Statless component
- just only present the props
- dont' need a state
- reuse code
*/

interface SnakeTypeProps {
  name: string;
}

interface StateFullComponent {
  timer?: number;
}

/*-----------------------------stateLess component------------------------------------*/
function SnakeType({ name }: SnakeTypeProps) {
  return <div>Name Snake:{name}</div>;
}

/*-----------------------------stateFull component------------------------------------*/
function StateFullComponent({ timer = 1 }: StateFullComponent) {
  const [count, setCount] = useState(1);
  function updateCount() {
    setCount(count + timer);
  }

  return (
    <div>
      StatefulCOmponent : {count}
      <button type="button" onClick={updateCount}>
        ++
      </button>
    </div>
  );
}

function Components() {
  return (
    <div>
      <h1>component</h1>
      <h3>Staless Component</h3>
      <SnakeType name={"huy"} />
      <SnakeType name={"huy1"} />
      <SnakeType name={"huy2"} />
      <StateFullComponent />
      <StateFullComponent timer={2} />
    </div>
  );
}

export default Components;
