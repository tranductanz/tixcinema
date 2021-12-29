import React, { useState } from 'react'
import './Login.css'
import LogoLogin from '../../assets/LogoLogin.png'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { LoginAction } from '../../redux/actions/ManageUserAction';
import { NavLink } from 'react-router-dom';
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";
import * as yup from 'yup';
export const Login = (props) => {

    //! VALIDATION
    const schema = yup.object().shape({
        taiKhoan: yup.string()
            .min(5, "*****Nhập tối thiếu 5 kí tự")
            .required("*****Thông tin bắt buộc nhập"),
        matKhau: yup.string()
            .min(3, "*****Nhập tối thiếu 3 kí tự")
            .required('*****Thông tin bắt buộc nhập')
    })


    //! END VALIDATION



    const [load, setLoad] = useState(false);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        // validateOnMount: true,
        validationSchema: schema,
        onSubmit: values => {
            setLoad(true);
            dispatch(LoginAction(values))
                .then(() => {
                    setLoad(false);
                })

        },
    });


    return (
        <div className='bg-container flex justify-center items-center'>
            <div className='bg-login z-20 w-[360px]'>
                <NavLink to="/" className='flex justify-center mb-12 mt-12'>
                    <img className='w-[210px] h-[110px]' src={LogoLogin} alt="LogoLogin" />
                </NavLink>
                <p className='text-white text-center max-w-[300px] mx-auto'>Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
                <div className="grid">
                    <form onSubmit={formik.handleSubmit}
                        method="POST" className="form login">
                        <div className="form__field">
                            <label htmlFor="login__username"><svg className="icon">
                                <use xlinkHref="#icon-user" />
                            </svg><span className="hidden">Tài khoản</span></label>
                            <input onChange={formik.handleChange} value={formik.values.taiKhoan} id="login__username" type="text" name="taiKhoan" className="form__input" placeholder="Tài khoản" />
                        </div>
                        {/*//! Formik Error */}
                        {formik.touched.taiKhoan && <span className='text-[13px] text-red-600'>{formik.errors.taiKhoan}</span>}
                        <div className="form__field">
                            <label htmlFor="login__password"><svg className="icon">
                                <use xlinkHref="#icon-lock" />
                            </svg><span className="hidden">Mật khẩu</span></label>
                            <input onChange={formik.handleChange} values={formik.values.matKhau} id="login__password" type="password" name="matKhau" className="form__input" placeholder="Mật khẩu" />
                        </div>
                        {/*//! Formik Error */}
                        {formik.touched.matKhau && <span className='text-[13px] text-red-600'>{formik.errors.matKhau}</span>}
                        <div className="form__field">
                            {!load ? <button type='submit' className='w-full bg-pink-500 py-3 mb-2'>
                                Đăng nhập
                            </button> : <button type='submit' className='w-full bg-pink-500 py-3 mb-2'>
                                <Dots />
                            </button>}
                        </div>
                    </form>
                    <p className="text--center text-white">Không phải thành viên? <a href="/register">Đăng ký ngay</a> <svg className="icon">
                        <use xlinkHref="#icon-arrow-right" />
                    </svg></p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icons">
                    <symbol id="icon-arrow-right" viewBox="0 0 1792 1792">
                        <path d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z" />
                    </symbol>
                    <symbol id="icon-lock" viewBox="0 0 1792 1792">
                        <path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z" />
                    </symbol>
                    <symbol id="icon-user" viewBox="0 0 1792 1792">
                        <path d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z" />
                    </symbol>
                </svg>
            </div>

        </div>
    )
}
