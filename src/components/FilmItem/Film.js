import React from 'react'

export const Film = (props) => {
    const { phim } = props;
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-coolGray-50 text-coolGray-900 w-full h-[500px]">
            <div style={{ background: `url(${phim.hinhAnh})`, backgroundSize: '100%', backgroundPosition: 'center', objectFit: 'cover' }}>
                <img src={phim.hinhAnh} alt={phim.hinhAnh} className="object-cover object-center w-full rounded-md h-72 bg-coolGray-500 opacity-0 " />
            </div>
            <div className="mt-6 mb-2 grid grid-cols-1">
                <p style={styles.text} className="inline-block text-xs font-medium tracking-widest uppercase text-red-600 mr-5">C18</p>
                <h2 className="text-[13px] xl:text-xl font-semibold tracking-wide">{phim.tenPhim}</h2>
            </div>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] text-coolGray-800">{phim.moTa.length > 100 ? phim.moTa.substr(0, 60) + '...' : phim.moTa}</p>
        </div>
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