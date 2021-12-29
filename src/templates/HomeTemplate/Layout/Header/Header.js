import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { getInfoUser } from '../../../../redux/actions/ManageUserAction'
import './Header.css'
import { Menu, Dropdown } from 'antd';
import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { TOKEN } from '../../../../utilities/constant'
import { Space } from 'antd';
import MobileIcon from '../../../../assets/mobileIcon.png'
import logoBrand from '../../../../assets/logoBrand.png'
import {
    HomeOutlined,
    MenuOutlined,
    PlaySquareTwoTone,
    ScheduleTwoTone,
    MobileTwoTone,
    MessageTwoTone
} from '@ant-design/icons';
import swal from '@sweetalert/with-react'

export const Header = (props) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        swal({
            title: "Bạn có chắc muốn đăng xuất?",
            text: ``,
            icon: "warning",
            buttons: {
                cancel: "Quay lại",
                confirm: {
                    text: "Xác nhận",
                    value: true,
                    visible: true,
                    className: "",
                    closeModal: true
                }
            },
            dangerMode: true,

        })
            .then((confirm) => {
                if (confirm) {
                    localStorage.clear();
                    navigate('/');
                    swal({
                        title: 'Bạn đã đăng xuất',
                        text: '',
                        icon: 'success',
                        timer: 2000,
                        buttons: false,
                    })
                }
            });

        // window.location.reload();
    }
    const [option, setOption] = useState()

    function handleChange(event) {
        setOption(event.target.value)
    }

    const [isMobile, setIsMobile] = useState(false)

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // Function Show/ Hide navBar

    const [show, setShow] = useState(true);

    // show / hide tab bar when scroll
    const controlNavbar = () => {
        if (window.scrollY > 750) {
            setShow(false);
        }
        else {
            setShow(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }

    })
    const { userLogin } = useSelector(state => state.ManageUserReducer);
    //Detect Screen Mobile
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    })
    const dispatch = useDispatch();

    //Check Empty Obj
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    useEffect(() => {
        //! GET INFO USER

        if (!isEmpty(userLogin)) {
            dispatch(getInfoUser(userLogin.taiKhoan))

        }
    }, [dispatch, userLogin])



    const menu = (
        <Menu style={{
            // backgroundColor: '#000',
            // borderRadius: '35px',
        }}>
            <Menu.Item style={{ color: 'white', width: '100%', height: '100px', }} key="0">
                <NavLink to="/profile">
                    <div className='flex justify-around items-center'>
                        <div>
                            <p className='mt-5'>Tài Khoản</p>
                        </div>
                        <div>
                            <UserOutlined style={{ fontSize: 30 }} />
                        </div>
                    </div>
                </NavLink>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item onClick={() => handleLogout()} style={{ color: 'white', width: '100%', height: '100px', }} key="1">
                <div className='flex justify-around items-center'>
                    <div>
                        <p className='mt-5'>Đăng Xuất</p>
                    </div>
                    <div>
                        <LogoutOutlined style={{ fontSize: 30 }} />
                    </div>
                </div>


            </Menu.Item>
        </Menu>
    );
    function smoothScroll(idSection) {
        document.querySelector(idSection).scrollIntoView({
            behavior: 'smooth'
        });
    }

    const menuNewsMobile = (
        <Menu>

            <Menu.Item style={{ width: '300px', height: '100px' }} key="0">
                <div onClick={() => smoothScroll('#schedule')}>
                    <div className='flex justify-around items-center'>
                        <div>
                            <p className='mt-5 w-[100px]'>Lịch Chiếu</p>
                        </div>
                        <div className='w-[35px] flex items-center justify-center'>
                            <ScheduleTwoTone twoToneColor='#FF0000' style={{ fontSize: 30 }} />
                        </div>
                    </div>
                </div>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item style={{ width: '300px', height: '100px' }} key="1">
                <div onClick={() => smoothScroll('#cinemas')} className='flex justify-around items-center'>
                    <div>
                        <p className='mt-5 w-[100px]'>Cụm Rạp</p>
                    </div>
                    <div className='w-[35px] flex items-center justify-center'>
                        <PlaySquareTwoTone twoToneColor='#FF0000' style={{ fontSize: 30 }} />
                    </div>
                </div>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item style={{ width: '300px', height: '100px' }} key="2">
                <div onClick={() => smoothScroll('#news')} className='flex justify-around items-center'>
                    <div>
                        <p className='mt-5 w-[100px]'>Tin Tức</p>
                    </div>
                    <div className='w-[35px] flex items-center justify-center'>
                        <MessageTwoTone twoToneColor='#FF0000' style={{ fontSize: 30 }} />
                    </div>
                </div>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item style={{ width: '300px', height: '100px' }} key="3">
                <div onClick={() => smoothScroll('#apps')} className='flex justify-around items-center'>
                    <div>
                        <p className='mt-5 w-[100px]'>Ứng Dụng</p>
                    </div>
                    <div className='w-[35px] flex items-center justify-center'>
                        <MobileTwoTone twoToneColor='#FF0000' style={{ fontSize: 30 }} />
                    </div>
                </div>
            </Menu.Item>

        </Menu>
    );
    const menuUserMobile = (
        <Menu style={{
            // backgroundColor: '#000',
            // borderRadius: '35px',
        }}>
            <Menu.Item style={{ color: 'white', width: '250px', height: '100px', }} key="0">
                <div className='flex justify-around items-center'>
                    <div>
                        <p className='mt-5'>Tài Khoản</p>
                    </div>
                    <div>
                        <UserOutlined style={{ fontSize: 30 }} />
                    </div>
                </div>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item onClick={() => handleLogout()} style={{ color: 'white', width: '100%', height: '100px', }} key="1">
                <div className='flex justify-around items-center'>
                    <div>
                        <p className='mt-5'>Đăng Xuất</p>
                    </div>
                    <div>
                        <LogoutOutlined style={{ fontSize: 30 }} />
                    </div>
                </div>


            </Menu.Item>
        </Menu>
    );
    return (
        <header className={`nav ${!show && 'nav-hide'} p-4 bg-coolGray-100 text-coolGray-800 bg-[black] bg-opacity-[75%] w-full fixed z-50`}>
            <div className="flex justify-between  h-12 mx-auto">
                <a href="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img className="h-10" src={logoBrand} alt="logo" />
                </a>
                {/* HEADLINES NAVBAR */}
                <div className="mt-[-5px]  lg:-mt-2 xl:ml-[200px] ">
                    <ul className="has-dropdown nav-item md:hidden">

                        <Space direction='vertical'>
                            <Space wrap>

                                <Dropdown trigger={['click']} placement='bottomCenter' overlay={menuNewsMobile}>
                                    <button className="p-4 text-red-600 hover:text-yellow-300">
                                        <MenuOutlined className="text-[30px]" />
                                    </button>
                                </Dropdown>
                            </Space>
                        </Space>

                    </ul>




                    <ul className="active-item items-stretch hidden md:flex space-x-3 m-5 lg:flex">
                        <li >
                            <div
                                onClick={() => smoothScroll('#schedule')}
                                className='cursor-pointer flex items-center px-0 lg:px-4 -mb-1  border-transparent text-red-600 hover:text-red-400 font-bold'
                            >Lịch Chiếu</div>

                        </li>
                        <li >
                            <div onClick={() => smoothScroll('#cinemas')} className="cursor-pointer flex items-center px-0 lg:px-4 -mb-1  border-transparent text-red-600 hover:text-red-400 font-bold">Cụm Rạp</div>
                        </li>
                        <li >
                            <div onClick={() => smoothScroll('#news')} className="cursor-pointer flex items-center px-0 lg:px-4 -mb-1  border-transparent text-red-600 hover:text-red-400 font-bold">Tin Tức</div>
                        </li>
                        <li>
                            <div onClick={() => smoothScroll('#apps')} className="cursor-pointer flex items-center px-0 lg:px-4 -mb-1  border-transparent text-red-600 hover:text-red-400 font-bold">Ứng Dụng</div>
                        </li>

                    </ul>
                </div>

                {/* LOGIN LOGOUT NAVBAR */}
                <div>
                    <ul className="nav-item has-dropdown mt-[-5px] lg:mt-[-10px] md:hidden lg:hidden">
                        <Space direction='vertical'>
                            <Space wrap>

                                <Dropdown placement='bottomCenter' overlay={menuUserMobile}>
                                    <button className="p-4 text-red-600 hover:text-yellow-300">
                                        <HomeOutlined className="text-[30px]" />
                                    </button>
                                </Dropdown>
                            </Space>
                        </Space>
                    </ul>

                    <div className="items-center flex-shrink-0 hidden md:flex">
                        {userLogin && localStorage.getItem(TOKEN) !== null ? <Fragment>
                            <NavLink onClick={e => e.preventDefault()} to="/" className="self-center px-8 py-3 rounded text-red-600 font-semibold flex hover:text-red-400 ant-dropdown-link">
                                <Dropdown overlayClassName="testing" overlay={menu} trigger={['click']}>
                                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        <div className='flex justify-between'>
                                            <img alt='' className='rounded-full mr-3' src='https://picsum.photos/20/20' />
                                            <span className='text-yellow-300'> {userLogin.hoTen}<DownOutlined /></span>
                                        </div>

                                    </div>
                                </Dropdown>
                            </NavLink>

                        </Fragment> : <Fragment>
                            <NavLink to="/login" className="self-center px-8 py-3 rounded text-red-600 font-semibold flex hover:text-red-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                Đăng nhập</NavLink>
                            <NavLink to='/register' className="self-center px-8 py-3 font-semibold rounded-xl bg-red-400  text-yellow-300 hover:text-red-600">
                                Đăng Ký</NavLink>
                        </Fragment>}
                    </div>

                </div>

                {/* DROPDOWN LOCATION */}
                <div>
                    <select className="w-15 h-8 mt-3 lg:mt-3 text-red-600 bg-black bg-opacity-20 hidden xl:block" name='option' onChange={handleChange}>
                        <option value="hoChiMinh">Hồ Chí Minh</option>
                        <option value="haNoi">Hà Nội</option>
                        <option value="daNang">Đà Nẵng</option>
                        <option value="daLat">Đà Lạt</option>
                    </select>
                </div>


            </div>
        </header>

    )
}

