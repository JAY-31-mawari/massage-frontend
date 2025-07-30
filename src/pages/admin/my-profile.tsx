import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'
import { useUserStore } from '../../store/userStore';
import { Button } from '../../components/button';
import toast from 'react-hot-toast';
import { getStorageItem } from '../../utils/sessionStorage';
import axios from 'axios';

const MyProfile = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState<'account' | 'social'>('account');
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useUserStore();
  const [userData, setUserData] = useState(user);
  const [fullName, setFullName] = useState(user?.fullName || 'Calvin Carlo');
  const [userName, setUserName] = useState(user?.userName || 'Web Designer');
  const [email, setEmail] = useState(user?.email || 'Carlo77@gmail.com');
  const [phone, setPhone] = useState(user?.phone || '123 456 5847');
  const [address, setAddress] = useState('522, Arizona, Canada');
  const [city, setCity] = useState('Montquebe');
  const [state, setState] = useState('Canada');
  const accessToken = getStorageItem('token');

  const saveUserProfile = async () => {
    console.log('saveUserProfile');
    if(!user?._id){
      return toast.error('User ID is required'); 
    }
    console.log("asdsada,nn")
    const userUpdatedData = {
      method: 'PATCH',
      url: global.config.ROOTURL.prod + `/user/${user?._id}`, 
      data:{
        fullName: userData?.fullName,
        userName: userData?.userName,
        email: userData?.email,
        phone: userData?.phone
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    }

    await axios(userUpdatedData).then((res) => {
      setIsEditing(false)
    }).catch((err) => {
      console.log(err);
    })
  }

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
                      { key:"fullName", label: 'Your Name', type: 'text', value: userData?.fullName || 'Calvin Carlo' },
                      { key:"userName", label: 'User Name', type: 'text', value: userData?.userName || 'Web Designer' },
                      { key:"email", label: 'Email', type: 'email', value: userData?.email || 'Carlo77@gmail.com' },
                      { key:"phone", label: 'Phone', type: 'text', value: userData?.phone || '123 456 5847' },
                      { key:"address", label: 'Address', type: 'text', value: '522, Arizona, Canada' },
                      { key:"city", label: 'City', type: 'text', value: 'Montquebe' },
                      { key:"state", label: 'State', type: 'text', value: 'Canada' },
                      { key:"zip", label: 'Zip', type: 'text', value: '160052' },
                    ].map((field, idx) => (
                      <div key={idx}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          defaultValue={field.value}
                          disabled={!isEditing}
                          onChange={(e) => {
                            setUserData({...userData, [field.key]: e.target.value})
                          }}  
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

              {/* {activeSection === 'social' && (
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
              )} */}
              {isEditing ? <div>
                <Button color="white" name="Cancel" onClick={() => setIsEditing(false)} />
                <Button color="blue" name="Save Changes" onClick={() => {
                  saveUserProfile()
                }} />
              </div> : 
              <div>   
                <Button color="blue" name="Edit" onClick={() => setIsEditing(true)} />
              </div>}
            </AnimatePresence>
          </div>
        </main>

      </div>
    </>
  );
};

export default MyProfile;
