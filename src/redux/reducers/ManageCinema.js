import { SET_LIST_CINEMA, SET_SCHEDULE_FILM } from "../actions/types/actionTypes"

const initialState = {
    heThongRapChieu: [],
    isLoading: true,
    filmSchedule: {},
}

export const ManageCinemaReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LIST_CINEMA: {
            state.heThongRapChieu = payload;
            return { ...state, isLoading: false }
        }

        case SET_SCHEDULE_FILM: {
            state.filmSchedule = payload;
            return { ...state };
        }


        default:
            return { ...state }
    }
}
