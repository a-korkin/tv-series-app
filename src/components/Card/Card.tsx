import React from "react";
import { Link } from "react-router-dom";
import { Show } from "../../models";

interface CardProps {
    show: Show;
}

const Card: React.FC<CardProps> = ({ show }) => {
    const link = `shows/${show.id}`;
    const imdbLink = `https://www.imdb.com/title/${show?.externals?.imdb}/`;

    return (
        <div className="cards__item">
            <Link className="cards__item-poster" to={link}>
                    <img src={show?.image?.original} alt={show?.name} />
            </Link>
            <div className="cards__item-title">{show?.name}</div>
            <div className="cards__item-info">
                <div className="info__cell">rating:<br />{show?.rating?.average}</div>
                <div className="info__cell">premiered:<br />{show?.premiered}</div>
                <div className="info__cell">ended:<br />{show?.ended}</div>
                <div className="info__cell"><a target="_blank" href={imdbLink}>imdb</a></div>
                <div className="info__cell"><a target="_blank" href={show?.officialSite}>official site</a></div>
                <div className="info__cell">status:<br />{show?.status}</div>
            </div>
        </div>
    );
}

export default Card;
