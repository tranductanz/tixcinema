import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import axiosClient from "./axiosClient"



const manageBooking = {
    getFilmBooking(idBooking) {
        const url = `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idBooking}`
        return axiosClient(url, {
            method: 'GET'
        })
    },

    getBooking(infoBooking = new ThongTinDatVe()) {
        const url = `/api/QuanLyDatVe/DatVe`;
        return axiosClient(url, {
            method: 'POST',
            data: infoBooking,
        })
    }
}

export default manageBooking;