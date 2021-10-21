import React, { useEffect } from "react";
import { Card } from ".";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Show } from "../../models";
import "./Card.scss";

const CardList: React.FC = () => {
    const { loading, error, data } = useTypedSelector(state => state.list);
    const { fetchSeries } = useActions();

    useEffect(() => {
        fetchSeries();
    }, []);

    return (
        <div className="cards">
            {error && <h2>{error}</h2>}
            {loading && <h2>Loading...</h2>}
            {!error && !loading &&
                list.map(item => <Card key={item.id} show={item} />)
            }
        </div>
    )
}

export default CardList;
