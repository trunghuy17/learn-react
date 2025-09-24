import { useState } from "react";

function State() {
  const [count, setCount] = useState(1);

  const [form, setForm] = useState({
    firstN: "",
    lastN: "",
  }); //memory A
  function updateCount() {
    //first render --> component render with initial state
    //next render(re-render) --> update state -> component re-render with new state
    // setCount((prev) => prev + 1);
    setCount(count + 1);
  }

  //   function updateForm(){
  //     form['firstN'] = 'React' + Date.now();
  //     setForm(form);
  //   }//memoryA

  function updateForm() {
    // const newForm = {
    //   firstN: "react",
    //   lastN: "abc",
    // };
    // setForm(newForm);
    /*--- --------------------Updater function---------------*/ 
    setForm((prev)=>{
        console.log('prevstate:',prev)
        return{
            ...prev,
            firstN:'zzz',
            lastN:'zazaz'
        }
    })
  }

//   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({
//       ...prevForm,
//       [name]: value,
//     }));
//   }

  function submitForm(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <div>
      <h1>Count {count}</h1>
      <button type="button" onClick={updateCount}>
        Update count
      </button>
      <button onClick={updateForm}>Update Form</button>

      <p>First Name: {form.firstN}</p>
      <p>Last Name: {form.lastN}</p>
      {/* <form action="submit" onSubmit={submitForm}>
        <input
          type="text"
          name="firstN"
          id="firstname"
          placeholder="Nhap fisrt name"
          onChange={handleChange}
          value={form.firstN}
        />
        <input
          type="text"
          name="lastN"
          id="lastname"
          placeholder="Nhap last name"
          onChange={handleChange}
          value={form.lastN}
        />
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}

export default State;
