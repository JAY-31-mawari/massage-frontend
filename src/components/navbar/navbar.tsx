import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import loginImg from "../../assets/img/svg/login.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useUserStore } from "../../store/userStore";
import { deleteStorageItem, getStorageItem, setStorageItem } from "../../utils/sessionStorage";

export default function Navbar() {
  const location = useLocation()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggle, setIsToggle] = useState(false);
  const [showSignUpSignIn, setShowSignUpSignIn] = useState(true);
  const todayLoggedInTime = new Date().toISOString()
  const lastLoggedInTime = getStorageItem('lastLoggedIn')

  const token = getStorageItem('token')

  const user = useUserStore((state) => state.user);
  
  const navbarItems = [
    {
      to:"/",
      name:"Home"
    },
    {
      to:"/serviceList",
      name:"Book an Appointment"
    },
    {
      to:"/contact",
      name:'Contact'
    }
  ]

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(()=>{
    if(!lastLoggedInTime || !token){
      setShowSignUpSignIn(true)
      return
    }
    const lastLoginTime = new Date(lastLoggedInTime)
    const now = new Date()

    const diffInMs = now.getTime() - lastLoginTime.getTime()
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24))
    if(diffInDays > global.config.DAYS){
      deleteStorageItem("token")
    }else{
      setStorageItem('lastLoggedIn', todayLoggedInTime)
    }
    setShowSignUpSignIn(false)
  },[lastLoggedInTime, token])

  return (
    <div className="w-full sticky top-0 bg-white text-gray-900 shadow-md z-50">
      <div className="w-auto mx-5">
        <nav className="h-20 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="max-h-20" />
              <h6 className="text-2xl font-bold mb-0">Last Minute Wellness</h6>
            </Link>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-8 font-small">
              {navbarItems.map((item)=>(
                <li>
                  <Link to={item.to} className="p-2 hover:[background-color:#F9F9F9] rounded:6xl">{item.name}</Link>
                </li>
              ))}
              {showSignUpSignIn && location.pathname === '/' && (
                <li>
                  <Link to="/about-service" className="p-2 hover:bg-cyan-600">JOIN AS A PROVIDER</Link>
                </li>
              )}
            </ul>
          </div>

          {/* Right: Profile or Auth Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            {!showSignUpSignIn ? (
              <Link to="/my-account" className="flex items-center gap-2">
                <img
                  src={`https://ui-avatars.com/api/?name=${
                    user?.fullName || "User"
                  }&background=random`}
                  alt="Profile"
                  className="h-10 w-10 rounded-full border shadow-sm"
                />
              </Link>
            ) : (
              <>
                <Link
                  to="/create-account"
                  className="flex items-center px-4 py-3 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition"
                >
                  Sign Up / Sign In
                </Link>
                {/* <Link
                  to="/register"
                  className="flex items-center gap-2 px-4 py-3 rounded-md bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 transition"
                >
                  <img src={loginImg} alt="Join Icon" className="h-5 w-5" />
                  Join as a Provider
                </Link> */}
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsToggle(!toggle)}
          >
            ☰
          </button>
        </nav>
      </div>

      {/* Mobile Menu (unchanged) */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center h-full w-full p-6 text-center"
          >
            {/* Nav Links */}
            <ul className="flex flex-col space-y-4 pl-0 text-lg font-medium">
              {navbarItems.map((item)=>(
                <li>
                  <Link to={item.to}>{item.name}</Link>
                </li>
              ))}
              {user ? (
                <li>
                  <Link to="/my-account" className="flex items-center gap-2">
                    <img
                      src={`https://ui-avatars.com/api/?name=${
                        user.fullName || user.userName || "User"
                      }&background=random`}
                      alt="Profile"
                      className="h-10 w-10 rounded-full border shadow-sm"
                    />
                    <span>{user.fullName || "Profile"}</span>
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/sign-in">Sign Up / Sign In</Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="flex items-center gap-2 px-2 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      <img src={loginImg} alt="Join Icon" className="h-5 w-5" />
                      Join as a Provider
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
