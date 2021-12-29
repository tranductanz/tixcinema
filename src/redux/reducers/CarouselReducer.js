import { SET_CAROUSEL } from "../actions/types/actionTypes";

const initialState = {
    arrImg: [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
        }
    ]
}

const CarouselReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_CAROUSEL: {
            state.arrImg = payload;
            return { ...state };
        }

        default:
            return { ...state }
    }
}
export default CarouselReducer;