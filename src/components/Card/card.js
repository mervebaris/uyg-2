import React from "react";
import './card.css';
import CardTitle from "../cardTitle/cardTitle";
import CardImage from "../cardImage/cardImage";
import CardInfo from "../cardInfo/cardInfo";


const Card = ({title,image,info}) => {
  return (
    <div className="card">
      <div className="card-body">
        <CardTitle title={title} />
        <CardImage url={image} />
        <CardInfo info={info} />
      </div>
    </div>
  );
}

export default Card;