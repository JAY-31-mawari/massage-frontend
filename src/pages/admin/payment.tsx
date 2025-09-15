import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteStorageItem, getStorageItem } from "../../utils/sessionStorage";
import axios from "axios";
import { useUserStore } from "../../store/userStore";
import toast from "react-hot-toast";
import { PaymentCard } from "../../components/interfaces";
import Loading from "../../components/loader";

export default function Payment() {
  const [paymentCard, setPaymentCard] = useState<PaymentCard>();
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const user = useUserStore((state) => state.user);
  const accessToken = getStorageItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    async function getPayment() {
      if (!user?.id || !accessToken) {
        toast.error("Please Login First");
        setTimeout(() => {
          navigate("/create-account");
        }, 2000);
        return;
      }
      setIsPaymentLoading(true);
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
      } finally {
        setIsPaymentLoading(false);
      }
    }
    getPayment();
  }, []);

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-10">
          {/* Payment Card Info */}
          {isPaymentLoading ? (
            <Loading />
          ) : (
            <div className="bg-white rounded-2xl shadow p-6">
              <h4 className="text-lg font-semibold mb-4">
                Payment Information
              </h4>

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
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
