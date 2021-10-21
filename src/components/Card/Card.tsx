import React from "react";
import { Link } from "react-router-dom";
import { Show } from "../../models";

interface CardProps {
    show: Show;
}

const Card: React.FC<CardProps> = ({ show }) => {
    const link = `shows/${show.id}`;

    return (
        <Link to={link}>
        <div className="cards__item">
            <div className="cards__item-poster">
                <img src={show.image.original} alt={show.name} />
            </div>
            <div className="cards__item-title">{show.name}</div>
            <div className="cards__item-info">
                <div className="info__cell">info1</div>
                <div className="info__cell">info2</div>
                <div className="info__cell">info3</div>
                <div className="info__cell">info4</div>
                <div className="info__cell">info5</div>
                <div className="info__cell">info6</div>
            </div>
        </div>
        </Link>
    );
}

export default Card;
