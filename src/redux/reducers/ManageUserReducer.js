import { USER_LOGIN } from "../../utilities/constant";
import { SET_ACCOUNT_FULL, SET_LOG_IN, SET_USER_INFO_FULL } from "../actions/types/actionTypes"



let user = {}
// check if user login before ?
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
    userLogin: user,
    userInfoFull: {},
    isLoadingButton: true,
    accountUser: {}
}

const ManageUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_LOG_IN: {
            state.userLogin = payload;
            localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
            // state.isLoadingButton = false;
            return { ...state }

        }
        case SET_USER_INFO_FULL: {
            state.userInfoFull = payload;
            return { ...state };
        }
        case SET_ACCOUNT_FULL: {
            state.accountUser = payload;
            return { ...state, isLoadingButton: false }
        }
        default:
            return { ...state }
    }
}

export default ManageUserReducer;