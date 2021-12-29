import { SET_DAT_VE, SET_FILM_BOOKING } from "../actions/types/actionTypes"
import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";

const initialState = {
    bookingInfo: new ThongTinLichChieu(),
    listGheBooking: [],
    isLoading: true,
}

const ManageBookingReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_FILM_BOOKING: {
            state.isLoading = true;
            state.bookingInfo = payload;
            state.isLoading = false;
            return { ...state }
        }
        case SET_DAT_VE: {
            let listGheBookingClone = [...state.listGheBooking];

            let index = listGheBookingClone.findIndex(item => item.maGhe === payload.maGhe);

            if (index !== -1) {
                listGheBookingClone.splice(index, 1);
            }
            else {
                listGheBookingClone.push(payload);
            }
            state.listGheBooking = listGheBookingClone;
            return { ...state, }
        }


        default:
            return { ...state }
    }
}

export default ManageBookingReducer;