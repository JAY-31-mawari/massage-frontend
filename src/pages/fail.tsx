import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import logo from "../assets/img/logo/buddha.png"
import { getStorageItem } from "../utils/sessionStorage";

const PaymentFailed = () => {
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
        url: process.env.REACT_APP_PROD + "/stripe/session-details",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          session_id,
          pay_status: "Fail",
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
    <div className="flex flex-col items-center min-h-screen px-4">
      <div 
        className="absolute !top-[-80px] left-0 right-0 bottom-0 z-0 opacity-5 pointer-events-none"
        style={backgroundLogoStyle} 
      ></div>
      <div className="bg-white lg:p-8 lg:max-w-3xl w-full text-center animate-fadeIn mt-5 lg:mt-10">
        <h1 className="text-2xl font-bold mb-2">
          <span className="text-5xl mx-1">⚠️</span>Payment Could Not Be
          Processed
        </h1>
        <p className="mb-4 text-lg mt-3">
          We were unable to process your $35 payment for the required background
          check. Don’t worry — this doesn’t affect your application. Please try
          again below.
        </p>
        <button
          onClick={() => navigate("/payment")}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition"
        >
          Retry Payment
        </button>
        <p className="text-base mt-4">If the issue continues, please contact your card issuer</p>
        <p className="mb-2">If you have any questions, our support team is here to help<span onClick={()=>navigate("/contact")} className=" ml-2 border-b-2 cursor-pointer border-blue-600 text-blue-600 text-sm">Click here</span></p>

      </div>
    </div>
  );
};

export default PaymentFailed;
