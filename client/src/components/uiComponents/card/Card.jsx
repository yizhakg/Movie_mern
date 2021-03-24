import React from "react";
import "./Card.css";

export default function Card(props) {
  const { name, imageUrl, rating, year, summery, trailer } = props;
  const changeToMovieBackground = (e) => {
    const rdyImg = e.target.offsetParent.className === 'card' ? e.target.offsetParent : e.target
    const appBackground = document.querySelector(".App").style;
    appBackground.backgroundImage = `url(${rdyImg.querySelector('img').src})`;
    appBackground.backgroundSize = "cover"
    appBackground.backgroundAttachment = "fixed"
    appBackground.backgroundPosition = "center"
  }
  const RatingStars = () => {
    let starArray = [];
    for (let i = 0; i < Math.floor(rating / 2); i++) {
      starArray.push(<i key={i} className="fas fa-star"></i>)
    }
    return <p className="stars">{starArray}</p>;
  };
  return (
    <div className="card" onMouseEnter={changeToMovieBackground} >
      <a className="trailer" href={trailer} target="_blank" rel="noreferrer">
        <i className="fab fa-youtube"></i></a>
      <div className="imgBox">
        <img
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="text">
        <div className="title">
          <h1>{name}</h1>
          <p>{year}</p>
        </div>
        <div className="top">
          <h3>SUMMERY</h3>
          <RatingStars />
        </div>
        <p className="summery">{summery}</p>
      </div>
      <a className="movieLink" href="www.google.com"><i className="fab fa-imdb"></i></a>
    </div>

  );
}
Card.defaultProps = {
  name: "Name",
  imageUrl: "ImgUrl",
  rating: "Type",
  year: "Url",
};
