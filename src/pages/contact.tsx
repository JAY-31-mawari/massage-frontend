import { useState } from "react";
import FooterTop from "../components/footer-top";
import Footer from "../components/footer";
import axios from "axios";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNoError, setphoneNoError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
    setPhoneNo(value);

    if (value === "") {
      setphoneNoError("Phone number is required");
    } else if (!validatePhone(value)) {
      setphoneNoError("Please enter a valid 10-digit phone number");
    } else {
      setphoneNoError("");
    }
  };

  const sendMessage = async () => {
    setIsLoading(true);

    try {
      const contactPayload = {
        method: "POST",
        url: global.config.ROOTURL.prod + `/contact/`,
        data: {
          fullName,
          email,
          message,
          phoneNo,
        },
      };

      const res = await axios(contactPayload);

      if (res.data.success) {
        toast.success(res.data.msg);
        setFullName("");
        setEmail("");
        setMessage("");
        setPhoneNo("");
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      toast.error("Error in sending Information");
      console.error("Error in sending Information", error);
    } finally {
      setTimeout(()=>{
        setIsLoading(false)
      }, 1500)
    }
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
        <div className="text-center">
          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#B056F2] to-[#D389F4] bg-clip-text text-transparent">
              Contact Us
            </span>
          </motion.h1>
          <motion.p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a question or feedback? We'd love to hear from you! Drop us a
            message and join the cricket community.
          </motion.p>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section - Info */}
          <div className="space-y-10">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Let’s Connect <br />
              <span className="text-indigo-600">with Our Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-md">
              Reach out to us for any questions, collaborations, or support.
              We’re here to help and typically respond within 24 hours.
            </p>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-300 text-white text-xl shadow-md">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Visit Us</h4>
                  <p className="text-gray-600">
                    2512, New Market, Eliza Road <br />
                    Sincher 80 CA, Canada
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-300 text-white text-xl shadow-md">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email Us</h4>
                  <p className="text-gray-600">support@rikada.com</p>
                  <p className="text-gray-600">rikada@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-pink-300 text-white text-xl shadow-md">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Call Us</h4>
                  <p className="text-gray-600">(41) 123 521 458</p>
                  <p className="text-gray-600">+91 235 548 7548</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8 lg:p-10 border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send a Message
            </h3>

            <form className="space-y-6">
              {/* Name + Email */}
              <div>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your fullname"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number (optional)
                    </label>
                    <input
                      type="text"
                      value={phoneNo}
                      onChange={(e) => handlePhoneNoChange(e)}
                      placeholder="Enter phone number"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                    />
                    {phoneNoError && (
                      <div className="text-red-500 text-sm mt-1">
                        {phoneNoError}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => handleEmailChange(e)}
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                  />
                  {emailError && (
                    <div className="text-red-500 text-sm mt-1">
                      {emailError}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your thoughts, questions or valuable feedback..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                ></textarea>
              </div>

              <button
                type="button"
                onClick={sendMessage}
                disabled={isLoading}
                className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg px-6 py-3 transition-all duration-200 shadow-md hover:shadow-lg flex justify-center items-center"
              >
                {isLoading ? (
                  <span className="animate-spin rounded-full h-6 w-6 border-3 border-t-blue-500"></span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <FooterTop bg="theme-bg" />
      <Footer />
    </>
  );
}
