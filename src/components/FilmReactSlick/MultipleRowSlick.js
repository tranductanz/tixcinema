import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../../redux/actions/types/actionTypes";
import { CardFilm } from "../FilmItem/CardFilm";
import styleSlick from './MultipleRowSlick.module.css'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-next']}`}
            style={{ ...style, display: "block", left: '-50px' }}
            onClick={onClick}
        />
    );
}


export const MultipleRowSlick = (props) => {
    const dispatch = useDispatch();
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 3,
        speed: 500,
        slidesPerRow: 1,
        swipeToSlide: true,
        rows: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "150px",
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    centerPadding: "200px",
                    infinite: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: true,
                    centerPadding: "150px",
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                }
            }
        ]
    };
    const { listFilm, dangChieu, sapChieu } = useSelector(state => state.ManageFilmReducer)
    //! RENDER LIST CARD FILM
    const renderFilms = () => {
        return listFilm.map((phim, index) => {
            return (
                <div className="mt-2" key={index}>
                    <CardFilm phim={phim} />
                </div>
            )
        })
    }

    //! DETECT STATUS SHOWING FILM
    const onShowingFilm = () => {
        if (!dangChieu) {
            const action = {
                type: SET_FILM_DANG_CHIEU
            }
            dispatch(action);
        }
    }

    const onCommingSoon = () => {
        if (!sapChieu) {
            const action = {
                type: SET_FILM_SAP_CHIEU
            }
            dispatch(action);
        }
    }

    //! SET STATUS FILM
    let activeClassDangChieu = dangChieu === true ? 'active_Film' : 'none_active_Film';
    let activeClassSapChieu = sapChieu === true ? 'active_Film' : 'none_active_Film';

    return (
        <div id="schedule" className={styleSlick['status']}>
            <div className="flex justify-center mb-10 m-[30px]">
                {/* <button onClick={() => onShowingFilm()} className={`${styleSlick[activeClassDangChieu]} ${styleSlick['status-btn']}  mr-[200px] `}>NOW SHOWING</button>
                <button onClick={() => onCommingSoon()} className={`${styleSlick['status-btn']} ${styleSlick[activeClassSapChieu]}`}>COMMING SOON</button> */}

                <button onClick={() => onShowingFilm()} className={`${styleSlick[activeClassDangChieu]} xl:px-8 xl:py-3 font-semibold rounded text-[15px] xl:text-[22px] mr-14 xl:mr-28`}>NOW SHOWING</button>
                <button onClick={() => onCommingSoon()} className={`${styleSlick[activeClassSapChieu]} xl:px-8 xl:py-3 font-semibold rounded text-[15px] xl:text-[22px]`}>COMING SOON</button>

            </div>
            <Slider {...settings}>
                {renderFilms()}
            </Slider>
        </div>
    )
}
