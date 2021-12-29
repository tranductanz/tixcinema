import manageFilm from "../../api/manageFilm";
import { SET_LIST_FILM } from "./types/actionTypes";





export const getListFilmAction = () => {

    return async dispatch => {
        try {
            const result = await manageFilm.getFilm()

            const action = {
                type: SET_LIST_FILM,
                payload: result.data.content,
            }

            dispatch(action);
        }
        catch (err) {
            console.log(err);
        }
    }
}
