import React, { useEffect } from "react";
import { Card } from ".";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Error from "../Error";
import Loading from "../Loading";
import "./Card.scss";

const CardList: React.FC = () => {
    const { loading, error, data } = useTypedSelector(state => state.list);
    const { fetchSeries } = useActions();

    useEffect(() => {
        fetchSeries();
    }, []);

    return (
        <div className="cards">
            {error && <Error message={error} />}
            {loading && <Loading />}
            {!error && !loading &&
                data.map(item => <Card key={item.id} show={item} />)
            }
        </div>
    )
}

export default CardList;
