
import swal from "sweetalert";
import manageBooking from "../../api/manageBooking";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { SET_FILM_BOOKING } from "./types/actionTypes";


export const ManageBookingAction = (idBooking) => {
    return async dispatch => {
        try {
            const result = await manageBooking.getFilmBooking(idBooking);
            const action = {
                type: SET_FILM_BOOKING,
                payload: result.data.content,
            }
            dispatch(action);
        }
        catch (err) {
            console.log(err);
        }
    }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async dispatch => {
        try {
            const result = await manageBooking.getBooking(thongTinDatVe);
            if (result.data.statusCode === 200) {
                // swal("Đặt vé thành công", "Hệ thống sẽ tự động trang trong 3 giây nữa", "success");
                swal({
                    title: 'Mua vé thành công',
                    text: 'Hệ thống sẽ chuyển qua trang kết quả đặt vé',
                    icon: 'success',
                    timer: 3000,
                    buttons: false,
                })
                // .then(() => {
                //     console.log('success nè s')
                // })
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}