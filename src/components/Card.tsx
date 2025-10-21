import { memo } from "react";

interface CardProps {
  count: number;
  movies: {
    title: string;
    age: number;
  };
  updateMovieAge: () => void;
}

function Card({ count, movies, updateMovieAge }: CardProps) {
  console.log("Card Render");
  return (
    <div>
      <br />
      <div className="
      [&_h4]:text-black
      [&_h4]:text-2xl
      [&_h4]:font-bold
      ">
        <h4>
          <b>Card: </b>
        </h4>
      </div>
      Count: {count} <br />
      Movie Title: {movies.title} <br />
      <div>
        <p>Movie Age:{movies.age}</p>
      </div>
      <br />
      <button type="button" onClick={updateMovieAge}>
        Update Age Movie
      </button>
    </div>
  );
}
export default memo(Card);
