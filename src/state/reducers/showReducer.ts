import { Show } from "../../models";
import { ActionType } from "../action-types";
import { Action } from "../actions";

interface ShowState {
    loading: boolean;
    error: string | null;
    data: Show;
}

const initialState: ShowState = {
    loading: false,
    error: null,
    data: {} as Show
}

const showReducer = (state: ShowState = initialState, action: Action): ShowState => {
    switch (action.type) {
        case ActionType.FETCH_SHOW:
            return { ...state, loading: true, error: null, data: {} as Show };
        case ActionType.FETCH_SHOW_SUCCESS:
            return { ...state, loading: false, error: null, data: action.payload };
        case ActionType.FETCH_SHOW_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default showReducer;
