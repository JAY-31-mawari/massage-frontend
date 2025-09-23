"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

// ✅ Load Stripe
const stripePromise = loadStripe(
  global.config.STRIPE_PUBLISHABLE_KEY as string
);

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  // Customer details state
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const makePayment = async (e:React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const stripe = await loadStripe(global.config.STRIPE_PUBLISHABLE_KEY as string)

    const paymentBody = {
        method:"POST",
        url: global.config.ROOTURL.prod + '/create-checkout-session',
        headers:{
            "Content-type":"application/json"
        },
        data:{
            checkout_price:3500
        }
    }

    try{const paymentResponse = await axios(paymentBody)

    const result = stripe?.redirectToCheckout({
        sessionId: paymentResponse.data.id
    })
    }catch(err){
        console.log("Payment failed",err)
    }
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    try {
      // ✅ Call backend to create PaymentIntent ($35 fixed)
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 3500, // Stripe works in cents (35.00 USD = 3500)
          currency: "usd",
        }),
      });

      const { clientSecret } = await res.json();

      // ✅ Confirm Card Payment with Stripe
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (result.error) {
        setErrorMessage(result.error.message ?? "Payment failed");
      } else if (result.paymentIntent?.status === "succeeded") {
        alert("✅ Payment Successful! $35 charged.");
      }
    } catch (err: any) {
      setErrorMessage(err.message);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={makePayment}
      className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Pay $35</h2>

      {/* Card Element */}
      {/* <label className="block mb-2 text-sm font-medium">Card Details</label> */}
      {/* <div className="p-3 border rounded mb-4 bg-gray-50">
        <CardElement options={{ hidePostalCode: true }} />
      </div>

      {errorMessage && (
        <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
      )} */}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Processing..." : "Pay $35"}
      </button>
    </form>
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
