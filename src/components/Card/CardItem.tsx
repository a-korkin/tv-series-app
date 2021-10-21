import { useEffect } from "react";
import { useParams } from "react-router";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

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
        <h1>{data.name}</h1>
    );
}

export default CardItem;
