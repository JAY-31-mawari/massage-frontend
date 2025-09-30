import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStorageItem } from "../utils/sessionStorage";
import axios from "axios";
import logo from "../assets/img/logo/buddha.png"

export default function Success() {
  const navigate = useNavigate();

  const backgroundLogoStyle: React.CSSProperties = {
    backgroundImage: `url(${logo})`, 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '24%',
  };

  useEffect(() => {
    const fetchSessionDetails = async () => {
      const session_id = getStorageItem("paySessionId");
      const business_email = getStorageItem("business_email");
      const business_id = getStorageItem("business_id");

      const saveStripeSessionBody = {
        method: "POST",
        url: global.config.ROOTURL.prod + "/stripe/session-details",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          session_id,
          pay_status: "Success",
          business_email,
          business_id,
        },
      };

      try {
        const sessionResponse = await axios(saveStripeSessionBody);
      } catch (err) {
        console.error("Payment failed", err);
      }
    };

    fetchSessionDetails();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen  text-gray-800 px-4">
      <div 
        className="absolute !top-[-80px] left-0 right-0 bottom-0 z-0 opacity-5 pointer-events-none" 
        style={backgroundLogoStyle} 
      ></div>
      <div className="bg-white lg:p-8 lg:max-w-3xl w-full text-center animate-fadeIn mt-5 lg:mt-20">
        <h1 className="text-2xl font-bold mb-2">
          Payment Successful{" "}
          <span className="text-green-600 text-4xl mx-1">✓</span>
        </h1>
        <p className="mb-4 text-lg">
          Your background check fee has been successfully processed.
        </p>
        <p className="mb-4">
          You will soon receive an email with a secure link to complete your
          background check. Please check your inbox (and spam folder just in
          case)
        </p>
        <p className="mb-2">If you have any questions, our support team is here to help<span onClick={()=>navigate("/contact")} className=" ml-2 border-b-2 cursor-pointer border-blue-600 text-blue-600 text-sm">Click here</span></p>
      </div>
    </div>
  );
}
