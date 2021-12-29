import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { MultipleRowSlick } from '../../components/FilmReactSlick/MultipleRowSlick';
import { HomeMenuMemo } from './HomeMenu/HomeMenu';
import { getListFilmAction } from '../../redux/actions/ManageFilmAction';
import { getListCinemaAction } from '../../redux/actions/ManageCinemaAction';
import { News } from './News/News';
import { AppMobile } from './AppMobile/AppMobile';
import { HomeCarousel } from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
export const Home = () => {
    const dispatch = useDispatch();


    const { isLoading } = useSelector(state => state.ManageFilmReducer);

    const { heThongRapChieu } = useSelector(state => state.ManageCinemaReducer);

    useEffect(() => {
        dispatch(getListFilmAction());
        dispatch(getListCinemaAction());
    }, [dispatch])
    return (
        <Fragment>
            <HomeCarousel />
            <div className="max-w-7xl mx-auto mt-[50px]">
                {!isLoading && <MultipleRowSlick />}
                <div className="md:ml-5 xl:flex xl:justify-center  mt-16">
                    <HomeMenuMemo heThongRapChieu={heThongRapChieu} />
                </div>
                <div className='mt-[50px]'>
                    <News />
                </div>
            </div>
            <div>
                <AppMobile />
            </div>
        </Fragment>
    )
}
