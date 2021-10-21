import $api from "../../http";
import { Dispatch } from "redux";
import { Show, SearchResponse } from "../../models";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const fetchSeries = (term: string = "") => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FETCH_SERIES
        });

        try {
            let _data: Show[] = [];

            if (term !== "") {
                const url = `search/shows?q=${term}`;
                const { data } = await $api.get<SearchResponse[]>(url);
                _data = data.map(arr => arr.show);
            } else {
                const url = "shows";
                const { data } = await $api.get<Show[]>(url);
                _data = data;
            }

            dispatch({
                type: ActionType.FETCH_SERIES_SUCCESS,
                payload: _data
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
