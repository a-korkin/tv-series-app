import React, { FC, useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./App.scss";

const App: FC = () => {
    const { loading, error, data } = useTypedSelector(state => state);
    const { fetchSeries } = useActions();

    useEffect(() => {
        fetchSeries();
    }, []);

    console.log(data);

    return (
        <h1>App</h1>
    );
}

export default App;
