import { useEffect } from "react";
import { useParams } from "react-router";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Loading from "../Loading";
import Error from "../Error";
import "./Card.scss";

interface ParamTypes {
    id: string;
}

const CardItem: React.FC = () => {
    const { id } = useParams<ParamTypes>();
    const { data, error, loading } = useTypedSelector(state => state.show);
    const { fetchShow } = useActions();

    useEffect(() => {
        fetchShow(parseInt(id));
    }, []);

    return (
        <>
        {error && <Error message={error} />}
        {loading && <Loading />}
        {data && 
            <div className="card">
                <h1 className="card__title">{data?.name}</h1>
                <div className="card__item">
                    <div className="card__item-poster">
                        <img src={data?.image?.original} alt={data?.name} />
                    </div>
                    <div className="card__item-summary">
                        {data?.summary}
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default CardItem;
