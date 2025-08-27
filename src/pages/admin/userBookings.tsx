import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { getStorageItem, deleteStorageItem } from "../../utils/sessionStorage";
import { useUserStore } from "../../store/userStore";
import toast from "react-hot-toast";
import { AppointmentHistory } from "../../components/interfaces";
import { useAppointmentStore } from "../../store/appointmentHistoryStore";
import TinySlider from "tiny-slider-react";

const settings = {
  items: 1,
  controls: false,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  nav: true,
  speed: 400,
  gutter: 0,
};

export default function UserBookings() {
  const navigate = useNavigate();
  const appointmenthistory = useAppointmentStore((state) => state.appointments);
  const updateAppointmentHistory = useAppointmentStore(
    (state) => state.updateAppointments
  );
  const [userAppointmentHisotry, setUserAppointmentHistory] = useState<
    AppointmentHistory[]
  >([]);
  const user = useUserStore((state) => state.user);
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const accessToken = getStorageItem("token");

  const fetchUserAppointments = async () => {
    if (!user?._id || !accessToken) {
      toast.error("Please Login First");
      setTimeout(() => {
        navigate("/create-account");
      }, 2000);
      return;
    }

    const appointmentPayload = {
      method: "GET",
      url: global.config.ROOTURL.prod + `/appointment/user/${user._id}`,
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-type": "application/json",
      },
    };

    await axios(appointmentPayload)
      .then((res) => {
        setUserAppointmentHistory(res.data?.data);
        updateAppointmentHistory(res.data?.data);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          toast.error("Please Login First");
          deleteStorageItem("user-data");
          deleteStorageItem("token");
          setTimeout(() => {
            navigate("/create-account");
          }, 2000);
        }
      });
  };

  useEffect(() => {
    if (appointmenthistory.length === 0) {
      fetchUserAppointments();
    } else {
      setUserAppointmentHistory(appointmenthistory);
    }
  }, []);

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg p-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="form-submit mb-4">
                <h4>My Orders</h4>
              </div>

              <div className="row">
                {userAppointmentHisotry.length !== 0 &&
                  userAppointmentHisotry.map((appointment, index: number) => {
                    const date = new Date(appointment?.appointmentDate);
                    const options: Intl.DateTimeFormatOptions = {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                      timeZone: userTimeZone, // changes to your user timezone
                    };

                    const formatted = date.toLocaleString("en-US", options);

                    return (
                      <motion.div
                        className="col-md-12 col-sm-12"
                        key={appointment?._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        onClick={() =>
                          navigate(`/service/${appointment?.businessId?._id}`)
                        }
                      >
                        <div className="singles-dashboard-list">
                          <div className="sd-list-left">
                            <TinySlider settings={settings}>
                              {appointment?.businessId?.businessPhotos &&
                                appointment.businessId.businessPhotos.map(
                                  (el, index) => (
                                    <div key={index} className="h-full">
                                      <img
                                        src={el}
                                        alt=""
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  )
                                )}
                            </TinySlider>
                          </div>
                          <div className="sd-list-right">
                            <h4 className="listing_dashboard_title">
                              {appointment?.businessId?.businessName}
                            </h4>
                            <div className="user_dashboard_listed">
                              Practitioner Name:{" "}
                              <Link to="#" className="text-primary">
                                {appointment?.practitionerId?.practitionerName}
                              </Link>
                            </div>
                            <div className="user_dashboard_listed">
                              Appointment Date & Time:{" "}
                              <Link to="#" className="text-primary">
                                {formatted}
                              </Link>
                            </div>
                            <div className="user_dashboard_listed">
                              Service Type :{" "}
                              <Link to="#" className="text-primary">
                                {appointment?.serviceType}
                              </Link>
                            </div>
                            <div className="user_dashboard_listed">
                              Area of Expertise:{" "}
                              <Link to="#" className="text-primary">
                                {appointment?.serviceName}
                              </Link>
                            </div>
                            <div className="user_dashboard_listed">
                              Price:{" "}
                              <Link to="#" className="text-primary">
                                {appointment?.price}
                              </Link>
                            </div>
                            <div className="action">
                              <Link to="#" title="Edit">
                                <i className="fa-solid fa-pen-to-square"></i>
                              </Link>
                              <Link to="#" title="202 User View">
                                <i className="fa-regular fa-eye"></i>
                              </Link>
                              <Link
                                to="#"
                                title="Delete Property"
                                className="delete"
                              >
                                <i className="fa-regular fa-circle-xmark"></i>
                              </Link>
                              <Link
                                to="#"
                                title="Make Featured"
                                className="delete"
                              >
                                <i className="fa-solid fa-star"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}
