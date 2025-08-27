import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteStorageItem, getStorageItem } from "../../utils/sessionStorage";
import axios from "axios";
import { useUserStore } from "../../store/userStore";
import toast from "react-hot-toast";
import { PaymentCard } from "../../components/interfaces";

export default function Payment() {
  const [paymentCard, setPaymentCard] = useState<PaymentCard>();
  const user = useUserStore((state) => state.user);
  const accessToken = getStorageItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    async function getPayment() {
      if (!user?._id || !accessToken) {
        toast.error("Please Login First");
        setTimeout(() => {
          navigate("/create-account");
        }, 2000);
        return;
      }

      try {
        const paymentRes = await axios.get(
          global.config.ROOTURL.prod + "/payment/default",
          {
            headers: {
              Authorization: "Bearer " + accessToken,
              "Content-type": "application/json",
            },
          }
        );
        setPaymentCard(paymentRes.data.data);
      } catch (err: any) {
        if (err.response.status === 404) {
          toast.success("No default payment card found");
        } else if (err.response.status === 401) {
          toast.error("Please Login First");
          deleteStorageItem("user-data");
          deleteStorageItem("token");
          setTimeout(() => {
            navigate("/create-account");
          }, 2000);
        }
      }
    }
    getPayment();
  }, []);

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-10">
          {/* Payment Card Info */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="text-lg font-semibold mb-4">Payment Information</h4>

            {/* Payment Options */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="pay-method" defaultChecked />
                <span>Pay with Credit card</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="pay-method" />
                <span>Pay with PayPal</span>
              </label>
            </div> */}

            {/* Card Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Card Holder Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  value={paymentCard?.cardHolderName || ""}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  value={paymentCard?.cardNumber || ""}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Expire Date
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  value={paymentCard?.expiryDate || ""}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Card Type
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  value={paymentCard?.cardType || ""}
                  readOnly
                />
              </div>
            </div>

            {/* Agreement */}
            {/* <div className="mt-4 flex items-center gap-2">
              <input
                id="agree"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="agree" className="text-sm">
                By continuing, you agree to conditions
              </label>
            </div> */}

            {/* <div className="mt-6 text-center">
              <Link
                to="#"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full"
              >
                Confirm Booking
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
