"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { setStorageItem } from "../../utils/sessionStorage";

// ✅ Load Stripe
const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
);

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  
  const makePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const stripe = await loadStripe(
      process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
    );

    const paymentBody = {
      method: "POST",
      url: process.env.REACT_APP_PROD + "/stripe/create-checkout-session",
      headers: {
        "Content-type": "application/json",
      },
      data: {
        checkout_price: 3195,
      },
    };

    try {
      const paymentResponse = await axios(paymentBody);

      setStorageItem("paySessionId", paymentResponse.data.id)

      await stripe?.redirectToCheckout({
        sessionId: paymentResponse.data.id,
      });
    } catch (err) {
      console.log("Payment failed", err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col">
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-b from-white to-blue-100">
        {/* <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Checkout Securely
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl">
          Make payments with confidence. Your transactions are encrypted and
          safe.
        </p> */}

          <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 transform transition-all duration-300 scale-100 hover:scale-[1.01] flex flex-col items-center text-center">
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-8">
              Your information is fully encrypted and protected. We use Stripe’s
              industry-leading security to ensure your data is safe and your
              transaction is seamless.
            </p>

            {/* Payment details - Fixed amount from your provided code */}
            <div className="w-full mb-8">
              <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  Total
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  $31.95<span className="text-base mx-1">CAD + 5% tax</span>
                </span>
              </div>
            </div>

            {/* Payment Button */}
            <form onSubmit={makePayment} className="w-full">
              <button
                type="submit"
                disabled={loading || !stripe}
                className={`
              w-full py-4 rounded-xl text-lg font-bold text-white transition-all duration-300
              ${
                loading || !stripe
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-xl"
              }
            `}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  "Pay Now"
                )}
              </button>
            </form>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 my-3">After your payment is processed, you’ll receive an email with a secure link to complete your background check.</p>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-2">Your signup will continue once this step is completed.</p>
          </div>
      </section>

      {/* Features / Benefits */}
      <section className="py-20 bg-white px-6 md:px-20 grid md:grid-cols-3 gap-12 text-center">
        <div className="p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
          <div className="text-blue-600 text-5xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
          <p className="text-gray-600">
            Transactions are processed in seconds without hassle.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
          <div className="text-blue-600 text-5xl mb-4">🔒</div>
          <h3 className="text-xl font-semibold mb-2">Highly Secure</h3>
          <p className="text-gray-600">
            We use Stripe’s industry-leading encryption to protect you.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
          <div className="text-blue-600 text-5xl mb-4">🌍</div>
          <h3 className="text-xl font-semibold mb-2">Global Trust</h3>
          <p className="text-gray-600">
            Trusted by businesses and customers worldwide.
          </p>
        </div>
      </section>
    </div>
  );
};

const StripePaymentPage: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripePaymentPage;
