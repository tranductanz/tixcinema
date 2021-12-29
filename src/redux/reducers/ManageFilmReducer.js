import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU, SET_LIST_FILM } from "../actions/types/actionTypes"

const initialState = {
    listFilm: [
        {
            "maPhim": 8175,
            "tenPhim": "Avenger End Game new  2019",
            "biDanh": "avenger-end-game-new-2019",
            "trailer": "https://www.youtube.com/watch?v=TcMBFSGVi1c",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avenger-end-game-new_gp01.jpg",
            "moTa": "Phim Marvel bom tấn nhất hành tinh",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-12-06T01:23:23.503",
            "danhGia": 10,
            "hot": false,
            "dangChieu": true,
            "sapChieu": true
        },

    ],
    dangChieu: "",
    sapChieu: "",
    arrFilmDefault: [],
    isLoading: true,
}

const ManageFilmReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LIST_FILM: {
            state.dangChieu = true;
            state.listFilm = payload;
            state.arrFilmDefault = state.listFilm;
            state.listFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu)
            return { ...state, isLoading: false }

        }

        case SET_FILM_DANG_CHIEU: {
            state.dangChieu = true;
            state.listFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu)
            state.sapChieu = !state.dangChieu
            return { ...state }
        }
        case SET_FILM_SAP_CHIEU: {
            state.sapChieu = true;
            state.listFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu);
            state.dangChieu = !state.sapChieu;
            return { ...state }
        }


        default:
            return { ...state }
    }
}

export default ManageFilmReducer