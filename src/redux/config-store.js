import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk';
import CarouselReducer from "./reducers/CarouselReducer";
import ManageFilmReducer from "./reducers/ManageFilmReducer";
import { ManageCinemaReducer } from "./reducers/ManageCinema";
import ManageUserReducer from "./reducers/ManageUserReducer";
import ManageBookingReducer from "./reducers/ManageBooking";
const rootReducer = combineReducers({
    CarouselReducer,
    ManageFilmReducer,
    ManageCinemaReducer,
    ManageUserReducer,
    ManageBookingReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))