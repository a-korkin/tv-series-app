import React, { FC, useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { CardList } from "../Card";
import "./App.scss";

const App: FC = () => {
    const { loading, error, data } = useTypedSelector(state => state);
    const { fetchSeries } = useActions();

    useEffect(() => {
        fetchSeries();
    }, []);

    // console.log(data);

    return (
        <div className="container">
            {error && <h2>{error}</h2>}
            {loading && <h2>Loading...</h2>}
            {!error && !loading &&
                <CardList list={data} />
            }
        </div>
    );
}

export default App;
