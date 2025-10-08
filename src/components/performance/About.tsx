import { memo } from "react";
import type { IMovie } from "../../types/movie";

interface AboutProps {
  count: number;
  increment: () => void;
  movie: IMovie;
  updateMovie: () => void;
}

function About({ count, increment, movie, updateMovie }: AboutProps) {
    console.log('About render')
    return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increment()}>+</button>
      <h1>Title: {movie.title}</h1>
      <h1>Title: {movie.name}</h1>
      <button onClick={() => updateMovie()}>Update title movite</button>
    </div>
  );
}

export default memo(About);
