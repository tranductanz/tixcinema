import React, { Fragment, useEffect } from 'react'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import style from './Profile.module.css';
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount } from '../../redux/actions/ManageUserAction';
import moment from 'moment';
import _ from 'lodash';
import TIXLogo from '../../assets/TIXLogo.png';
moment.locale('vi');
const { TabPane } = Tabs;
const Profile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAccount());
    })
    const { userLogin } = useSelector(state => state.ManageUserReducer);
    return (
        <CustomCard
            effectColor="#000" // required
            color="#ff0000" // default color is white
            blur={12} // default blur value is 10px
            borderRadius={0} // default border radius value is 10px
        >
            <div className="flex max-w-7xl mx-auto justify-center items-center min-h-[100vh]">
                <img src="https://source.unsplash.com/200x200/?portrait" alt="" className="object-cover w-64 h-64 rounded-full sm:h-96 bg-coolGray-500 mr-32" />
                <div>
                    <h2 className="text-xl font-semibold">{userLogin.hoTen}</h2>
                    <p>Tên tài khoản : {userLogin.taiKhoan}</p>
                    <p>Email : {userLogin.email}</p>
                    <p>Số điện thoại : {userLogin.soDT}</p>

                </div>
            </div>

        </CustomCard>

    )
}

const HistoryBooking = (props) => {
    const { accountUser, isLoadingButton } = useSelector(state => state.ManageUserReducer);
    console.log(accountUser, 'isload');
    const renderHistoryBooking = () => {
        return accountUser.thongTinDatVe?.map((info, index) => {
            return <div key={index} className=''>
                <div className="max-w-7xl mx-auto flex-wrap mr-10 rounded-md shadow-md bg-coolGray-50 text-coolGray-900 flex-initial w-80">
                    <img src={info.hinhAnh} alt="" className="object-cover object-center w-full rounded-md h-72 bg-coolGray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase text-red-600">{info.thoiLuongPhim} phút</span>
                        <h2 className="text-xl font-semibold tracking-wide">{info.tenPhim}</h2>
                        <p className='text-xl'>Giá vé : {info.giaVe.toLocaleString()} Đồng</p>
                    </div>
                    <p className="text-coolGray-800">Ngày đặt : {moment(info.ngayDat).subtract(6, 'days').calendar()}</p>
                </div>
                {_.sortBy(_.sortedUniqBy(info.danhSachGhe, 'tenGhe'), 'tenGhe').map((item, index) => {
                    return <Fragment>
                        <p>Tên Rạp: {item.tenHeThongRap}</p>
                        <p>{item.tenCumRap}</p>
                        <div key={index} className="grid grid-cols-2">
                            Ghế bạn đặt : {item.tenGhe}
                        </div>
                    </Fragment>
                })}
            </div>
        })
    }
    return <Fragment>
        <CustomCard
            effectColor="#000" // required
            color="#ff0000" // default color is white
            blur={12} // default blur value is 10px
            borderRadius={0} // default border radius value is 10px
        >

            {!isLoadingButton ? <div className='flex justify-between'>
                {renderHistoryBooking()}
            </div> : <div className='min-h-[100vh] flex justify-center items-center'>
                <div className="w-64 h-64 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
            </div>}

        </CustomCard>


    </Fragment>

}

const ProfileTab = () => (
    <div className={`p-5 ${style['ant-tabs-ink-bar ']} `}>
        <Tabs defaultActiveKey='1' >
            <TabPane tab={<div className={`${style['ant-tabs-tab-btn']}`}>Thông tin tài khoản</div>} key={'1'}>
                <Profile />
            </TabPane>
            <TabPane tab={<div className={`${style['ant-tabs-tab-btn']}`}>Lịch sử đặt vé</div>} key={'2'}>
                <HistoryBooking />
            </TabPane>
            <TabPane tab={<div className={`${style['ant-tabs-tab']}`}>
                <a href="/" >
                    <img className='w-[75px] h-[75px]' src={TIXLogo} alt='TIXLogo' />
                </a>
            </div>}
                key={'3'}></TabPane>
        </Tabs >
    </div >
);

export default ProfileTab