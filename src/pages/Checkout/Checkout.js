import React, { Fragment, memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { datVeAction, ManageBookingAction } from '../../redux/actions/ManageBookingAction';
import style from './Checkout.module.css';
import LoadingIcon from '../../assets/Loading.gif'
import cinema3DIcon from '../../assets/cinema3D.png'
import cinemaHouse from '../../assets/cinemahouse.png';
import seatIcon from '../../assets/SeatBooking/armchairGrey.png'
import seatVipIcon from '../../assets/SeatBooking/vip-chair-grey.png'
import seatChooseIcon from '../../assets/SeatBooking/armchairGreen.png';
import seatChooseVipIcon from '../../assets/SeatBooking/vip-chair-green.png'
import seatBooked from '../../assets/SeatBooking/armchairRed.png';
import seatVipBooked from '../../assets/SeatBooking/vip-chair-red.png'
import seatPaid from '../../assets/SeatBooking/you-choose.png';
import seatVipPaid from '../../assets/SeatBooking/you-choose-vip.png'
import TIXLogo from '../../assets/TIXLogo.png';
import { Tabs } from 'antd';
import UserIcon from '../../assets/SeatBooking/user.png'
import './Checkout.css';
import { SET_DAT_VE } from '../../redux/actions/types/actionTypes';
import _ from 'lodash';
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe';
import swal from '@sweetalert/with-react';
import { Dots } from "react-activity";
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import BGCheckout from '../../assets/BGCheckout.jpg'
import QRIcon from '../../assets/qrcode_7016793_.png'







const Checkout = (props) => {

    const [load, setLoad] = useState(false);
    const dispatch = useDispatch();
    const { bookingInfo, isLoading, listGheBooking } = useSelector(state => state.ManageBookingReducer);
    const { id } = useParams();
    const { thongTinPhim, danhSachGhe } = bookingInfo;
    useEffect(() => {
        dispatch(ManageBookingAction(id));
    }, [dispatch, id])


    const { userLogin } = useSelector(state => state.ManageUserReducer);


    const renderSeats = () => {
        return danhSachGhe.map((ghe, index) => {
            //! Checking seating status
            function Checking() {
                if (ghe.loaiGhe === 'Vip' && ghe.daDat) {
                    return 'ghe-da-dat-vip'
                }
                else if (ghe.loaiGhe === 'Thuong' && ghe.daDat) {
                    return 'ghe-da-dat'
                }
                if (ghe.loaiGhe === 'Vip') {
                    return 'ghe-vip'
                }
                else if (ghe.loaiGhe === "Thuong") {
                    return 'ghe'
                }


            }
            function lockBookedSeat() {
                if (ghe.daDat) {
                    return <p>X</p>
                }
                else {
                    return <p className='text-xs md:text-base'>{ghe.stt}</p>
                }
            }

            let classTest;
            let classTestVip;
            let indexGheDangDat = listGheBooking.findIndex(itemDD => itemDD.maGhe === ghe.maGhe);
            if (indexGheDangDat !== -1 && ghe.loaiGhe === 'Vip') {
                classTestVip = 'ghe-dang-chon-vip'
            }
            if (indexGheDangDat !== -1) {
                classTest = 'ghe-dang-chon-thuong';
            }

            let classGheBanDat = '';
            let classGheVipBanDat = '';
            if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat && ghe.loaiGhe === 'Vip') {
                classGheVipBanDat = 'ghe-vip-da-thanh-toan'
            }
            if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
                classGheBanDat = 'ghe-da-thanh-toan'
            }

            return <button onClick={() => {
                //! Push booking chair in store redux arr
                dispatch({
                    type: SET_DAT_VE,
                    payload: ghe,
                })
            }} disabled={ghe.daDat} className='ml-1 xl:mx-2 xl:ml-5' key={index}>
                <div className='relative'>
                    {classGheBanDat !== '' ? <div className={` ${classGheBanDat} ${classGheVipBanDat}`}>
                        <img className='hidden' src={seatIcon} alt='seatIcon' />
                        <div className={`${style['ghe-text']}`}>
                            <img src={UserIcon} alt="Usericon" />
                        </div>

                    </div> : <div className={`${Checking()} ${classTest} ${classTestVip}`}>
                        <img className='hidden' src={seatIcon} alt='seatIcon' />
                        <div className={`${style['ghe-text']}`}>
                            {lockBookedSeat()}
                        </div>
                    </div>}
                </div>
            </button>

        })
    }

    const renderChooseSeat = () => {
        return _.sortBy(listGheBooking, ['stt']).map((item, index) => {
            return <Fragment key={index}>
                <div className='relative'>
                    <img className='w-[45px] h-[35px]' src={item.loaiGhe === 'Vip' ? seatChooseVipIcon : seatChooseIcon} alt='seatChooseIconVip' />
                    <div className='absolute top-[2px] left-[11%]  xl:left-[30%] font-bold'>
                        <span className='w-[20px]'>{item.stt}</span>
                    </div>
                </div>
            </Fragment>
        })
    }

    const renderPriceSeat = () => {
        return listGheBooking.reduce((tongTien, ghe, index) => {
            return tongTien += ghe.giaVe;
        }, 0).toLocaleString()
    }

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const bookingTicket = () => {
        setLoad({ ...load, load: true });
        const thongTinDatVe = new ThongTinDatVe();
        thongTinDatVe.maLichChieu = id;
        thongTinDatVe.danhSachVe = listGheBooking;
        swal({
            title: "Bạn đã kiểm tra vé và xác nhận thanh toán?",
            text: ``,
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

                setTimeout(() => {
                    setLoad(false);
                }, 2000)
                if (confirm) {
                    dispatch(datVeAction(thongTinDatVe));
                    dispatch(ManageBookingAction(id));
                    setTimeout(() => {
                        props.setKey('2');
                    }, 2000);
                    forceUpdate();
                }

            });

    }

    return (
        !isLoading ? <div className="xl:max-w-[1440px] xl:mx-auto mt-5">
            <div className='xl:max-w-6xl xl:mx-auto flex justify-between'>
                <div className='flex'>
                    <div className='hidden md:block ml-2'>
                        <img src={cinemaHouse} alt='cinemaHouse' />
                    </div>
                    <div className='ml-3 xl:mr-0'>
                        <p className='mt-3 -mb-1 font-bold text-base xl:text-xl'>{thongTinPhim.tenCumRap}</p>
                        <p className='font-semibold'>- {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</p>
                    </div>
                </div>
                {/* <div className='xl:ml-[35%] mr-2 xl:mr-10'>
                    <NavLink to="/">
                        <img className='w-[75px] h-[75px]' src={TIXLogo} alt='TIXLogo' />
                    </NavLink>
                </div> */}
            </div>
            <div className="min-w-full xl:grid xl:grid-cols-12">

                <div className="xl:col-span-9">
                    <div className="flex flex-col items-center mt-5">

                        <div className="bg-black" style={{ width: '80%', height: 8 }} />

                        <div className={`${style['trapezoid']} text-center mb-20`}>
                        </div>
                        <div className="mt-5 absolute">
                            <div>
                                <img src={cinema3DIcon} alt='cinema3D' />
                            </div>
                        </div>

                    </div>
                    {/*//! Table */}
                    <div>
                        <div className="mt-5 flex justify-center">
                            <table className="divide-y divide-gray-200 xl:w-2/3 mb-10">
                                <thead className="bg-gray-50 p-0 xl:p-5">
                                    <tr>
                                        <th className='text-xs xl:text-base'>Ghế chưa đặt / VIP</th>
                                        <th className='text-xs xl:text-base'>Ghế đang chọn / VIP</th>
                                        <th className='text-xs xl:text-base'>Ghế đã đặt / VIP</th>
                                        <th className='text-xs xl:text-base'>Ghế bạn thanh toán / VIP</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td>
                                            <div className='flex justify-around'>
                                                <img className='w-[30px] h-[30px] xl:w-[65px] xl:h-[65px]' src={seatIcon} alt='ghe' />
                                                <img className='w-[30px] h-[30px] xl:w-[65px] xl:h-[65px]' src={seatVipIcon} alt='ghe-vip' />
                                                <div className="bg-black w-[2px] h-[25px] xl:h-[55px] xl:mt-[5px]" />
                                            </div>

                                        </td>
                                        <td>
                                            <div className='flex justify-around'>
                                                <img className='w-[30px] h-[30px] xl:w-[65px] xl:h-[65px]' src={seatChooseIcon} alt='ghe-dang-chon' />
                                                <img className='w-[30px] h-[30px] xl:w-[65px] xl:h-[65px]' src={seatChooseVipIcon} alt='ghe-vip-dang-chon' />
                                                <div className="bg-black w-[2px] h-[25px] xl:h-[55px] xl:mt-[5px]" />
                                            </div>

                                        </td>
                                        <td>
                                            <div className='flex justify-around'>
                                                <img className='w-[30px] h-[30px] xl:w-[65px] xl:h-[65px]' src={seatBooked} alt='ghe-da-dat' />
                                                <img className='w-[30px] h-[30px] xl:w-[65px] xl:h-[65px]' src={seatVipBooked} alt='ghe-da-thanh-toan' />
                                                <div className="bg-black w-[2px] h-[25px] xl:h-[55px] xl:mt-[5px]" />
                                            </div>

                                        </td>
                                        <td>
                                            <div className='flex justify-around mx-4 xl:mx-0'>
                                                <img className='w-[30px] h-[30px] xl:w-[65px] xl:h-[65px]' src={seatPaid} alt='ghe-ban-da-thanh-toan' />
                                                <img className='w-[30px] h-[30px] xl:w-[65px] xl:h-[65px]' src={seatVipPaid} alt='ghe-vip-ban-da-thanh-toan' />
                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    {renderSeats()}
                </div>
                <div className="col-span-3 ml-5">
                    <div className=''>
                        <div className='row-span-1'>
                            <h3 className="text-green-400 text-center text-4xl">
                                {renderPriceSeat()} đ
                            </h3>
                            <hr />
                            <h3 className="text-xl mt-2 font-semibold">{thongTinPhim.tenPhim}</h3>
                            <p className='text-xs font-medium'>{thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</p>
                            <p>{thongTinPhim.diaChi}</p>
                            <p>Ngày chiếu : <span className='font-semibold'>{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</span></p>
                            <hr />
                            <div className="flex flex-row my-5">
                                <div className="w-4/5">
                                    <span className="text-red-400 text-xs xl:text-lg">Ghế bạn chọn</span>
                                    {/*//! Render Seat Choose */}
                                    <div className='grid grid-cols-3 xl:grid-cols-4 xl:gap-2'>
                                        {renderChooseSeat()}
                                    </div>
                                </div>
                                <div className="text-right ">
                                    <span className="text-green-800 text-xs xl:text-lg inline-block">{renderPriceSeat()}đ</span>
                                </div>
                            </div>
                            <hr />
                            <div className="my-5">
                                <i>Email</i> <br />
                                <p className='font-semibold'>{userLogin.email}</p>
                            </div>
                            <div className="my-5">
                                <i>Phone</i> <br />
                                <p className='font-semibold'>{userLogin.soDT}</p>
                            </div>
                            <div className="my-5">
                                <i>Giá vé</i> <br />
                                <p className='xl:font-semibold'>Ghế Thường : <span className='text-sm xl:text-xl font-bold'>75.000 đồng</span></p>
                                <img className='w-[45px] h-[45px] xl:w-[65px] xl:h-[65px]' src={seatChooseIcon} alt='thuong' />
                                <hr />
                                <p className='xl:font-semibold'>Ghế V.I.P : <span className='text-sm xl:text-xl font-bold'>90.000 đồng</span></p>
                                <img className='w-[45px] h-[45px] xl:w-[65px] xl:h-[65px]' src={seatChooseVipIcon} alt='vip' />
                            </div>
                        </div>
                        <hr />
                        <div className="mt-10 mb-5 row-span-1">
                            {!load ? <div onClick={() => {
                                bookingTicket()

                            }}
                                className=" bg-green-500 cursor-pointer text-white w-[60%] mx-auto xl:w-full  text-center py-3 font-bold text-xl xl:text-2xl rounded-lg">
                                ĐẶT VÉ
                            </div> : <div
                                className=" bg-green-500 cursor-pointer text-white w-[60%] mx-auto xl:w-full  text-center py-3 font-bold text-xl xl:text-2xl rounded-lg">
                                <Dots />
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div> : <div className='flex justify-center items-center min-h-[100vh]'>
            <img alt="" className='w-[200px] h-[200px]' src={LoadingIcon} />
        </div>
    )
}

const { TabPane } = Tabs;

const KetQuaDatVe = (props) => {
    const { bookingInfo, listGheBooking } = useSelector(state => state.ManageBookingReducer);

    const { tenCumRap, tenRap, diaChi, tenPhim, hinhAnh, ngayChieu, gioChieu } = bookingInfo.thongTinPhim;

    const renderHistorySeat = () => {
        // _.sortBy(listGheBooking, ['stt']).map
        return _.sortBy(listGheBooking, ['stt']).map((history, index) => {
            let typeGhe = history.loaiGhe === 'Thuong' ? "Thường" : "Vip"
            return <Fragment key={index}>
                <div className='bg-indigo-500 w-full xl:w-[65%] rounded-xl h-[50px] mb-5'>
                    <div className='grid grid-cols-5'>
                        <div className='bg-red-500 col-span-1 flex justify-center items-center h-[50px] rounded-lg'>
                            <p className='text-2xl text-white font-bold mt-5'>{parseInt(history.stt)}</p>
                        </div>
                        <div className='col-span-4'>
                            <div className='flex justify-around items-center -mt-3'>
                                <p className='font-bold text-white text-base md:text-xl'>{typeGhe}</p>
                                <p className='font-bold text-white text-base md:text-xl'>{history.giaVe.toLocaleString()} đồng</p>
                            </div>
                        </div>
                    </div>

                </div>


            </Fragment>
        })
    }


    return <div style={{ backgroundImage: `url(${BGCheckout})`, backgroundSize: '100%', objectFit: 'cover' }}>
        <CustomCard
            effectColor="#000" // required
            color="#14AEFF" // default color is white
            blur={12} // default blur value is 10px
            borderRadius={0} // default border radius value is 10px
        >
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src={hinhAnh} />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <img className='w-[150px] h-[150px] xl:w-[250px] xl:h-[250px] mx-auto mb-10' src={QRIcon} alt='QRIcon' />
                                {/* <div className="w-56 h-56 mr-64 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                   
                                </div> */}
                                <div className="flex flex-col items-center text-center justify-center">
                                    <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4 hidden xl:block" />
                                    <p className="text-2xl text-white font-bold text-center">mã QRCode này được xem như một vé xem phim. <br />
                                        Bạn có thể đưa cho nhân viên soát vé để vào cổng.
                                    </p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8   sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">

                                <div>
                                    <p className='text-red-600 font-bold'>{tenCumRap}</p>
                                    <p className='text-red-600 font-bold'>{diaChi}</p>
                                    <p className='text-black font-bold'>Tên phim : <span className='text-red-600 font-bold'>{tenPhim}</span></p>
                                    <p className='text-black font-bold'>Thông tin rạp : <span className='text-red-600 font-bold'>{tenRap}</span></p>
                                    <p className='text-black font-bold'>Ngày Chiếu : <span className='text-red-600 font-bold'>{ngayChieu}</span></p>
                                    <p className='text-black font-bold'>Suất chiếu : <span className='text-red-600 font-bold'>{gioChieu}</span></p>

                                    <p className='text-black font-bold'>Ghế đã đặt</p>
                                </div>
                                {renderHistorySeat()}
                            </div>
                        </div>
                        <p className='text-red-500 font-bold text-3xl text-center'>Chúc bạn xem phim vui vẻ !!</p>
                    </div>
                </div >
            </section >
        </CustomCard>
    </div>


}

export const KetQuaDatVeMemo = memo(KetQuaDatVe);
const TabCheckOut = (props) => {

    const [keyTest, setKey] = useState('1');

    return <div className={`p-5 ${style['ant-tabs-ink-bar ']} `}>
        <Tabs activeKey={keyTest} >
            <TabPane tab={<div className={`${style['ant-tabs-tab-btn']}`}>01. Chọn ghế và thanh toán</div>} key={'1'}>
                <Checkout setKey={setKey} {...props} />
            </TabPane>
            <TabPane tab={<div className={`${style['ant-tabs-tab-btn']}`}>02. Kết quả đặt vé</div>} key={'2'}>
                <KetQuaDatVeMemo />
            </TabPane>
            <TabPane tab={<div className={`${style['ant-tabs-tab']}`}>
                <a href="/" >
                    <img className='w-[75px] h-[75px]' src={TIXLogo} alt='TIXLogo' />
                </a>
            </div>}
                key={'3'}></TabPane>
        </Tabs >
    </div >

}

export default TabCheckOut;