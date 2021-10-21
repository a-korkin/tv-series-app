import { Switch, Route, Redirect } from "react-router-dom";
import { CardList, CardItem } from "../Card";
import "./App.scss";

const App: React.FC = () => {
    return (
        <div className="container">
            <Switch>
                <Route path="/shows" exact component={CardList} />
                <Route path="/shows/:id" component={CardItem} />
                <Redirect to="/shows" />
            </Switch>
        </div>
    );
}

export default App;
