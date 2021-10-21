import { useEffect } from "react";
import { useParams } from "react-router";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading";
import Error from "../Error";
import "./Card.scss";
import { FaArrowLeft } from "react-icons/fa";

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
                <Link className="link" to="/shows"><FaArrowLeft /> back</Link>
                <h1 className="card__title">{data?.name}</h1>
                <div className="card__item">
                    <div className="card__item-poster">
                        <img src={data?.image?.original} alt={data?.name} />
                    </div>
                    <div className="card__item-summary">
                        {ReactHtmlParser(data?.summary)}
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default CardItem;
