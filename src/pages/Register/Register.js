import React, { useEffect, useState } from 'react'
import LogoLogin from '../../assets/LogoLogin.png'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import {
    MailOutlined,
    UserOutlined,
    LockOutlined,
    MobileOutlined,
    CommentOutlined
} from '@ant-design/icons';
import './Register.css'
import { GROUP_ID, USER_LOGIN } from '../../utilities/constant';
import { RegisterAction } from '../../redux/actions/ManageUserAction';
import swal from '@sweetalert/with-react';
import { Dots } from "react-activity";
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
export const Register = (props) => {
    const schema = yup.object().shape({
        taiKhoan: yup.string()
            .min(5, "*****Nhập tối thiếu 5 kí tự")
            .required("*****Thông tin bắt buộc nhập"),
        matKhau: yup.string()
            .min(3, "*****Nhập tối thiếu 3 kí tự")
            .required('*****Thông tin bắt buộc nhập'),
        email: yup.string()
            .required('*****Thông tin bắt buộc nhập')
            .email('Email định dạng không hợp lệ !'),
        hoTen: yup.string()
            .required('*****Thông tin bắt buộc nhập'),
        soDt: yup.string()
            .required('*****Thông tin bắt buộc nhập')
            .matches(/^[0-9]+$/g, "Số điện thoại không chứa kí tự")
    })

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem(USER_LOGIN)) {
            navigate('/');
        }
    });


    const dispatch = useDispatch();

    const [load, setLoad] = useState(false);
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            hoTen: '',
            soDt: '',
            maNhom: GROUP_ID,
        },
        validationSchema: schema,
        onSubmit: values => {
            setLoad(true);
            swal({
                title: "Bạn kiểm tra thông tin lại nhé?",
                text: `
                    Tên Tài Khoản : ${formik.values.taiKhoan}
                    Email : ${formik.values.email}
                    Họ Tên : ${formik.values.hoTen}
                    Số Điện Thoại : ${formik.values.soDt} 
                `,
                icon: "warning",
                buttons: {
                    cancel: "Quay lại",
                    confirm: {
                        text: "Xác nhận",
                        value: true,
                        visible: true,
                        className: "",
                        closeModal: true
                    }
                },
                dangerMode: true,

            })
                .then((confirm) => {
                    if (confirm) {
                        dispatch(RegisterAction(values));
                        setLoad(false);
                    }
                });


        },
    });



    return (
        <div className='bg-container flex justify-center items-center'>
            <div className='bg-login z-20 w-[360px]'>
                <div className='flex justify-center mb-4 mt-2'>
                    <img className='w-[150px] h-[80px]' src={LogoLogin} alt="LogoLogin" />
                </div>
                <div className="grid">
                    <form onSubmit={formik.handleSubmit}
                        method="POST" className="form login">
                        <div className="form__field">
                            <label htmlFor="register__username">
                                <UserOutlined style={{ fontSize: 20 }} />
                                <span className="hidden">Tài khoản</span></label>
                            <input onChange={formik.handleChange} value={formik.values.taiKhoan} id="login__username" type="text" name="taiKhoan" className="form__input" placeholder="Tài khoản" />
                        </div>
                        {/*//! Check error */}
                        {formik.touched.taiKhoan && <span className='text-[13px] text-red-600'>{formik.errors.taiKhoan}</span>}
                        <div className="form__field">
                            <label htmlFor="register__password">
                                <LockOutlined style={{ fontSize: 20 }} />
                                <span className="hidden">Mật khẩu</span>
                            </label>
                            <input onChange={formik.handleChange} values={formik.values.matKhau} id="login__password" type="password" name="matKhau" className="form__input" placeholder="Mật khẩu" />
                        </div>
                        {/*//! Check error */}
                        {formik.touched.matKhau && <span className='text-[13px] text-red-600'>{formik.errors.matKhau}</span>}
                        <div className="form__field">
                            <label htmlFor="register__email">
                                <MailOutlined style={{ fontSize: 20 }} />
                                <span className="hidden">Email</span></label>
                            <input onChange={formik.handleChange} value={formik.values.email} type="text" name="email" className="form__input" placeholder="Email" />
                        </div>
                        {/* Check error */}
                        {formik.touched.email && <span className='text-[13px] text-red-600'>{formik.errors.email}</span>}
                        <div className="form__field">
                            <label htmlFor="register__hoTen">
                                <CommentOutlined style={{ fontSize: 20 }} />
                                <span className="hidden">Họ tên</span></label>
                            <input onChange={formik.handleChange} value={formik.values.hoTen} type="text" name="hoTen" className="form__input" placeholder="Họ tên" />
                        </div>
                        {/*// Check error */}
                        {formik.touched.hoTen && <span className='text-[13px] text-red-600'>{formik.errors.hoTen}</span>}
                        <div className="form__field">
                            <label htmlFor="register__soDt">
                                <MobileOutlined style={{ fontSize: 20 }} />
                                <span className="hidden">Số điện thoại</span></label>
                            <input onChange={formik.handleChange} value={formik.values.soDt} type="text" name="soDt" className="form__input" placeholder="Số điện thoại" />
                        </div>
                        {formik.touched.soDt && <span className='text-[13px] text-red-600'>{formik.errors.soDt}</span>}
                        <div className="form__field">
                            {!load ? <button type='submit' className='w-full bg-pink-500 py-3 mb-2'>
                                Đăng ký
                            </button> : <button type='submit' className='w-full bg-pink-500 py-3 mb-2'>
                                <Dots />
                            </button>}
                        </div>
                    </form>
                    <p className="text--center text-white">Quay lại đăng nhập? <a href="/login">Đăng nhập</a> <svg className="icon">
                        <use xlinkHref="#icon-arrow-right" />
                    </svg></p>
                </div>
            </div>

        </div>
    )
}
