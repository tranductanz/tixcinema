import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import iconZion from '../../../../assets/icon_zion.png'
import { FacebookOutlined, InstagramOutlined, AppleOutlined, AndroidOutlined } from '@ant-design/icons';
export const Footer = () => {
    const { heThongRapChieu } = useSelector(state => state.ManageCinemaReducer);
    return (

        <footer className='text-[#949494] bg-[#222]'>

            <div className="xl:max-w-7xl xl:mx-auto">
                <div className="xl:px-5 xl:py-24 border-b-[1px] text-white mb-10">
                    <div className="sm:block xl:flex justify-center">
                        <div className="xl:w-[400px] px-4 ">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 text-center xl:text-left">TIX</h2>
                            <div className='block text-center xl:flex xl:text-left'>
                                <div className='xl:mr-10'>
                                    <a href='https://tix.vn/faq'>
                                        <p className='text-[12px] text-[#949494] '>FAQ</p>
                                    </a>
                                    <a href='https://tix.vn/brand-guideline/'>
                                        <p className='text-[12px] text-[#949494] '>Brand Guidelines</p>
                                    </a>
                                </div>
                                <div>
                                    <a href='https://tix.vn/thoa-thuan-su-dung'>
                                        <p className='text-[12px] text-[#949494] '>Thoả thuận sử dụng</p>
                                    </a>
                                    <a href='https://tix.vn/chinh-sach-bao-mat'>
                                        <p className='text-[12px] text-[#949494] '>Chính sách bảo mật</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-[300px]">
                            <h2 className="text-center  font-medium text-white tracking-widest text-sm mb-3 xl:mr-5">ĐỐI TÁC</h2>
                            <div className='flex justify-between mx-10 xl:grid xl:grid-cols-3 '>
                                {heThongRapChieu.map((heThongRapChieu, index) => {

                                    return <Fragment key={index}>
                                        <div className="flex justify-center items-center mb-10 xl:mr-5">
                                            <button className="text-gray-600 hover:text-gray-800">
                                                <img alt="logo" className='w-[30px] h-[30px]' src={heThongRapChieu.logo} />
                                            </button>
                                        </div>
                                    </Fragment>
                                })}
                            </div>

                        </div>
                        <div className="xl:w-[200px]">
                            <h2 className="text-center xl:text-left title-font font-medium text-white tracking-widest text-sm mb-3">MOBILE APP</h2>
                            <div className='flex justify-center xl:justify-start'>
                                <a rel="noreferrer" target="_blank" href='https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197'>
                                    <AppleOutlined style={{ fontSize: 30, color: 'red' }} />
                                </a>
                                <a className='ml-5' rel="noreferrer" target="_blank" href='https://play.google.com/store/apps/details?id=vn.com.vng.phim123'>
                                    <AndroidOutlined style={{ fontSize: 30, color: 'red' }} />
                                </a>
                            </div>
                        </div>
                        <div className="xl:w-[200px] mb-10">
                            <h2 className="text-center mt-3 xl:mt-0 xl:text-left font-medium text-white tracking-widest text-sm mb-3">SOCIAL</h2>
                            <div className='flex justify-center xl:justify-start'>
                                <a rel="noreferrer" target="_blank" href='https://www.facebook.com/0TranDucTan'>
                                    <FacebookOutlined style={{ fontSize: 30, color: 'red' }} />

                                </a>
                                <a className='ml-5' rel="noreferrer" target="_blank" href='https://www.facebook.com/0TranDucTan'>
                                    <InstagramOutlined style={{ fontSize: 30, color: 'red' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='xl:max-w-7xl xl:mx-auto pb-16'>
                    <div className='block xl:flex xl:justify-center'>
                        <div className='xl:items-start'>
                            <img className='block ml-auto mr-auto w-[150px] mt-10 mb-10 xl:mt-0 xl:mb-0 rounded-xl xl:w-[100px] h-[50px]' src={iconZion} alt="zion" />
                        </div>
                        <div className='xl:w-[800px] text-center xl:text-left ml-5 mr-5'>
                            <h1 className='text-white'>TIX - SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h1>
                            <span>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</span>
                            <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                                <br />
                                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020  do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                            </span>
                            <span>
                                Số Điện Thoại (Hotline): 1900 545 436
                                <br />
                                Email: : <a className='text-red-600' href='mailto:tantran1610@gmail.com'>tantran1610@gmail.com</a>
                            </span>
                        </div>
                        <div className='xl:items-start'>
                            <a href='http://online.gov.vn/Home/WebDetails/62782'>
                                <img className='block ml-auto mr-auto w-[200px]  mt-10 mb-10 xl:mt-0 xl:mb-0 rounded-xl xl:w-[150px] h-[60px]' src='https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png' alt='boCongThuong' />
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </footer>

    )
}
