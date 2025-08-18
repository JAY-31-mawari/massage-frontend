import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useUserStore } from "../../store/userStore";
import { Button } from "../../components/button";
import toast from "react-hot-toast";
import { deleteStorageItem, getStorageItem, setStorageItem } from "../../utils/sessionStorage";
import axios from "axios";

const MyProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useUserStore();
  const [userData, setUserData] = useState(user);
  const accessToken = getStorageItem("token");
  const updateUserDetails = useUserStore((state) => state.fullUpdate);

  const updateUserProfile = async () => {
    if (!user?._id || !accessToken) {
      toast.error("Please Login First");
      setTimeout(() => {
        navigate("/create-account");
      }, 2000);
      return;
    }
    const userUpdatedData = {
      method: "PATCH",
      url: global.config.ROOTURL.prod + `/user/${user?._id}`,
      data: {
        fullName: userData?.fullName,
        userName: userData?.userName,
        email: userData?.email,
        phone: userData?.phone,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    await axios(userUpdatedData)
      .then((res) => {
        setIsEditing(false);
        toast.success("Details Updated")
        setStorageItem("fullName", res.data.data?.fullName);
        setStorageItem("userName", res.data.data?.userName);
        setStorageItem("email", res.data.data?.email);
        setStorageItem("phoneNo", res.data.data?.phone);
        setStorageItem("user-data", JSON.stringify(res.data.data));
        updateUserDetails(res.data?.data);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            toast.error("Please Login First");
            deleteStorageItem("user-data")
            deleteStorageItem("token")
            setTimeout(() => {
              navigate("/create-account");
            }, 2000);
          }
        }
      });
  };

  useEffect(()=>{
    if(!user?._id || !accessToken){
      toast.success('Please Login First')
    }
  },[user])

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg p-6">
            <AnimatePresence mode="wait">
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
                      {
                        key: "fullName",
                        label: "Your Name",
                        type: "text",
                        value: userData?.fullName || "Calvin Carlo",
                      },
                      {
                        key: "userName",
                        label: "User Name",
                        type: "text",
                        value: userData?.userName || "Web Designer",
                      },
                      {
                        key: "email",
                        label: "Email",
                        type: "email",
                        value: userData?.email || "Carlo77@gmail.com",
                      },
                      {
                        key: "phone",
                        label: "Phone",
                        type: "text",
                        value: userData?.phone || "123 456 5847",
                      },
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
                            setUserData({
                              ...userData,
                              [field.key]: e.target.value,
                            });
                          }}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>

              {isEditing ? (
                <div>
                  <Button
                    color="white"
                    name="Cancel"
                    onClick={() => setIsEditing(false)}
                  />
                  <Button
                    color="blue"
                    name="Save Changes"
                    onClick={() => {
                      updateUserProfile();
                    }}
                  />
                </div>
              ) : (
                <div>
                  <Button
                    color="blue"
                    name="Edit"
                    onClick={() => setIsEditing(true)}
                  />
                </div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </>
  );
};

export default MyProfile;
