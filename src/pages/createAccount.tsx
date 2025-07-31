import { useState } from "react";
import Navbar from "../components/navbar/navbar";
import axios from "axios";
import toast from "react-hot-toast";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { getStorageItem, setStorageItem } from "../utils/sessionStorage";
import { useUserStore } from "../store/userStore";

export default function RegisterAccount() {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(false)
    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneNoError, setphoneNoError] = useState('')
    const updateUserDetails = useUserStore((state) => state.fullUpdate)


    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const validatePhone = (phone: string) => {
        const regex = /^[1-9]\d{9}$/;
        return regex.test(phone);
    };

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

    const handlePhoneNoChange = (e: any) => {
        const value = e.target.value;
        setPhone(value);

        if (value === '') {
            setphoneNoError('Phone number is required');
        } else if (!validatePhone(value)) {
            setphoneNoError('Please enter a valid 10-digit phone number');
        } else {
            setphoneNoError('');
        }
    };

    const changeForm = () => {
        setEmailError('')
        setIsLogin(!isLogin)
    }

    const handleUserRegistration = async () => {
        try {
            const userPayload = {
                fullName,
                userName,
                email,
                phone
            }

            const res = await axios.post(global.config.ROOTURL.prod + '/user', userPayload);

            if (res.status === 201 || res.status === 200) {
                toast.success("ACcount Created Successfully")
                setStorageItem("uid", res?.data?.data?._id)
                setStorageItem("fullName", res.data.data?.fullName)
                setStorageItem("userName", res.data.data?.userName)
                setStorageItem("email", res.data.data?.email)
                setStorageItem("phoneNo", res.data.data?.phone)
                setStorageItem("token", res.data.token)
                setStorageItem("user-data", JSON.stringify(res.data.data))
                updateUserDetails(res.data.data)
                navigate("/")
            } else {
                console.error('Unexpected status:', res.data.message);
            }
            setFullName("")
            setUserName("")
            setEmail("")
            setPhone("")
        } catch (error) {
            console.error('handleUserRegistration Error:', error);
        }
    }

    const handleAccountLogin = async () => {
        try {
            const res = await axios.post(global.config.ROOTURL.prod + '/user/login', { email });
            if (res.status === 201 || res.status === 200) {
                toast.success("Logged in Successfully")
                setStorageItem("uid", res?.data?.data?._id)
                setStorageItem("fullName", res.data.data?.fullName)
                setStorageItem("userName", res.data.data?.userName)
                setStorageItem("email", res.data.data?.email)
                setStorageItem("phoneNo", res.data.data?.phone)
                setStorageItem("token", res.data.token)
                setStorageItem("user-data", JSON.stringify(res.data.data))
                updateUserDetails(res.data.data)
                navigate("/")
            } else {
                console.error('Unexpected status:', res.status);
            }
        } catch (error) {
            alert("user not found")
            console.error('handleAccountLogin Error:', error);
        }
    }

    return (
        <>
            {/* <Navbar transparent={false} /> */}
            <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                {/* Left Section - Forms */}
                <div className="flex flex-col items-center justify-center p-8 bg-white overflow-y-auto" style={{
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none'
                }}>
                    <div className="w-full max-w-md space-y-8">
                        {/* Create Account Section */}
                        <div className="space-y-6">
                            {!isLogin && <div>
                                <div className="text-center">
                                    <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
                                    <p className="mt-2 text-sm text-gray-600">Join us and get started with your journey</p>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            placeholder="Enter your full name"
                                            onChange={(e) => setFullName(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            User Name
                                        </label>
                                        <input
                                            type="text"
                                            id="userName"
                                            placeholder="Enter your userName"
                                            onChange={(e) => setUserName(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            onChange={(e) => handleEmailChange(e)}
                                            className={`w-full p-3 border rounded-lg focus:ring-2 focus:${emailError !== '' ? 'ring-red-500' : 'ring-blue-500'} focus:border-transparent border-gray-300`}
                                        />
                                        {emailError && <div className="text-red-500 text-sm mt-1">{emailError}</div>}

                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Mobile Number
                                        </label>
                                        <input
                                            type="text"
                                            id="phone"
                                            placeholder="Enter your mobile Number"
                                            onChange={(e) => handlePhoneNoChange(e)}
                                            className={`w-full p-3 border rounded-lg focus:ring-2 focus:${phoneNoError !== '' ? 'ring-red-500' : 'ring-blue-500'} focus:border-transparent border-gray-300`}
                                        />
                                        {phoneNoError && <div className="text-red-500 text-sm mt-1">{phoneNoError}</div>}

                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleUserRegistration}
                                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200"
                                    >
                                        Create Account
                                    </button>
                                </div></div>}
                        </div>

                        {/* Divider */}
                        {/* <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or</span>
                            </div>
                        </div> */}

                        {/* Login Section */}
                        <div className="space-y-4">
                            {isLogin && <div>
                                <div className="text-center">
                                    <h2 className="text-xl font-semibold text-gray-900">Already have an account?</h2>
                                    <p className="text-sm text-gray-600">Sign in to your existing account</p>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            onChange={(e) => handleEmailChange(e)}
                                            className={`w-full p-3 border rounded-lg focus:ring-2 focus:${emailError !== '' ? 'ring-red-500' : 'ring-blue-500'} focus:border-transparent border-gray-300`}
                                        />
                                        {emailError && <div className="text-red-500 text-sm mt-1">{emailError}</div>}
                                    </div>

                                    {/* <div>
                                    <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                        Password
                                    </label>
                                    <input 
                                        type="password" 
                                        id="loginPassword"
                                        placeholder="Enter your password" 
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div> */}

                                    <button
                                        type="button"
                                        onClick={handleAccountLogin}
                                        className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition duration-200"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>}
                        </div>

                        {!isLogin ?                
                        <p className="text-center text-sm text-gray-600">Already Have an account? <span onClick={changeForm} className="text-blue-600 cursor-pointer">Sign in</span></p>
                        :<p className="text-center text-sm text-gray-600">Register your account? <span onClick={changeForm} className="text-blue-600 cursor-pointer">Sign up</span></p>
                        }
                    </div>
                </div>

                {/* Right Section - Image (Hidden on mobile) */}
                <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8 overflow-hidden">
                    <div className="text-center space-y-6">
                        <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
                            <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-800">Welcome to Our Platform</h2>
                            <p className="text-gray-600 max-w-md">
                                Join thousands of users who trust our platform for their needs.
                                Create your account today and start your journey with us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}