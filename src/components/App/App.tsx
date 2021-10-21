import React, { FC, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { CardList, CardItem } from "../Card";
import "./App.scss";

const App: FC = () => {
    const { loading, error, data } = useTypedSelector(state => state.list);
    const { fetchSeries } = useActions();

    useEffect(() => {
        fetchSeries();
    }, []);

    return (
        <>
        <Switch>
            <Route path="/shows" exact >
                <CardList list={data} />
            </Route>
            <Route path="/shows/:id" component={CardItem} />
        </Switch>
        <div className="container">
            {error && <h2>{error}</h2>}
            {loading && <h2>Loading...</h2>}
            {!error && !loading &&
                <CardList list={data} />
            }
        </div>
        </>
    );
}

export default App;
