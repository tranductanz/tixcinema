import axiosClient from "./axiosClient";



const manageCinema = {
    getListCinema() {
        const url = '/api/QuanLyRap/LayThongTinLichChieuHeThongRap';
        return axiosClient.get(url, { params: { maNhom: 'GP01' } })
    },

    getInfoScheduleFilm(idFilm) {
        const url = `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idFilm}`;
        return axiosClient.get(url, { params: { MaPhim: idFilm } })
    }
}

export default manageCinema;