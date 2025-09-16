import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import loginImg from "../../assets/img/svg/login.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useUserStore } from "../../store/userStore";
import {
  deleteStorageItem,
  getStorageItem,
  setStorageItem,
} from "../../utils/sessionStorage";

export default function Navbar() {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggle, setIsToggle] = useState(false);
  const [showSignUpSignIn, setShowSignUpSignIn] = useState(true);
  const todayLoggedInTime = new Date().toISOString();
  const lastLoggedInTime = getStorageItem("lastLoggedIn");

  const token = getStorageItem("token");

  const user = useUserStore((state) => state.user);

  const navbarItems = [
    {
      to: "/serviceList",
      name: "Book an Appointment",
    },
    {
      to: "/about-us",
      name: "About",
    },
    {
      to: "/contact",
      name: "Contact",
    },
    {
      to: "/faq",
      name: "FAQ",
    },
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!lastLoggedInTime || !token) {
      setShowSignUpSignIn(true);
      return;
    }
    const lastLoginTime = new Date(lastLoggedInTime);
    const now = new Date();

    const diffInMs = now.getTime() - lastLoginTime.getTime();
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
    if (diffInDays > global.config.DAYS) {
      deleteStorageItem("token");
    } else {
      setStorageItem("lastLoggedIn", todayLoggedInTime);
    }
    setShowSignUpSignIn(false);
  }, [lastLoggedInTime, token]);

  return (
    <div className="w-full sticky top-0 bg-white text-gray-900 shadow-md z-50">
      <div className="w-auto mx-5">
        <nav className="h-20 flex items-center justify-between">
          {/* Left: Logo + Nav Links */}
          <div className="flex items-center gap-10 min-w-0">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 min-w-0">
              <img
                src={logo}
                alt="Logo"
                className="max-h-16 w-auto flex-shrink-0"
              />
              <h6 className="text-xl sm:text-2xl md:text-3xl font-bold truncate">
                Last Minute Wellness
              </h6>
            </Link>

            {/* Nav Links (Desktop) */}
            <div className="hidden lg:flex">
              <ul className="flex items-center gap-8 font-medium text-medium lg:text-lg">
                {navbarItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="p-2 hover:bg-white rounded-md transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Profile or Auth Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            {!showSignUpSignIn ? (
              <div className="rounded-full border border-gray-300">
                <Link
                  to="/my-account"
                  className="flex items-center gap-1 p-1 rounded-full transition-colors duration-300 hover:bg-gray-100"
                >
                  <img
                    src={`https://ui-avatars.com/api/?name=${
                      user?.fullName || "User"
                    }&background=random`}
                    alt="Profile"
                    className="h-9 w-9 rounded-full border border-gray-300"
                  />
                  <p className="font-semibold text-gray-700">Profile</p>
                </Link>
              </div>
            ) : (
              <>
                <Link
                  to="/create-account"
                  className="flex items-center px-4 py-3 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition"
                >
                  Sign Up / Sign In
                </Link>
                {showSignUpSignIn && (
                  <Link
                    to="/register"
                    className="flex items-center gap-2 px-4 py-3 rounded-md bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 transition"
                  >
                    <img src={loginImg} alt="Join Icon" className="h-5 w-5" />
                    Join as a Provider
                  </Link>
                )}
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-2xl ml-4"
            onClick={() => setIsToggle(!toggle)}
          >
            ☰
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-md border-t border-gray-200 z-40"
          >
            <ul className="flex flex-col space-y-4 py-6 px-6 text-gray-800 text-base font-medium">
              {navbarItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block px-3 py-2 rounded-md hover:bg-gray-100 transition"
                    onClick={() => setIsToggle(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              {user ? (
                <li>
                  <Link
                    to="/my-account"
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition"
                    onClick={() => setIsToggle(false)}
                  >
                    <img
                      src={`https://ui-avatars.com/api/?name=${
                        user?.fullName || "User"
                      }&background=random`}
                      alt="Profile"
                      className="h-10 w-10 rounded-full border shadow-sm"
                    />
                    <h6 className="font-medium text-gray-800">
                      {user?.fullName || "Profile"}
                    </h6>
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      to="/sign-in"
                      className="block px-3 py-2 rounded-md hover:bg-gray-100 transition"
                      onClick={() => setIsToggle(false)}
                    >
                      Sign Up / Sign In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                      onClick={() => setIsToggle(false)}
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
