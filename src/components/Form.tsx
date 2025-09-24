import React, { useRef, useState } from "react";

function Form() {
  const [lastN, setLastN] = useState("");
  const firstNameRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("form", {});
  }
  console.log("Form render", {
    firstNameRef: firstNameRef?.current?.value,
    lastN,
  });
  return (
    <div>
      <h1>Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <p>FirstName: </p>
        <input type="text" ref={firstNameRef} />
        <p>LastName:</p>
        <input type="text" onChange={(e) => setLastN(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
