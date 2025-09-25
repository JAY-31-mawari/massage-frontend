import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // if using react-router

const PaymentFailed = () => {
  const navigate = useNavigate(); // for redirect
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (seconds === 0) {
      navigate("/"); // redirect to home
    }

    const timer = setTimeout(() => setSeconds(prev => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds, navigate]);

  return (
    <div className="flex flex-col items-center min-h-screen px-4">
      <div className="bg-white p-8 max-w-md w-full text-center animate-fadeIn mt-5 lg:mt-10">
        <div className="text-red-600 text-6xl mb-4">✗</div>
        <h1 className="text-2xl font-bold mb-2">Payment Failed</h1>
        <p className="mb-4 text-lg">
          Your payment could not be processed at this time.
          <br />
          Please check your payment details and try again.
        </p>
        <p className="mb-6 text-gray-700">
          You will be redirected to the homepage in{" "}
          <span className="font-semibold">{seconds}</span> seconds.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default PaymentFailed;
