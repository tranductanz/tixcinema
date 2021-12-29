import React, { Fragment } from 'react'
import './NewsBot.css'
export const NewsBot = () => {
    return (
        <Fragment>
            <div className='list-col mb-10'>
                {/* Item1 */}
                <div className='col-news'>
                    <img alt="" className='news' src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png" />
                    <h1 className='text-[15px] font-semibold'>
                        <a className='text-black hover:text-red-600 hover:font-semibold' href='https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi'>PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù đàn ông để đời</a>
                    </h1>
                    <p className='text-[12px]  md:h-[130px]  xl:h-[80px]'>Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim </p>
                    <div className="h-28  items-center flex-wrap mt-[10px] w-full">

                        <span className=" cursor-pointer text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx={12} cy={12} r={3} />
                            </svg>2.6K
                        </span>
                        <span className="cursor-pointer text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                            </svg>50
                        </span>
                    </div>
                </div>
                {/* Item2 */}
                <div className='col-news'>
                    <img alt="" className='news' src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png" />
                    <h1 className='text-[15px] font-semibold'>
                        <a href='https://tix.vn/goc-dien-anh/7962-vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em' className='text-black hover:text-red-600 hover:font-semibold'>
                            Vừa đẹp lại vừa tài năng, dàn sao nam của phim "Bàn tay diệt quỷ" đảm bảo đốn tim hội chị em
                        </a>
                    </h1>
                    <p className='text-[12px] md:h-[130px] xl:h-[80px]'>Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành động “Bàn Tay Diệt Quỷ” hứa hẹn sẽ làm cho hội chị em phải mê mẩn vào tháng tới.</p>

                    <div className="items-center flex-wrap mt-[10px] w-full  ">

                        <span className=" cursor-pointer text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx={12} cy={12} r={3} />
                            </svg><span>10.5K</span>
                        </span>
                        <span className="cursor-pointer text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                            </svg>250
                        </span>
                    </div>
                </div>
                {/* Item3 */}
                <div className='col-news '>
                    <a href='https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon' className='flex mb-6 mt-[50px] xl:mt-0 text-black hover:text-red-700'>
                        <img alt="" className='w-[55px] xl:h-[55px]' src='https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg' />
                        <p className='ml-2 text-[16px] '>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</p>
                    </a>
                    <a href='https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh' className='flex mb-6 text-black hover:text-red-700'>
                        <img alt="" className='w-[55px] h-[55px]' src='https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png' />
                        <p className='ml-2 text-[16px]'>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</p>
                    </a>
                    <a href='https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu' className='flex mb-6 text-black hover:text-red-700'>
                        <img alt="" className='w-[55px] h-[55px]' src='https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png' />
                        <p className='ml-2 text-[16px]'>Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu </p>
                    </a>
                    <a href='https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman' className='flex text-black hover:text-red-700'>
                        <img alt="" className='w-[55px] h-[55px]' src='https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg' />
                        <p className='ml-2 text-[16px]'>{('Ngô Thanh Vân chính thức khởi động cuộc thi thiết kế trang phục cho siêu anh hùng đầu tiên tại Việt Nam – VINAMAN').substring(0, 80) + '...'}</p>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}
