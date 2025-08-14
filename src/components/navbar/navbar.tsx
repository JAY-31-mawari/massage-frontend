import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import loginImg from "../../assets/img/svg/login.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggle, setIsToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full sticky top-0 bg-white text-gray-900 shadow-md z-50">
      <div className="container mx-auto">
        <nav className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="max-h-20" />
            <h5 className="text-2xl font-bold mb-0">Last Minute Wellness</h5>
          </Link>

          <div className="hidden lg:block">
            <ul className="nav-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/my-account">My Account</Link>
              </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 mb-0">
            <li>
              <Link
                to="/create-account"
                className="flex items-center px-4 py-3 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition"
              >
                Sign Up / Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="flex items-center gap-2 px-4 py-3 rounded-md bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 transition"
              >
                <img src={loginImg} alt="Join Icon" className="h-5 w-5" />
                Join as a Provider
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-2xl"
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
              <li>
                <Link to="/sign-in">Sign Up / Sign In</Link>
              </li>
              <li>
                <Link
                  to="/submit-property"
                  className="flex items-center gap-2 px-2 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  <img src={loginImg} alt="Join Icon" className="h-5 w-5" />
                  Join as a Provider
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
