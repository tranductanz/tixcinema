import React from 'react'
import backApp from '../../../assets/backapp.jpg'
import mobileScreen from '../../../assets/mobile.png';
import { screenSlider_1, screenSlider_10, screenSlider_11, screenSlider_12, screenSlider_13, screenSlider_14, screenSlider_15, screenSlider_2, screenSlider_3, screenSlider_4, screenSlider_5, screenSlider_6, screenSlider_7, screenSlider_8, screenSlider_9 } from './assets/imgScreen';
import Slider from "react-slick";
import './AppMobile.css'
const contentStyle = {
    height: '620px',
    width: '280px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
};
export const AppMobile = () => {
    return (
        <div id='apps' style={{ backgroundImage: `url(${backApp})`, backgroundSize: 'contain' }} className='h-[400px]  xl:h-[775px] w-full'>
            <div className='max-w-[940px] mx-auto xl:flex justify-center items-center'>
                <div className='w-full text-center -mt-8 xl:mt-5 md:text-left xl:w-[50%]'>
                    <h1 className='text-white text-[32px] mt-16'>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
                    <p className='text-white text-[16px] leading-[22px] mt-8'>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                    <a href='https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197'>
                        <button className='bg-red-600 px-4 py-2 rounded-[6px] text-white text-[18px] mt-5 '><span className='opacity-70'>App miễn phí - Tải về ngay!</span></button>
                    </a>
                    <p className='text-white text-[15px] mt-5'>TIX có hai phiên bản
                        <a href='https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197' className='font-semibold text-decoration: underline text-white'> iOS
                        </a> &
                        <a href='https://play.google.com/store/apps/details?id=vn.com.vng.phim123' className='font-semibold text-decoration: underline text-white'> Android
                        </a>
                    </p>
                </div>
                <div className='hidden xl:block relative mt-[70px] ml-20'>
                    <img className='h-[500px] xl:h-[650px] xl:z-10' src={mobileScreen} alt='mobileScreen' />
                    <div className='carousel xl:absolute '>
                        <Slider autoplay={true} {...settings}>
                            <div style={contentStyle}>
                                <img src={screenSlider_1} alt="screen1" />
                            </div>
                            <div style={contentStyle}>
                                <img src={screenSlider_2} alt="screen2" />
                            </div>
                            <div style={contentStyle}>
                                <img src={screenSlider_3} alt="screen3" />
                            </div>
                            <div style={contentStyle}>
                                <img src={screenSlider_4} alt="screen4" />
                            </div>
                            <div style={contentStyle}>
                                <img src={screenSlider_5} alt="screen5" />
                            </div>
                            <div style={contentStyle}>
                                <img src={screenSlider_6} alt="screen6" />
                            </div>
                            <div style={contentStyle}>
                                <img src={screenSlider_7} alt="screen7" />
                            </div>
                            <div style={contentStyle}>
                                <img src={screenSlider_8} alt="screen8" />
                            </div>
                            <div style={contentStyle}>
                                <img src={screenSlider_9} alt="screen9" />
                            </div>
                            <div style={contentStyle}>
                                <img src={screenSlider_10} alt="screen10" />
                            </div>
                            <div style={contentStyle}>
                                <img src={screenSlider_11} alt="screen11" />
                            </div>
                            <div style={contentStyle}>
                                <img src={screenSlider_12} alt="screen12" />
                            </div>
                            <div style={contentStyle}>
                                <img src={screenSlider_13} alt="screen13" />
                            </div>
                            <div style={contentStyle}>
                                <img src={screenSlider_14} alt="screen14" />
                            </div>
                            <div style={contentStyle}>
                                <img src={screenSlider_15} alt="screen15" />
                            </div>
                        </Slider>

                    </div>
                </div>

            </div>
        </div>
    )
}



