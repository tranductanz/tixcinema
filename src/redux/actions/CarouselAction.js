import manageFilm from "../../api/manageFilm"
import { SET_CAROUSEL } from "./types/actionTypes";



// GET LIST OF BANNER FILMS
export const getCarouselAction = () => {
    return async dispatch => {
        try {
            const result = await manageFilm.getBanner();

            const action = {
                type: SET_CAROUSEL,
                payload: result.data.content,
            }
            dispatch(action);
        }
        catch (err) {
            console.log(err);
        }
    }
}