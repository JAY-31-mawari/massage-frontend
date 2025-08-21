import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import loginImg from "../../assets/img/svg/login.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useUserStore } from "../../store/userStore";

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggle, setIsToggle] = useState(false);

  const user = useUserStore((state) => state.user);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full sticky top-0 bg-white text-gray-900 shadow-md z-50">
      <div className="w-auto mx-5">
        <nav className="h-20 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="max-h-20" />
              <h5 className="text-2xl font-bold mb-0">Last Minute Wellness</h5>
            </Link>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-8 font-medium">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/my-account">MY ACCOUNT</Link>
              </li>
              <li>
                <Link to="/serviceList">BOOK AN APPOINTMENT</Link>
              </li>
              {user && (
                <li>
                  <Link to="/register">JOIN AS A PROVIDER</Link>
                </li>
              )}
            </ul>
          </div>

          {/* Right: Profile or Auth Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            {user ? (
              <Link to="/my-account" className="flex items-center gap-2">
                <img
                  src={`https://ui-avatars.com/api/?name=${
                    user.fullName || user.userName || "User"
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
                <Link
                  to="/register"
                  className="flex items-center gap-2 px-4 py-3 rounded-md bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 transition"
                >
                  <img src={loginImg} alt="Join Icon" className="h-5 w-5" />
                  Join as a Provider
                </Link>
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
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/my-account">My Account</Link>
              </li>

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
