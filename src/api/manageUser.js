
import { TOKEN } from "../utilities/constant";
import axiosClient from "./axiosClient"



const manageUser = {
    getLogin(values) {
        const url = `/api/QuanLyNguoiDung/DangNhap`;
        return axiosClient(url, {
            method: 'POST',
            data: values,
        })
    },
    getRegister(values) {
        const url = `/api/QuanLyNguoiDung/DangKy`;
        return axiosClient(url, {
            method: 'POST',
            data: values,
        })
    },
    getFullInfo(taiKhoan) {
        const url = `/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`
        return axiosClient(url, {
            method: 'POST',
            headers: {
                Authorization: "Bearer " + localStorage.getItem(TOKEN),
            }
        })
    },
    getAccount() {
        const url = `/api/QuanLyNguoiDung/ThongTinTaiKhoan`
        return axiosClient(url, {
            method: 'POST',
            headers: {
                Authorization: "Bearer " + localStorage.getItem(TOKEN),
            }
        })
    }
}

export default manageUser;
