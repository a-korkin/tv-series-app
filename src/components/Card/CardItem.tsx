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
    useEffect(() => {
        fetchShow(parseInt(id));
    }, []);
    const { data, error, loading } = useTypedSelector(state => state.show);
    const { fetchShow } = useActions();
    const imdbLink = `https://www.imdb.com/title/${data?.externals?.imdb}/`;

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
                        <div className="card__item-summary-text">
                            {ReactHtmlParser(data?.summary)}
                        </div>
                        <div className="card__item-summary-info">
                            <div className="rating">
                                Rating: {data?.rating?.average}
                            </div>
                            <div className="site">
                                <a target="_blank" href={data?.officialSite}>Official Site</a>
                            </div>
                            <div className="imdb">
                                <a target="_blank" href={imdbLink}>imdb</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default CardItem;
