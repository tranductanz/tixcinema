import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCarouselAction } from '../../../../redux/actions/CarouselAction';
import './HomeCarousel.css'


export const HomeCarousel = (props) => {

    const { isLoading } = useSelector(state => state.ManageCinemaReducer);
    const { arrImg } = useSelector(state => state.CarouselReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarouselAction());
    }, [dispatch])


    const renderBanner = () => {
        const contentStyle = {
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
        return arrImg.map((item, index) => {
            return <div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                    <img src={item.hinhAnh} className="w-full h-[300px] sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[800px] 2xl:h-[1200px] opacity-0" alt={item.hinhAnh} />
                </div>
            </div>
        })
    }


    return (
        <Carousel className="ant-design" autoplay>
            {!isLoading && renderBanner()}
        </Carousel>
    )
}



