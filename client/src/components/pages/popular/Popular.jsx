import React from 'react'
import "./Popular.css"
import Card from "../../uiComponents/card/Card";

export default function Popular({ movies }) {
  return (
    <React.Fragment>
      <h1>Popular Movies</h1>
      <div className="Popular">
        {movies.map((movieItm) => (
          <Card
            key={movieItm.movieName}
            name={movieItm.movieName}
            imageUrl={movieItm.imgUrl}
            rating={movieItm.rating}
            year={movieItm.year}
            summery={movieItm.summery}
            trailer={movieItm.trailer}
          />

        ))}
      </div>
    </React.Fragment>
  )
}
