//app requires
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const chalk = require("chalk");
const app = express();
const db = require("./DB");// mongo connection require
const PORT = process.env.PORT;
// import routers
const movieRouter = require('./routes/movie-router')
//app settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

db.on('error',()=>console.log("connection error"));

//app up and port setting
app.listen(PORT, (req, res) => {
  console.log(chalk.bgGreen.bold(`MERN server is up with port:${PORT}✌ `));
});

//app HTTP methods
app.get("/", (req, res) => {
  res.send("Welcom To Mern Server");
});

app.use('/movies',movieRouter)