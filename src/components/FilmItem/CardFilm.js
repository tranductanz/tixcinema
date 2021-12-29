import './CardFilm.css'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import ModalVideo from 'react-modal-video';



export const CardFilm = (props) => {

    const [isOpen, setOpen] = useState(false)
    const [isLoadModal, setIsLoadModal] = useState(false);
    const { phim } = props;
    //! CONVERT ID LINK YOUTUBE
    function youtube_parser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : false;
    }


    return (
        <div className="wrapper max-w-xs p-6 rounded-md shadow-md bg-coolGray-50 text-coolGray-900 w-full h-full">
            <div className='card' style={{ backgroundImage: `url(${phim.hinhAnh})`, backgroundSize: '100%', backgroundPosition: 'center', objectFit: 'cover', }}>
                <img src={phim.hinhAnh} alt={phim.hinhAnh} className="card-img object-cover object-center w-full h-[200px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded-md bg-coolGray-500 opacity-0 " />
                <div className='card-play'>

                    <React.Fragment>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={youtube_parser(phim.trailer)} onClose={() => { setOpen(false); setIsLoadModal(false) }}>
                        </ModalVideo>

                        <button className=" btn-primary" onClick={() => {
                            setOpen(true);
                            setIsLoadModal(true);
                        }}>
                            {!isOpen && <div className={!isLoadModal ? 'play-btn' : 'play-btn-display'}></div>}
                        </button>
                    </React.Fragment>

                </div>
            </div>
            <div className="info mt-6 mb-2 grid grid-cols-1">
                <p style={styles.text} className="inline-block text-xs font-medium tracking-widest uppercase text-red-600 mr-5 lg:text-[20px]">C18</p>
                <h2 className="text-[13px] md:text-[16px] lg:text-[20px] xl:text-xl font-semibold tracking-wide min-h-[50px] lg:h-[75px]">{phim.tenPhim}</h2>
            </div>
            <p className="hidden md:block text-[12px] md:text-[14px] lg:text-[16px] text-coolGray-800 h-[50px] lg:h-[30px] lg:mb-10">{phim.moTa.length > 100 ? phim.moTa.substr(0, 60) + '...' : phim.moTa}</p>
            <NavLink className="text-white" to={`/phim/${phim.maPhim}`}>
                <div className="glow-on-hover font-bold text-xl text-center flex justify-center items-center" type="button">
                    MUA VÉ
                </div>
            </NavLink>

        </div >
    )
}


const styles = {
    text: {
        width: '50px',
        height: '25px',
        lineHeight: '25px',
        color: '#fff',
        backgroundColor: 'red',
        borderRadius: '6px',
        fontWeight: 'bold',
        textAlign: 'center'
    }
}