import manageUser from "../../api/manageUser";
import { SET_ACCOUNT_FULL, SET_LOG_IN, SET_USER_INFO_FULL } from "./types/actionTypes";
import swal from 'sweetalert';


export const LoginAction = (thongTinDangNhap) => {

    return async dispatch => {
        try {

            const result = await manageUser.getLogin(thongTinDangNhap);
            const action = {
                type: SET_LOG_IN,
                payload: result.data.content,
            }
            // console.log(result.data?.content.accessToken, 'result');
            const accessToken = result.data?.content.accessToken
            if (result.data.statusCode === 200) {
                localStorage.setItem('accessToken', accessToken);
                dispatch(action);
                window.location.href = "/";
            }
            // console.log(result, 'result');
        }

        catch (err) {
            console.log(err.response?.data);
            swal(`${err.response?.data.content}`, "", "warning");
        }
    }
}

export const RegisterAction = (thongTinDangKy) => {
    return async dispatch => {
        try {
            const result = await manageUser.getRegister(thongTinDangKy);
            if (result.data.statusCode === 200) {
                swal({
                    title: "Chúc mừng bạn đã đăng ký thành công",
                    text: ``,
                    icon: "success",
                    buttons: "OK",

                })
                    .then((confirm) => {
                        if (confirm) {
                            window.location.href = "/login";
                        }
                    });
            }
        }
        catch (err) {
            swal(`${err.response?.data.content}`, "", "warning");
        }
    }
}

export const getInfoUser = (taiKhoan) => {
    return async (dispatch) => {
        const result = await manageUser.getFullInfo(taiKhoan);
        const action = {
            type: SET_USER_INFO_FULL,
            payload: result.data.content.data,
        }
        dispatch(action);
    }
}


export const getAccount = () => {
    return async dispatch => {
        const result = await manageUser.getAccount();
        const action = {
            type: SET_ACCOUNT_FULL,
            payload: result.data.content
        }
        dispatch(action);
    }
}
