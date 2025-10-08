import { memo } from "react";
import type { IMovie } from "../../types/movie";

interface ProductProps {
  movie: IMovie;
}

function Product({ movie }: ProductProps) {
  console.log("Product render");
  return (
    <div>
      <h1>Title: {movie.title}</h1>
    </div>
  );
}

const customEqual = (
  prevProps: Readonly<ProductProps>,
  nextProps: Readonly<ProductProps>
): boolean => {
  return prevProps.movie.title === nextProps.movie.title;
};

export default memo(Product, customEqual);
