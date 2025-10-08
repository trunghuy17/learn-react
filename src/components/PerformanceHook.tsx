import { useState } from "react";
import About from "./performance/About";
import Product from "./performance/Product";
import Todos from "./performance/Todos";
import type { IMovie } from "../types/movie";


function PerformanceHook() {
  const [count, setCount] = useState<number>(0);
  const [movie, setMovie] = useState<IMovie>({
    title:'huy',
    name:'spiderman',
    year: 1988
  })
  function Increment() {
    setCount((prev) => prev + 1);
  }

  function updateMovie(){
    setMovie(prev => ({...prev, name:'ABC'}))
  }
  console.log('Performance hook render : ----------')

  return (
    <div>
      <h1>Performance Hook</h1>
      <About 
      count={count} 
      increment={Increment} 
      movie={movie}
      updateMovie={updateMovie}
      />
      <Product movie= {movie} />
      <Todos />
    </div>
  );
}

export default PerformanceHook;
