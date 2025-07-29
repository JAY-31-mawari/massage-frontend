import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'

const MyProfile = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState<'account' | 'social'>('account');

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg p-6">
            <AnimatePresence mode="wait">
              {activeSection === 'account' && (
                <motion.div
                  key="account"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="form-submit mb-4"
                >
                  <h2 className="text-xl font-semibold mb-6">My Account</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: 'Your Name', type: 'text', value: 'Calvin Carlo' },
                      { label: 'Email', type: 'email', value: 'Carlo77@gmail.com' },
                      { label: 'Your Title', type: 'text', value: 'Web Designer' },
                      { label: 'Phone', type: 'text', value: '123 456 5847' },
                      { label: 'Address', type: 'text', value: '522, Arizona, Canada' },
                      { label: 'City', type: 'text', value: 'Montquebe' },
                      { label: 'State', type: 'text', value: 'Canada' },
                      { label: 'Zip', type: 'text', value: '160052' },
                    ].map((field, idx) => (
                      <div key={idx}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          defaultValue={field.value}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    ))}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">About</label>
                      <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                      >
                        Maecenas quis consequat libero, a feugiat eros.
                      </textarea>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSection === 'social' && (
                <motion.div
                  key="social"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="form-submit"
                >
                  <h2 className="text-xl font-semibold mb-6">Social Accounts</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: 'Facebook', value: 'https://facebook.com/' },
                      { label: 'Twitter', value: 'https://twitter.com/' },
                      { label: 'Google Plus', value: 'https://googleplus.com' },
                      { label: 'LinkedIn', value: 'https://linkedin.com/' },
                    ].map((social, idx) => (
                      <div key={idx}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {social.label}
                        </label>
                        <input
                          type="text"
                          defaultValue={social.value}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    ))}
                    <div className="col-span-2">
                      <button className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

      </div>
    </>
  );
};

export default MyProfile;
