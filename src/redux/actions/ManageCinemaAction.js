import manageCinema from "../../api/manageCinema"
import { SET_LIST_CINEMA, SET_SCHEDULE_FILM } from "./types/actionTypes";



export const getListCinemaAction = () => {
    return async dispatch => {
        try {
            const result = await manageCinema.getListCinema();
            const action = {
                type: SET_LIST_CINEMA,
                payload: result.data.content
            }
            dispatch(action);
        }
        catch (err) {
            console.log(err);
        }
    }
}

export const getInfoScheduleFilmAction = (idFilm) => {
    return async dispatch => {
        try {
            const result = await manageCinema.getInfoScheduleFilm(idFilm);
            const action = {
                type: SET_SCHEDULE_FILM,
                payload: result.data.content,
            }
            dispatch(action);
        }
        catch (err) {
            console.log(err);
        }
    }
}