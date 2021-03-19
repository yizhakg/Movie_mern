const movieModel = require("../models/movie-model");
const fetch = require("node-fetch");
/**get all Movies*/
const getAllMovies = async (req, res) => {
  await movieModel.find({}, (err, results) => {
    if (err) {
      res.status(400).json({ success: false, error: err });
    }
    if (!results.length) {
      res.status(400).json({ success: false, message: "No movies available" });
    }
    console.log("results:", JSON.stringify(results));
    res.status(200).json({ success: true, data: results });
  });
};
/**get Movie by Id*/
const getMovieById = async (req, res) => {
  const movieId = req.params.movieId;
  await movieModel.findById(movieId, (err, results) => {
    if (err) {
      res.status(400).json({ success: false, error: err });
    }
    if (!results) {
      res.status(400).json({ success: false, message: "Movie not found" });
    }
    console.log("results:", JSON.stringify(results));
    res.status(200).json({ success: true, data: results });
  });
};
/**get Movie by name*/
const getMovieByName = async (req, res) => {
  const movieName = req.params.movieName;
  await movieModel.find(
    { movieName: { $regex: movieName, $options: "i" } },
    (err, results) => {
      if (err) {
        res.status(400).json({ success: false, error: err });
      }
      if (!results) {
        res
          .status(400)
          .json({ success: false, message: `Movie:${movieName} - not found` });
      }
      console.log("results:", JSON.stringify(results));
      res.status(200).json({ success: true, data: results });
    }
  );
};
/**Save Movie by Id*/
const saveMovie = async (req, res) => {
  const newMovie = req.body.movie;
  await movieModel.insertMany(newMovie, (err) => {
    if (!newMovie) {
      res
        .status(400)
        .json({ success: false, message: "Movie information not match" });
    }
    if (err) {
      res.status(400).json({ success: false, error: err });
    }
    res
      .status(201)
      .json({ success: true, message: "Movie Saved", newMovie: newMovie });
  });
};
/**Update Movie by Id*/
const updateMovie = async (req, res) => {
  const movieId = req.params.movieId;
  const query = req.body.movieQuery;
  await movieModel.findByIdAndUpdate(movieId, query, (err, results) => {
    if (!req.body.movieQuery) {
      res
        .status(400)
        .json({ success: false, message: "Movie update data must be valid" });
    }
    if (!results) {
      res.status(400).json({ success: false, message: "Movie Id No Found" });
    }
    if (err) {
      res.status(400).json({ success: false, error: err });
    }
    console.log("results updated:", JSON.stringify(results));
    res
      .status(202)
      .json({ success: true, message: "Movie Updated", update: results });
  });
};
/**delete Movie by Id*/
const deleteMovie = async (req, res) => {
  const movieId = req.params.movieId;
  await Movie.findByIdAndRemove(movieId, (err, results) => {
    if (!results) {
      res.status(400).json({ success: false, message: "Movie Id No Found" });
    }
    if (err) {
      res.status(400).json({ success: false, error: err });
    }
    console.log("deleted:", JSON.stringify(results));
    res
      .status(203)
      .json({ success: true, message: "Movie Deleted", deleted: results });
  });
};

// ######################inser movies from api######################

const youtube = async (id) => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=77fe21586542a5f94b267c25d0030747&language=en-US`
  )
    .then((res) => res.json())
    .then((res) => `https://www.youtube.com/watch?v=${res.results[0].key}`);
};

const inserApiToDB = async (movie, index) => {
  const youtubeSrc = await youtube(movie.id);
  await movieModel.insertMany(
    {
      movieName: movie.original_title,
      rating: movie.vote_average,
      year: Number(movie.release_date.substr(0, 4)),
      imgUrl: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
      summery: movie.overview,
      trailer: youtubeSrc,
    },
    (err) => {
      if (err) throw err;
      console.log(`movie number ${index}`);
    }
  );
};
/**insert Movie from api*/
const putMoviesfromApi = async (req, res) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=bf61f025680f5ba7cf758f6e7e533305&language=en-US&page=3"
  )
    .then((res) => res.json())
    .then((res) => res.results);

  data.forEach((movie, index) => {
    inserApiToDB(movie, index);
  });
};

module.exports = {
  getAllMovies,
  getMovieById,
  saveMovie,
  updateMovie,
  deleteMovie,
  getMovieByName,
  putMoviesfromApi,
};
