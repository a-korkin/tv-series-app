import { Show } from "../../models";
import { ActionType } from "../action-types";
import { Action } from "../actions";

interface SeriesState {
    loading: boolean;
    error: string | null;
    data: Show[];
}

const initialState: SeriesState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (state: SeriesState = initialState, action: Action): SeriesState => {
    switch (action.type) {
        case ActionType.FETCH_SERIES:
            return { ...state, loading: true, error: null };
        case ActionType.FETCH_SERIES_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload };
        case ActionType.FETCH_SERIES_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default reducer;
