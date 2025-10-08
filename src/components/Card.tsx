import { memo } from 'react'

interface CardProps {
  count: number,
  movies: {
    title: string,
    age: number
  },
  updateMovieAge: () => void
}

function Card({ count, movies, updateMovieAge }: CardProps) {
  console.log("Card Render")
  return (
    <div>
      <br/>
      <h4><b>Card: </b></h4> 
      Count: {count} <br />
      Movie Title: {movies.title} <br />
      Movie Age: {movies.age} <br />

      <button type='button' onClick={updateMovieAge}>Update Age Movie</button>
    </div>
  )
}
export default memo(Card);
