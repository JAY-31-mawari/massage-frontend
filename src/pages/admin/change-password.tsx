import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ChangePassword() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="form-submit">
              <h4 className="text-xl font-semibold text-gray-800 mb-6">
                Change Your Password
              </h4>
              <div className="space-y-4">
                {/* Old Password */}
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Old Password
                  </label>
                  <input
                    type="password"
                    className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </div>

                {/* New + Confirm Password (Responsive 2-col) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </div>
                </div>

                {/* Save Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
