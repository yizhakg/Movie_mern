import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
function App() {
  const [movies, setMovies] = useState([]);

  const getMoviesApi = async () => {
    const results = await fetch(
      "http://localhost:8080/movies/all"
    ).then((res) => res.json());
    console.log(results);
    setMovies(results.data || []);
  };

  useEffect(() => {
    getMoviesApi();
  }, []);
  return (
    <div className="App">
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
  );
}

export default App;
