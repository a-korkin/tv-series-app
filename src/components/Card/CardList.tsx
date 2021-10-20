import React from "react";
import { Card } from ".";
import "./Card.scss";

const CardList: React.FC = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    return (
        <div className="cards">
            {
                array.map(card => <Card key={card} />)
            }
        </div>
    )
}

export default CardList;
