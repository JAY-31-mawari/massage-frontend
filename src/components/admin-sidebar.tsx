import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { deleteStorageItem } from "../utils/sessionStorage";
import { AnimatePresence, motion } from "framer-motion";

export default function AdminSidebar({
  selectedPage,
  setSelectedPage,
}: {
  selectedPage: string;
  setSelectedPage: (val: string) => void;
}) {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const clearUser = useUserStore((state) => state.clearUser);

  const handleLogout = () => {
    clearUser();
    deleteStorageItem("user-data");
    deleteStorageItem("token");
    deleteStorageItem("user_id");
    deleteStorageItem("uid");
    deleteStorageItem("userName");
    deleteStorageItem("user_email");
    navigate("/create-account");
  };

  return (
    <div className="sidebar-widgets h-full bg-white shadow-lg px-6 py-8">
      <ul className="space-y-1 pl-0">
        {[
          { key: "my-profile", label: "Profile" },
          { key: "my-bookings", label: "Bookings" },
          { key: "payment", label: "Payment" },
          { key: "change-password", label: "Change Password" },
        ].map((item) => (
          <li
            key={item.key}
            onClick={() => setSelectedPage(item.key)}
            className={`cursor-pointer px-4 py-3 rounded-md font-medium transition-all duration-200 text-sm tracking-wide ${
              selectedPage === item.key
                ? "bg-blue-600 text-white shadow-sm"
                : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
            }`}
          >
            {item.label}
          </li>
        ))}

        {/* Book Appointment */}
        <li
          className="cursor-pointer px-4 py-3 rounded-md font-medium transition-all duration-200 text-sm tracking-wide text-gray-700 hover:bg-gray-100 hover:text-blue-600"
          onClick={() => navigate("/")}
        >
          Book an Appointment
        </li>

        {/* Logout */}
        <li
          className="cursor-pointer px-4 py-3 rounded-md font-medium transition-all duration-200 text-sm tracking-wide text-gray-700 hover:bg-gray-100 hover:text-blue-600"
          onClick={() => setShowLogoutModal(true)}
        >
          Logout
        </li>
      </ul>

      {/* Logout Confirmation Modal with Framer Motion */}
      <AnimatePresence>
        {showLogoutModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background overlay */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLogoutModal(false)}
            />

            {/* Modal box */}
            <motion.div
              className="relative bg-white w-full max-w-sm rounded-2xl shadow-lg p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h2 className="text-lg font-semibold text-gray-800">
                Confirm Logout
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Are you sure you want to log out?
              </p>

              <div className="mt-6 flex gap-3 justify-center">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                >
                  Logout
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
