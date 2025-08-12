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
    const [toggle, setIsToggle] = useState(true)
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('')
    const navigate = useNavigate()
    const updateUserDetails = useUserStore((state) => state.fullUpdate)

    let [scroll, setScroll] = useState<boolean>(false)

  const location = useLocation();
  const current = location.pathname;

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
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

  const checkAccountExist = async () => {
    try {
      const res = await axios.post(global.config.ROOTURL.prod + "/user/exist", {
        email,
      });
      console.log("hello:world", res);
      if (res.status === 201 || res.status === 200) {
        console.log("Data submitted successfully:", res.data);
        setLogin(!login);
        setStorageItem("uid", res?.data?.data?._id);
        setStorageItem(
          "fullName",
          res?.data?.data?.businessName
            ? res.data.data.businessName
            : res.data.data?.fullName
        );
        setStorageItem(
          "userName",
          res?.data?.data?.businessName
            ? res.data.data.businessName
            : res.data.data?.userName
        );
        setStorageItem(
          "email",
          res?.data?.data?.business_email
            ? res.data.data?.business_email
            : res.data.data?.email
        );
        setStorageItem(
          "phoneNo",
          res?.data?.data?.business_phone
            ? res.data.data.business_phone
            : res.data.data?.phone
        );
        setStorageItem("token", res.data.token);
        setStorageItem("user-data", JSON.stringify(res.data.data));
        updateUserDetails(res.data.data);
        toast.success("user account exists");
        setEmail("");
      } else {
        console.error("Unexpected status:", res.status);
      }
    } catch (error) {
      alert("user not found");
      console.error("Error submitting data:", error);
    }
  };

  const handleMouseEnter = (menu: string, submenu?: string) => {
    setActiveMenu((prev) => ({
      ...prev,
      [menu]: {
        ...prev[menu],
        [submenu || "main"]: true, // Open main menu or submenu
      },
    }));
  };

  // Handle mouse leave for any menu or submenu
  const handleMouseLeave = (menu: string, submenu?: string) => {
    setActiveMenu((prev) => ({
      ...prev,
      [menu]: {
        ...prev[menu],
        [submenu || "main"]: false, // Close main menu or submenu
      },
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const handlerScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handlerScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handlerScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <>
      <div
        className={`w-full ${scroll ? "fixed top-0 shadow-md bg-white" : ""} ${
          transparent ? "bg-transparent text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="container mx-auto">
          <nav className="h-20 flex items-center justify-between">
            {/* Left: Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="max-h-20" />
              <h5 className="text-2xl font-bold mb-0">Last Minute Wellness</h5>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-6 mb-0">
              <li>
                <Link
                  to="/create-account"
                  className="flex items-center px-4 py-3 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                >
                  <span className="font-medium">Sign Up / Sign In</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/submit-property"
                  className="flex items-center gap-2 px-4 py-3 rounded-md bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-200"
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
        {toggle && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
            <div className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col gap-4">
              <button
                className="self-end text-2xl"
                onClick={() => setIsToggle(false)}
              >
                ✕
              </button>
              <Link
                to="/create-account"
                className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition"
                onClick={() => setIsToggle(false)}
              >
                Sign Up / Sign In
              </Link>
              <Link
                to="/submit-property"
                className="flex items-center gap-2 px-5 py-2 rounded-md bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 transition"
                onClick={() => setIsToggle(false)}
              >
                Join as a Provider
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
