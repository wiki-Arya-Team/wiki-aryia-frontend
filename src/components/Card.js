import React from "react";

function Card({ title, desc, author, img }) {
  return (
    <div className="card">
      <img src={img} alt={title} className="card__img" />
      <h4 className="card__title">{title}</h4>
      <p className="card__author">{author}</p>
      <p className="card__desc">{desc}</p>
    </div>
  );
}

export default Card;
