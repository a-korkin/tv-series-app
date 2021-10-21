import { Show } from "../../models";
import { ActionType } from "../action-types";

interface FetchSeriesAction {
    type: ActionType.FETCH_SERIES;
}

interface FetchSeriesSuccessAction {
    type: ActionType.FETCH_SERIES_SUCCESS;
    payload: Show[];
}

interface FetchSeriesErrorAction {
    type: ActionType.FETCH_SERIES_ERROR;
    payload: string;
}

interface FetchShowAction {
    type: ActionType.FETCH_SHOW;
}

interface FetchShowSuccessAction {
    type: ActionType.FETCH_SHOW_SUCCESS;
    payload: Show;
}

interface FetchShowErrorAction {
    type: ActionType.FETCH_SHOW_ERROR;
    payload: string;
}

export type Action = 
    FetchSeriesAction | 
    FetchSeriesSuccessAction | 
    FetchSeriesErrorAction |
    FetchShowAction |
    FetchShowSuccessAction |
    FetchShowErrorAction;
