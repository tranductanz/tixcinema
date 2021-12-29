import React, { Fragment, memo, useEffect, useState } from 'react'
import { Tabs } from 'antd';

import { NavLink } from 'react-router-dom';
import moment from 'moment';
import LoadingIcon from '../../../assets/Loading.gif'
import { useSelector } from 'react-redux';
import "intersection-observer";
import { ScrollView } from "@cantonjs/react-scroll-view";
import { UpCircleTwoTone } from '@ant-design/icons';
import './HomeMenu.css'
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


const { TabPane } = Tabs;
const HomeMenu = (props) => {
    //! GO TO TOP 
    //Get the button:
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = () => {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    //! ---END go to TOP



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
    const { tabPosition } = tabState;

    const { heThongRapChieu } = props;
    const { isLoading } = useSelector(state => state.ManageCinemaReducer);
    const renderHeThongRap = () => {

        return heThongRapChieu.map((heThongRapChieu, index) => {
            return <TabPane key={index} tab={<div className='block'><img alt="" className="w-[50px] h-[50px] rounded-[25px] " src={heThongRapChieu.logo} /></div>}>
                <Tabs tabPosition={tabPosition}>

                    {heThongRapChieu.lstCumRap?.map((cumRap, index) => {
                        // {phim.moTa.length > 100 ? phim.moTa.substr(0, 60) + '...' : phim.moTa}
                        return <TabPane key={index} tab={
                            <div className='flex hover:font-bold' style={{ width: '310px' }}>
                                <img alt="" src='https://file.hstatic.net/1000367569/file/he-thong-am-thanh-hinh-anh-trong-rap-chieu-phim_18e2abadc5b94db68a9c52429771f9d0.jpg' className='rounded-full w-[50px] h-[50px]' />
                                <div className='ml-2 text-left '>
                                    <p className='text-[#8bc541] text-[14px] m-0 '>{cumRap.tenCumRap}</p>
                                    <p className='text-[#949494] text-[12px] m-0 leading-[16.8px]'>{cumRap.diaChi.length > 50 ? cumRap.diaChi.substr(0, 45) + '...' : cumRap.diaChi}</p>
                                    <p className='text-[#fb4226] text-[12px] font-mono'>[Chi tiết]</p>
                                </div>
                            </div>
                        }>


                            {/* Loading phim tương ứng */}
                            <ScrollView style={{ height: '100vh' }}>
                                {cumRap.danhSachPhim.map((phim, index) => {
                                    return <Fragment key={index}>
                                        <div>
                                            <div className='flex justify-center  xl:items-start mt-5 xl:mt-0 ml-4 xl:ml-0'>
                                                <img src={phim.hinhAnh} alt={phim.tenPhim} className='inline-block w-[100px] h-[100px] xl:w-[65px] xl:h-[65px] leading-[20px]' />
                                                <div className='ml-2'>
                                                    <div>
                                                        <div className='flex justify-center xl:justify-start w-[300px] xl:w-[550px]'>
                                                            <span className='bg-[#fb4226] text-white w-[30px] h-[23px] flex justify-center items-center text-[14px] rounded-sm mr-2 mt-[2px]'>C16</span>
                                                            <h1 className='text-[16px] xl:text-[16px] font-semibold m-0 md:w-[250px]'>{phim.tenPhim}</h1>
                                                        </div>
                                                        <div className='flex justify-center xl:justify-start text-[#949494] text-[12px] m-0 mt-1 leading-[16.8px]'>
                                                            <p>Thời lượng : {Math.floor(Math.random() * 66) + 100} phút - </p>
                                                            <p>IMDb {(Math.round(Math.random() * 6) + 10 / 10)}</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-center xl:justify-start font-semibold mb-1'>2D Digital</div>
                                                    <div className='grid grid-cols-3 gap-2 xl:grid-cols-4 xl:gap-4 xl:gap-x-24'>
                                                        {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                            return <NavLink key={index} className="bg-[#f6f6f6] border-[#e4e4e4] border-[1px] w-[80px] h-[30px] xl:w-[95px] xl:h-[35px] rounded-[8px] flex justify-center items-center mb-[2px]" to={`/checkout/${lichChieu.maLichChieu}`}>
                                                                <span className='mx-1 text-[#108f3e] hover:text-[#fb4226] text-[15px] font-medium'>{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</span>
                                                            </NavLink>
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                })}
                            </ScrollView>
                        </TabPane>
                    })
                    }
                </Tabs >
            </TabPane >
        })
    }


    return (
        <>

            {isLoading ? <div className='flex justify-center items-center'>
                <img alt="" className='w-[150px] h-[150px] xl:w-[250px] xl:h-[250px]' src={LoadingIcon} />
            </div> : <Tabs id='cinemas' className='home-menu' tabPosition={tabPosition}>
                {renderHeThongRap()}
            </Tabs>}
            {/*//! ON TOP */}
            <button onClick={() => topFunction()} id="myBtn" title="Go to top">
                <UpCircleTwoTone twoToneColor="#eb2f96" style={{ fontSize: 50 }} />
            </button>
        </>
    )
}

export const HomeMenuMemo = memo(HomeMenu)