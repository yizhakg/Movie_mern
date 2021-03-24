import React from 'react'
import Popular from "../components/pages/popular/Popular";
import Home from "../components/pages/home/Home";
import { Switch, Route } from "react-router-dom";
import Header from '../components/uiComponents/header/Header';
import AddMovies from '../components/pages/addMovies/AddMovies';

export default function MovieRouter({ movies }) {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home movies={movies} />
        </Route>
        <Route exact path="/popular">
          <Popular movies={movies} />
        </Route>
        <Route exact path="/addMovie">
          <AddMovies />
        </Route>
      </Switch>
    </React.Fragment>
  )
}
