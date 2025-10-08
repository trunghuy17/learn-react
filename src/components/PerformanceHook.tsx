import React, { useCallback, useMemo } from "react";
import Card from "./Card";

/*
memo
- Higher order-component.
- Prevent the component re-render unnecessary.
- It takes 2 arguments: one for React Component, one for custom compare (option). 
- Shallow comparison.
Notes: nếu memo nhận props là 1 function, mà function này ko có useCallbackm thì memo vô nghĩa

useCallback
- Returns  a memorized callback.
- Callback function will re-runs if one of the dependencies has changed.
- Every callback function should be memoized to prevent useless re-rendering of child components that use the callback function” is the reasoning of his teammates.

useMemo
- Returns a memorized value.
- useMemo() is a built-in React hook that accepts 2 arguments — a function compute that computes a result and the depedencies array.
*/

function PerformanceHook() {
  const [count, setCount] = React.useState(1);
  const [timestamp, setTimestamp] = React.useState(Date.now());
  const [movies, setMovies] = React.useState({
    title: "tony",
    age: 19,
  });
  const [cart, setCart] = React.useState([
    { title: "phone", price: 1000, quality: 1 },
    { title: "samsung", price: 2000, quality: 2 },
    { title: "laptop", price: 1500, quality: 1 },
  ]);

  // re-run calculate every component render
  const totalPrice = useMemo(() => {
    const res = cart.reduce((acc, currValue) => {
      acc += currValue.price * currValue.quality;
      return acc;
    }, 0);
    console.log("totalPrice", res);
    return res;
  }, [cart]);

  function updateMovieTitle() {
    // setMovies(prevState => ({
    //   ...prevState,
    //   title: 'tony'
    // }))
    setMovies((prevState) => {
      const newItem = {
        ...prevState,
        title: "tony" + Date.now(),
      };
      return newItem;
    });
  }

  
//   const updateMovieAge = () => {
//     setMovies((prev) => ({
//       ...prev,
//       age: Date.now(),
//     }));
//   };

// memory A => memory A
const updateMovieAge = useCallback(() => {
    setMovies(prev => ({
        ...prev,
        age: prev.age + Date.now()
    }))
},[count])

  console.log("PerformanceHook Render");
  return (
    <div>
      <h1>PerformanceHook</h1>
      Count: {count} <br />
      Timestap: {timestamp} <br />
      Total Price: {totalPrice} <br />
      <button
        type="button"
        onClick={() => setCount((prevState) => prevState + 1)}
      >
        Update Count
      </button>
      <button type="button" onClick={() => setTimestamp(Date.now())}>
        Update Timestamp
      </button>
      <button type="button" onClick={updateMovieTitle}>
        Update Movie Title
      </button>
      <br />
      <Card count={count} movies={movies} updateMovieAge={updateMovieAge} />
    </div>
  );
}

export default PerformanceHook;
