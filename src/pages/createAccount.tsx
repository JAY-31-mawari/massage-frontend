import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setStorageItem } from "../utils/sessionStorage";
import { useUserStore } from "../store/userStore";
import OTPSection from "../components/OTPSection";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function RegisterAccount() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneNoError, setphoneNoError] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [isOTPLoading, setIsOTPLoading] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const updateUserDetails = useUserStore((state) => state.fullUpdate);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string) => {
    const regex = /^[1-9]\d{9}$/;
    return regex.test(phone);
  };

  const handleEmailChange = (e: any) => {
    const value = e.target.value;
    setEmail(value);

    if (value === "") {
      setEmailError("Email is required");
    } else if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneNoChange = (e: any) => {
    const value = e.target.value;
    setPhone(value);

    if (value === "") {
      setphoneNoError("Phone number is required");
    } else if (!validatePhone(value)) {
      setphoneNoError("Please enter a valid 10-digit phone number");
    } else {
      setphoneNoError("");
    }
  };

  const changeForm = () => {
    setEmailError("");
    setIsLogin(!isLogin);
  };

  const handleUserRegistration = async () => {
    try {
      const userPayload = {
        fullName,
        userName,
        email,
        phone,
      };

      const res = await axios.post(
        global.config.ROOTURL.prod + "/user",
        userPayload
      );

      if (res.data.msg === "Email or phone already exists") {
        toast.error(res.data.msg);
        return;
      } else if (res.status === 201 || res.status === 200) {
        toast.success(res.data.msg);
        setUserData(res.data?.data);
        setShowOTP(true);
      } else {
        console.error("Unexpected status:", res.data.message);
      }
    } catch (error) {
      console.error("handleUserRegistration Error:", error);
      toast.error("Failed to create account. Please try again.");
    }
  };

  const handleAccountLogin = async () => {
    try {
      const res = await axios.post(global.config.ROOTURL.prod + "/user/login", {
        email,
      });
      if (res.status === 201 || res.status === 200) {
        toast.success("Logged in Successfully");
        setUserData(res.data?.data);
        setShowOTP(true);
      } else {
        console.error("Unexpected status:", res.status);
      }
    } catch (error) {
      alert("user not found");
      console.error("handleAccountLogin Error:", error);
    }
  };

  const handleOTPVerification = async (otp: string) => {
    setIsOTPLoading(true);
    try {
      let OTPPayload = {
        method: "POST",
        url:
          global.config.ROOTURL.prod +
          `/user/${
            isLogin ? "verify-otp-for-signin" : "verify-otp-for-signup"
          }`,
        data: {
          email: userData?.email || email,
          otp: otp,
        },
      };

      await axios(OTPPayload)
        .then((res) => {
          if (res.data.msg === "wrong OTP") {
            toast.error(res.data.msg);
            return;
          }
          setStorageItem("uid", userData._id);
          setStorageItem("fullName", userData.fullName);
          setStorageItem("userName", userData.userName);
          setStorageItem("email", userData.email);
          setStorageItem("phoneNo", userData.phone);
          setStorageItem("token", res.data?.token);
          setStorageItem("user-data", JSON.stringify(userData));
          updateUserDetails(userData);

          toast.success("OTP verified successfully!");
          setShowOTP(false);
          setUserData(null);

          setFullName("");
          setUserName("");
          setEmail("");
          setPhone("");

          navigate(-1);
        })
        .catch((err) => {
          console.log("handleOTPVerification Error", err);
        });
    } catch (error) {
      console.error("OTP verification error:", error);
      toast.error("Invalid OTP. Please try again.");
    } finally {
      setIsOTPLoading(false);
    }
  };

  const handleBackToRegistration = () => {
    setShowOTP(false);
    setUserData(null);
    // Clear form when going back
    setFullName("");
    setUserName("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
      {/* <Navbar transparent={false} /> */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="flex flex-col items-center justify-center p-8 bg-white overflow-y-auto">
          {/* Left Section - Forms */}
          <AnimatePresence mode="wait">
            {!showOTP ? (
              <motion.div
                key="registration"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                layout
                className="w-full max-w-md space-y-8"
              >
                {/* Create Account Section */}
                {!isLogin && (
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      layout
                      className="text-center"
                    >
                      <h1 className="text-3xl font-bold text-gray-900">
                        Create Account
                      </h1>
                      <p className="mt-2 text-sm text-gray-600">
                        Join us and get started with your journey
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      layout
                      className="space-y-4"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        layout
                      >
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          placeholder="Enter your full name"
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        layout
                      >
                        <label
                          htmlFor="userName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          User Name
                        </label>
                        <input
                          type="text"
                          id="userName"
                          placeholder="Enter your userName"
                          onChange={(e) => setUserName(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        layout
                      >
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter your email"
                          onChange={(e) => handleEmailChange(e)}
                          className={`w-full p-3 border rounded-lg focus:ring-2 focus:${
                            emailError !== "" ? "ring-red-500" : "ring-blue-500"
                          } focus:border-transparent border-gray-300`}
                        />
                        {emailError && (
                          <div className="text-red-500 text-sm mt-1">
                            {emailError}
                          </div>
                        )}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        layout
                      >
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          id="phone"
                          placeholder="Enter your mobile Number"
                          onChange={(e) => handlePhoneNoChange(e)}
                          className={`w-full p-3 border rounded-lg focus:ring-2 focus:${
                            phoneNoError !== ""
                              ? "ring-red-500"
                              : "ring-blue-500"
                          } focus:border-transparent border-gray-300`}
                        />
                        {phoneNoError && (
                          <div className="text-red-500 text-sm mt-1">
                            {phoneNoError}
                          </div>
                        )}
                      </motion.div>

                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        layout
                        type="button"
                        onClick={handleUserRegistration}
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200"
                      >
                        Create Account
                      </motion.button>
                    </motion.div>
                  </div>
                )}

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
                {isLogin && (
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-center"
                    >
                      <h2 className="text-xl font-semibold text-gray-900">
                        Already have an account?
                      </h2>
                      <p className="text-sm text-gray-600">
                        Sign in to your existing account
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="space-y-4"
                    >
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        onChange={(e) => handleEmailChange(e)}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:${
                          emailError !== "" ? "ring-red-500" : "ring-blue-500"
                        } focus:border-transparent border-gray-300`}
                      />
                      {emailError && (
                        <div className="text-red-500 text-sm mt-1">
                          {emailError}
                        </div>
                      )}

                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        type="button"
                        onClick={handleAccountLogin}
                        className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition duration-200"
                      >
                        Sign In
                      </motion.button>
                    </motion.div>
                  </div>
                )}

                {!isLogin ? (
                  <p className="text-center text-sm text-gray-600">
                    Already Have an account?{" "}
                    <span
                      onClick={changeForm}
                      className="text-blue-600 cursor-pointer"
                    >
                      Sign in
                    </span>
                  </p>
                ) : (
                  <p className="text-center text-sm text-gray-600">
                    Register your account?{" "}
                    <span
                      onClick={changeForm}
                      className="text-blue-600 cursor-pointer"
                    >
                      Sign up
                    </span>
                  </p>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="otp"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <OTPSection
                  email={userData?.email || email}
                  phone={userData?.phone || phone}
                  onVerify={handleOTPVerification}
                  onBack={handleBackToRegistration}
                  isLoading={isOTPLoading}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Section - Image (Hidden on mobile) */}
        <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8 overflow-hidden">
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              layout
              className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center"
            >
              <svg
                className="w-32 h-32 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              layout
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-800">
                Welcome to Our Platform
              </h2>
              <p className="text-gray-600 max-w-md mx-auto">
                Join thousands of users who trust our platform for their needs.
                Create your account today and start your journey with us.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              layout
            >
              <Link
                to="/"
                className="inline-block px-2 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-none hover:bg-blue-700 transition duration-200"
              >
                Back To Home
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
