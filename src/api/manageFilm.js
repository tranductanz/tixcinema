import axiosClient from "./axiosClient";

const manageFilm = {
    getBanner() {
        const url = `/api/QuanLyPhim/LayDanhSachBanner`
        return axiosClient.get(url, {});
    },

    getFilm(params) {
        const url = `/api/QuanLyPhim/LayDanhSachPhim`
        return axiosClient.get(url, { params })
    }
}

export default manageFilm;