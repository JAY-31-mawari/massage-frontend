import { useState } from "react";
import FooterTop from "../components/footer-top";
import Footer from "../components/footer";
import axios from "axios";
import toast from "react-hot-toast";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNoError, setphoneNoError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    if(isLoading){
      return
    }
    if(!fullName || !email || !message){
      toast.error("Please fill required fields")
      return
    }
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
        setFullName("");
        setEmail("");
        setMessage("");
        setPhoneNo("");
        setTimeout(()=>{
          toast.success("Message Sent")
        },1500)
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
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          {/* Left Section - Info */}
          <div className="text-center my-auto lg:text-left lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Ready to book your experience, or want to share your thoughts with
              us? Drop us a message — we value your feedback just as much as
              your bookings.
            </p>
          </div>

          {/* Right Section - Form */}
          <div className="w-full lg:w-1/2 bg-white shadow-xl rounded-2xl py-4 px-6 sm:p-8 lg:p-10 border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
              Send us your Thoughts or Feedback
            </h3>

            <form className="space-y-6">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
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
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                  />
                  {phoneNoError && (
                    <div className="text-red-500 text-xs sm:text-sm mt-1">
                      {phoneNoError}
                    </div>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => handleEmailChange(e)}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                />
                {emailError && (
                  <div className="text-red-500 text-xs sm:text-sm mt-1">
                    {emailError}
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your thoughts, questions or valuable feedback..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                ></textarea>
              </div>

              <button
                type="button"
                onClick={sendMessage}
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg px-6 py-3 text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg flex justify-center items-center disabled:opacity-50"
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
