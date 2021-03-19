const movieRouter = require("express").Router();
const movieModel = require("../models/movie-model");
const movieCtrl = require("../controllers/movie-ctrl");

movieRouter.get("/all", movieCtrl.getAllMovies);

movieRouter.get("/movie/:movieId", movieCtrl.getMovieById);

movieRouter.get("/movie/name/:movieName", movieCtrl.getMovieByName);

movieRouter.post("/saveMovie", movieCtrl.saveMovie);

movieRouter.put("/movie/:movieId", movieCtrl.updateMovie);

movieRouter.delete("/movie/:movieId", movieCtrl.deleteMovie);

movieRouter.post("/api", movieCtrl.putMoviesfromApi);
//movieRouter export
module.exports = movieRouter;
