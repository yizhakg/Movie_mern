const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movie = new Schema(
  {
    movieName: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 10 },
    year: { type: Number, required: true },
    imgUrl:{ type: String, required: true },
    summery:{ type: String, required: true },
    trailer:{ type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('movies',Movie);
