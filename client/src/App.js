import React, { useEffect, useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import MovieRouter from "./service/MovieRouter"
import "./App.css";


function App() {
  const [movies, setMovies] = useState([]);
  //api async fetch
  const getMoviesApi = async () => {
    const results = await fetch(
      "http://localhost:8080/movies/all"
    ).then((res) => res.json());
    setMovies(results.data || []);
  };

  useEffect(() => {
    getMoviesApi();
  }, []);

  return (
    <Router>
      <div className="App">
        <MovieRouter movies={movies}/>
      </div>
    </Router>
  );
}

export default App;
