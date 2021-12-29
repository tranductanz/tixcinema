import React, { useEffect, useState } from 'react'

import '@tsamantanis/react-glassmorphism/dist/index.css'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'

import { getInfoScheduleFilmAction } from '../../redux/actions/ManageCinemaAction'
import './Detail.css'
import '../../assets/styles/circle.css'
import { Tabs } from 'antd';
import moment from 'moment'
import LoadingIcon from '../../assets/Loading.gif'
import 'moment/locale/vi'

//Detect Screen
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
//END Detect Screen

export const Detail = (props) => {
    const { width } = useWindowDimensions();

    const [tabState, setTabState] = useState({
        tabPosition: 'left',
    });


    useEffect(() => {
        if (width <= 768) {
            setTabState({ tabPosition: 'top' })
        }
        else {
            setTabState({ tabPosition: 'left' })
        }
    }, [width])



    const { TabPane } = Tabs;
    // const changeTabPosition = e => {
    //     setTabState({ tabPosition: e.target.value });
    // };
    const { filmSchedule } = useSelector(state => state.ManageCinemaReducer)
    let { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInfoScheduleFilmAction(id));
    }, [dispatch, id])



    const { tabPosition } = tabState;
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const renderFilmScheduleInfo = () => {

        return filmSchedule.heThongRapChieu?.map((info, index) => {

            return <TabPane key={index} tab={<div className='flex justify-center items-center mr-8 ml-8 xl:mr-0 xl:ml-0'>
                <img className='w-[50px] h-[50px]' src={info.logo} alt='logo' />
                <p className='text-[15px] mt-2 ml-5 font-semibold'>{info.tenHeThongRap}</p>
            </div>}>
                <Tabs tabPosition='top'>
                    {info.cumRapChieu.map((cumRap, index) => {
                        return cumRap.lichChieuPhim?.map((lichChieu, index) => {
                            return <TabPane key={index} tab={<div className='flex flex-col justify-center items-center bg-black bg-opacity-10 px-5 py-1 rounded-lg ml-6 xl:ml-0'>
                                <p className='font-semibold'>{capitalizeFirstLetter(moment(lichChieu.ngayChieuGioChieu).format('dddd'))}</p>
                                <p className='font-semibold'>{moment(lichChieu.ngayChieuGioChieu).format('Do')}/{moment(lichChieu.ngayChieuGioChieu).format('MM')}</p>
                            </div>}>
                                <div className='flex ml-6 xl:ml-0'>
                                    <div>
                                        <img className='w-[50px] h-[50px] mr-5' src={cumRap.hinhAnh} alt='cumRaphinhanh' />
                                    </div>
                                    <div>
                                        <h1 className='text-[#8bc541] text-[16px] m-0 font-semibold '>{cumRap.tenCumRap}</h1>
                                        <p className='text-[#949494] text-[12px] m-0 leading-[16.8px]'>{cumRap.diaChi}</p>
                                    </div>
                                </div>
                                <h1 className='text-xl font-bold ml-6 mt-3 xl:mt-0 xl:ml-0'>2D Digital </h1>
                                <div>

                                    <NavLink to={`/checkout/${lichChieu.maLichChieu}`} className="bg-[#f6f6f6] border-[#e4e4e4] border-[1px] w-[95px] h-[35px] rounded-[8px] flex justify-center items-center mb-[50px] ml-6 xl:ml-0" >
                                        <span className='mx-1 text-[#108f3e] hover:text-[#fb4226] text-[18px] font-medium'>{moment(lichChieu.ngayChieuGioChieu).format('HH:mm')}</span>
                                    </NavLink>
                                </div>
                            </TabPane>

                        })
                    })}
                </Tabs>
            </TabPane>

        })

    }
    return (
        <div className='background-image' style={{ backgroundImage: `url(${filmSchedule.hinhAnh})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <CustomCard
                style={{ paddingTop: 150, minHeight: '150vh' }}
                effectColor="#000" // required
                color="black" // default color is white
                blur={13} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >

                <div className='md:flex md:flex-row lg:ml-32 xl:flex xl:max-w-7xl xl:mx-32 xl:mt-32 items-center justify-center'>
                    <div className='detail xl:w-[1200px] lg:w-[1200px] xl:h-[500px]'>
                        <div className='xl:flex xl:ml-32 '>
                            <div className=''>
                                <img className='w-[400px] xl:w-[1200px] h-[500px]' src={filmSchedule.hinhAnh} alt='hinhAnh' />
                            </div>
                            <div className='xl:flex flex-col justify-center md:w-[400px] xl:w-[600px] ml-1 mt-8 xl:ml-10'>
                                <span className='text-[20px] text-white xl:text-[15px] xl:text-black'>{moment(filmSchedule.ngayKhoiChieu).format('DD.MM.YYYY')}</span>

                                <h1 className='text-[24px] text-white font-semibold'>
                                    <span className='bg-[#fb4226] inline-block text-white w-[40px] h-[30px] rounded-md  text-[14px]  mr-2  font-semibold'><span className="flex items-center justify-center mt-1">C16</span></span>
                                    {filmSchedule.tenPhim}
                                </h1>
                                <div className='xl:flex  xl:flex-row font-semibold text-white xl:text-black'>
                                    <span>97 phút -</span>
                                    <span className='ml-2'>6 IMDb - </span>
                                    <span className='ml-2'>2D/Digital</span>

                                </div>
                                <a href='#ticket' className='w-[50%] ml-auto mr-auto xl:w-full xl:ml-0 xl:mr-0 text-white hover:text-white'>
                                    <button className='px-12 py-6 text-xl xl:px-6 xl:py-2 font-semibold rounded-md mt-10 bg-red-500'>Mua vé</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* Rating Circle */}
                    <div className="clearfix mb-32 mt-16 md:mt-0 xl:mt-32 block w-[65%] ml-auto mr-auto md:w-[300px] md:ml-16 xl:ml-8 xl:mr-0">
                        <div className={`c100 p${filmSchedule.danhGia * 10} big green`}>
                            <span>{filmSchedule.danhGia}/10</span>
                            <div className="slice">
                                <div className="bar" />
                                <div className="fill" />
                            </div>
                        </div>
                    </div>

                </div >
                {/* Tabs schedule filming */}
                <div id='ticket' className=' xl:max-w-7xl xl:mx-36 bg-white rounded-xl mt-32 '>
                    {/* <Space style={{ marginBottom: 24 }}>
                        Tab position:
                        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
                            <Radio.Button value="top">top</Radio.Button>
                            <Radio.Button value="bottom">bottom</Radio.Button>
                            <Radio.Button value="left">left</Radio.Button>
                            <Radio.Button value="right">right</Radio.Button>
                        </Radio.Group>
                    </Space> */}
                    {Array.isArray(filmSchedule.heThongRapChieu) && filmSchedule.heThongRapChieu.length ? <Tabs tabPosition={tabPosition}>
                        {renderFilmScheduleInfo()}
                    </Tabs> : <div className='px-32 py-32 flex flex-col items-center justify-center '>
                        <h1 className='text-sm lg:text-xl font-bold w-[250px] lg:w-full text-center mb-20'>Lịch chiếu đang được cập nhật, xin vui lòng quay lại sau....</h1>
                        <img className='w-[150px] h-[150px]' src={LoadingIcon} alt='loadingIcon' />
                    </div>}

                </div>
            </CustomCard >
        </div >
    )
}
