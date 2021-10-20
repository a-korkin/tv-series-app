import React from "react";
import { Card } from ".";
import { Show } from "../../models";
import "./Card.scss";

interface CardListProps {
    list: Show[];
}

const CardList: React.FC<CardListProps> = ({ list }) => {
    return (
        <div className="cards">
            {
                list.map(item => <Card key={item.id} show={item} />)
            }
        </div>
    )
}

export default CardList;
