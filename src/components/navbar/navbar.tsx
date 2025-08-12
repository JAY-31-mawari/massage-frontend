import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.svg'
import loginImg from '../../assets/img/svg/login.svg'
import toast from 'react-hot-toast';
import axios from 'axios';
import { setStorageItem } from '../../utils/sessionStorage';
import { useUserStore } from '../../store/userStore';

export default function Navbar({ transparent }: { transparent: any }) {
    const [activeMenu, setActiveMenu] = useState<{ [key: string]: { [key: string]: boolean }; }>({});
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [login, setLogin] = useState<boolean>(false);
    const [property, setProperty] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<number>(1)
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('')
    const navigate = useNavigate()
    const updateUserDetails = useUserStore((state) => state.fullUpdate)

    let [scroll, setScroll] = useState<boolean>(false)

    const location = useLocation();
    const current = location.pathname

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleEmailChange = (e: any) => {
        const value = e.target.value
        setEmail(value)

        if (value === '') {
            setEmailError('Email is required')
        } else if (!validateEmail(value)) {
            setEmailError('Please enter a valid email address')
        } else {
            setEmailError('')
        }
    }

    const checkAccountExist = async () => {
        try {
            const res = await axios.post(global.config.ROOTURL.prod + '/user/exist', { email });
            console.log("hello:world", res)
            if (res.status === 201 || res.status === 200) {
                console.log('Data submitted successfully:', res.data);
                setLogin(!login)
                setStorageItem("uid", res?.data?.data?._id)
                setStorageItem("fullName", res?.data?.data?.businessName ? res.data.data.businessName : res.data.data?.fullName)
                setStorageItem("userName", res?.data?.data?.businessName ? res.data.data.businessName : res.data.data?.userName)
                setStorageItem("email", res?.data?.data?.business_email ? res.data.data?.business_email : res.data.data?.email)
                setStorageItem("phoneNo", res?.data?.data?.business_phone ? res.data.data.business_phone : res.data.data?.phone)
                setStorageItem("token", res.data.token)
                setStorageItem("user-data", JSON.stringify(res.data.data))
                updateUserDetails(res.data.data)
                toast.success("user account exists")
                setEmail("")
            } else {
                console.error('Unexpected status:', res.status);
            }
        } catch (error) {
            alert("user not found")
            console.error('Error submitting data:', error);
        }
    }

    const handleMouseEnter = (menu: string, submenu?: string) => {
        setActiveMenu((prev) => ({
            ...prev,
            [menu]: {
                ...prev[menu],
                [submenu || 'main']: true, // Open main menu or submenu
            },
        }));
    };

    // Handle mouse leave for any menu or submenu
    const handleMouseLeave = (menu: string, submenu?: string) => {
        setActiveMenu((prev) => ({
            ...prev,
            [menu]: {
                ...prev[menu],
                [submenu || 'main']: false, // Close main menu or submenu
            },
        }));
    };

    useEffect(() => {
        window.scrollTo(0, 0)

        const handlerScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true)
            } else { setScroll(false) }
        }

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('scroll', handlerScroll)
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handlerScroll)
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth])

    return (
        <>
            <div className={`header ${scroll ? 'header-fixed' : ''} ${transparent ? 'header-transparent dark' : 'header-light head-shadow'}`}>
                <div className="container">
                    <nav id="navigation " className={windowWidth > 991 ? "navigation navigation-landscape" : "navigation navigation-portrait"}>
                        <div className="nav-header" style={{ lineHeight: '0' }}>
                            <Link className="nav-brand text-logo" to="#">
                                <img src={logo} alt="" />
                                <Link to="/" className={current === '/' ? 'active' : ''}>
                                    <h5 className="fs-3 fw-bold ms-1 my-0">Last minute wellness</h5>
                                </Link>
                            </Link>
                            
                        </div>
                        <div className={`nav-menus-wrapper`} style={{ transitionProperty: 'left' }}>
                            <ul className="nav-menu">

                                <li><Link to="/" className={current === '/' ? 'active' : ''}>Home</Link></li>
                                <li><Link to="/my-account" className={current === '/my-account' ? 'active' : ''}>My Account</Link></li>

                            </ul>

                            <ul className="nav-menu nav-menu-social align-to-right d-none d-lg-inline-flex">

                                <li>
                                    <Link to="/create-account" className="fw-medium text-muted-2">
                                        <span className="svg-icon svg-icon-2hx me-1">
                                            <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor" />
                                                <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor" />
                                                <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor" />
                                            </svg>
                                        </span>
                                        SignUp or SignIn
                                    </Link>
                                </li>
                                <li className="add-listing">
                                    <Link to="/submit-property" className="bg-primary">
                                        <img src={loginImg} alt="" className='me-1' />Join as a Provider
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-primary" onClick={() => setProperty(!property)}>
                                        <span className="svg-icon svg-icon-2hx">
                                            <svg width="24" height="24" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="6" width="16" height="3" rx="1.5" fill="currentColor" />
                                                <rect opacity="0.3" y="12" width="8" height="3" rx="1.5" fill="currentColor" />
                                                <rect opacity="0.3" width="12" height="3" rx="1.5" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}