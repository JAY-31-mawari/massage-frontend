import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (seconds === 0) {
      navigate("/"); // redirect to home
    }

    const timer = setTimeout(() => setSeconds(prev => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds, navigate]);

  return (
    <div className="flex flex-col items-center min-h-screen  text-gray-800 px-4">
      <div className="bg-white p-8 max-w-md w-full text-center animate-fadeIn mt-5 lg:mt-10">
        <div className="text-green-600 text-6xl mb-4">✓</div>
        <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
        <p className="mb-4 text-lg">
          Your payment has been processed successfully. 
          <br />
          A confirmation email has been sent to your inbox.
        </p>
        <p className="mb-6 text-gray-600">
          You will be redirected to the homepage in <span className="font-semibold">{seconds}</span> seconds.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}
