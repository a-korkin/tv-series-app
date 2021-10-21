import $api from "../../http";
import { Dispatch } from "redux";
import { Show } from "../../models";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const fetchSeries = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FETCH_SERIES
        });

        try {
            const { data } = await $api.get<Show[]>("shows");
            dispatch({
                type: ActionType.FETCH_SERIES_SUCCESS,
                payload: data
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.FETCH_SERIES_ERROR,
                payload: error
            });
        }
    }
}

export const fetchShow = (id: number) => async (dispatch: Dispatch<Action>) => {
    dispatch({
        type: ActionType.FETCH_SHOW
    });

    try {
        const { data } = await $api.get<Show>(`shows/${id}`);
        dispatch({
            type: ActionType.FETCH_SHOW_SUCCESS,
            payload: data
        });
    } catch (error: any) {
        dispatch({
            type: ActionType.FETCH_SHOW_ERROR,
            payload: error
        });
    }
}
