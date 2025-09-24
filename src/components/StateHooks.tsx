import { useState } from "react";

//First-render --> component with intial stae --> xong 1 chu ky render

function initialNumber() {
  console.log("initialNumber");
  return 5;
}
interface Button1Props {
  order: number;
  number: number;
  updateNumber: () => void;
}

function Button1({ order, number, updateNumber }: Button1Props) {
  return (
    <div>
      <button type="button" onClick={updateNumber}>
        {order}: {number}
      </button>
    </div>
  );
}

function StateHooks() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({
    fullName: "tony",
  });

  function updateNumber() {
    setNumber((prev) => prev + 1);
  }
  function updateCount() {
    setCount(count + 1);
    // setCount(1); --> Khi update state lần đầu tiên count từ 0 thành 1 --> Nếu tiếp tục updateCount thì component không render do state vẫn là 1
  }
  function updateFullName() {
    // user.fullName ='huy';
    // setUser(user)
    // --> Không update được state do updateFullname vẫn truy cập vào vùng nhớ A của initial sate
    const newUser = {
      ...user,
      fullName: "huy",
    };
    setUser(newUser);
    // nếu tiếp tục click vào updateFullName thì component sẽ vẫn render lại. Do function sẽ tạo ra một newUser với một vùng nhớ mới, nên component sẽ render lại

    // setCount(count + 1); // 0 + 1;
    // setCount(count + 1); //--> count lúc này vẫn là 0 --> 0 + 1 --> Do component chưa render để cập nhật lại state mới, tương tự cho các setCount tiếp theo
    // setCount(count + 1);

    /* updater function 
    -- React put your updater function in a queue. Then during next render, it will call them in the same order
    */

    // setCount((count) => count + 1); // receive count = 0 then update cout + 1 --> count = 1
    // setCount((count) => count + 1); //receive count = 1 then update count + 1 --> count = 2
    // setCount((count) => count + 1); //receive count = 2 then update count + 1 --> count = 3
    // -> output: When click on update, component will re-render with new state count = 3

    /*Pre-state*/
    setCount((prev) => prev + 1); //Prev state giá trị state hiện tại trước khi cập nhật --> prev = 0 -->prev + 1
    setCount((prev) => prev + 1); //prev = 1 --> pre + 1 = 2
    setCount((prev) => prev + 1); //prev = 2 --> pre + 1 = 3
  }
  console.log("count", {
    count,
    user,
  });
  return (
    <div>
      <h1>State hooks</h1>
      <p>Count :{count}</p>
      <button onClick={updateCount}>+</button>
      <p>Full Name: {user.fullName}</p>
      <button onClick={updateFullName}>Update full name</button>
      <Button1 number={number} order={1} updateNumber={updateNumber} />
      <Button1 number={number} order={2} updateNumber={updateNumber} />
      <Button1 number={number} order={3} updateNumber={updateNumber} />
    </div>
  );
}

export default StateHooks;
