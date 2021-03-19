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
  const changeBackgroundBack = () => {
    const appBackground = document.querySelector(".App").style;
    appBackground.backgroundImage = `url("https://wallpapercave.com/wp/wp5758736.jpg")`;
    appBackground.backgroundSize = "cover"
    appBackground.backgroundAttachment = "fixed"
    appBackground.backgroundPosition = "center"
  }
  const RatingStars = () => {
    let starArray = [];
    for (let i = 0; i < Math.floor(rating/2); i++) {
      starArray.push(<i key={i} className="fas fa-star"></i>)
    }
    return <p className="stars">{starArray}</p>;
  };
  return (
    <div className="card" onMouseEnter={changeToMovieBackground} onMouseOut={changeBackgroundBack}>
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
      <span className="trailer"><a href={ trailer } target="_blank">trailer<i className="fab fa-youtube"></i></a></span>
    </div>

  );
}
Card.defaultProps = {
  name: "Name",
  imageUrl: "ImgUrl",
  rating: "Type",
  year: "Url",
};
