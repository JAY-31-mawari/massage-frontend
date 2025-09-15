import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { getStorageItem, deleteStorageItem } from "../../utils/sessionStorage";
import { useUserStore } from "../../store/userStore";
import toast from "react-hot-toast";
import { AppointmentHistory } from "../../components/interfaces";
import { useAppointmentStore } from "../../store/appointmentHistoryStore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Loading from "../../components/loader";

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
  const [isAppointmentLoading, setIsAppointmentLoading] = useState(false);
  const user = useUserStore((state) => state.user);
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const accessToken = getStorageItem("token");
  const [pastAppointments, setPastAppointments] = useState<
    AppointmentHistory[]
  >([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState<
    AppointmentHistory[]
  >([]);

  const fetchUserAppointments = async () => {
    if (!user?.id || !accessToken) {
      toast.error("Please Login First");
      setTimeout(() => {
        navigate("/create-account");
      }, 2000);
      return;
    }
    setIsAppointmentLoading(true);
    const appointmentPayload = {
      method: "GET",
      url: global.config.ROOTURL.prod + `/appointment/user/${user.id}`,
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
      })
      .finally(() => {
        setIsAppointmentLoading(false);
      });
  };

  useEffect(() => {
    if (appointmenthistory.length === 0) {
      fetchUserAppointments();
    } else {
      setUserAppointmentHistory(appointmenthistory);
    }
  }, []);

  useEffect(() => {
    if (appointmenthistory.length !== 0) {
      const now = new Date();
      let index = 0;
      for (const appointment of appointmenthistory) {
        if (new Date(appointment.appointmentDate) < now) {
          break;
        }
        index += 1;
      }
      setUpcomingAppointments(appointmenthistory.slice(0, index));
      setPastAppointments(appointmenthistory.slice(index));
    }
  }, [appointmenthistory]);

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        {/* Main Content */}
        {isAppointmentLoading ? (
          <div className="m-auto">
            <Loading />
          </div>
        ) : (
          <main className="flex-1 p-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="space-y-8">
                  {/* Upcoming Appointments */}
                  {upcomingAppointments.length !== 0 && (
                    <h4 className="text-xl font-semibold text-gray-800 border-b pb-2">
                      Upcoming Appointments
                    </h4>
                  )}

                  {upcomingAppointments.length !== 0 &&
                    upcomingAppointments.map((appointment, index: number) => {
                      const date = new Date(appointment?.appointmentDate);
                      const options: Intl.DateTimeFormatOptions = {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                        timeZone: userTimeZone,
                      };
                      const formatted = date.toLocaleString("en-US", options);

                      return (
                        <motion.div
                          key={appointment?.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                          <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                            {/* Left - Image slider */}
                            <div className="md:w-1/3 w-full rounded-lg overflow-hidden">
                              <div className="w-full h-48 md:h-64">
                                {" "}
                                {/* Constrains the Swiper */}
                                <Swiper
                                  modules={[Navigation, Pagination]}
                                  navigation
                                  pagination={{ clickable: true }}
                                  loop
                                  className="!w-full !h-full rounded-lg" // force fill
                                >
                                  {appointment?.business?.businessPhotos?.map(
                                    (el, index) => (
                                      <SwiperSlide
                                        key={index}
                                        className="!w-full !h-full"
                                      >
                                        {" "}
                                        {/* force slide to fit */}
                                        <img
                                          src={el}
                                          alt={`Business Photo ${index + 1}`}
                                          className="w-full h-full object-cover rounded-lg"
                                        />
                                      </SwiperSlide>
                                    )
                                  )}
                                </Swiper>
                              </div>
                            </div>

                            {/* Right - Details */}
                            <div className="flex-1 space-y-2">
                              <h4 className="text-lg font-bold text-gray-900">
                                {appointment?.business?.businessName}
                              </h4>

                              <div className="text-gray-700">
                                Practitioner Name:{" "}
                                <Link
                                  to="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  {
                                    appointment?.practitioner
                                      ?.practitionerName
                                  }
                                </Link>
                              </div>

                              <div className="text-gray-700">
                                Appointment Date & Time:{" "}
                                <Link
                                  to="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  {formatted}
                                </Link>
                              </div>

                              <div className="text-gray-700">
                                Service Type:{" "}
                                <Link
                                  to="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  {appointment?.serviceType}
                                </Link>
                              </div>

                              <div className="text-gray-700">
                                Service Duration:{" "}
                                <Link
                                  to="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  {appointment?.duration} minutes
                                </Link>
                              </div>

                              <div className="text-gray-700">
                                Area of Expertise:{" "}
                                <Link
                                  to="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  {appointment?.serviceName}
                                </Link>
                              </div>

                              <div className="text-gray-700">
                                Price:{" "}
                                <Link
                                  to="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  {appointment?.price}
                                </Link>
                              </div>

                              <div className="pt-2">
                                <Link
                                  to={`/service/${appointment?.businessId}`}
                                  title="Book Another Appointment"
                                  className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
                                >
                                  <i className="fa-solid fa-pen-to-square mr-2"></i>
                                  Book Again
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}

                  {/* Past Appointments */}
                  {pastAppointments.length !== 0 && (
                    <h4 className="text-xl font-semibold text-gray-800 border-b pb-2">
                      Past Appointments
                    </h4>
                  )}

                  {pastAppointments.length !== 0 &&
                    pastAppointments.map((appointment, index: number) => {
                      const date = new Date(appointment?.appointmentDate);
                      const options: Intl.DateTimeFormatOptions = {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                        timeZone: userTimeZone,
                      };
                      const formatted = date.toLocaleString("en-US", options);

                      return (
                        <motion.div
                          key={appointment?.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                          <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                            {/* Left - Image slider */}
                            <div className="md:w-1/3 w-full rounded-lg overflow-hidden">
                              <Swiper
                                modules={[Navigation, Pagination]}
                                navigation
                                pagination={{ clickable: true }}
                                loop
                                className="!w-full !h-48 md:!h-64 rounded-lg" // force width & height
                              >
                                {appointment?.business?.businessPhotos?.map(
                                  (el, index) => (
                                    <SwiperSlide
                                      key={index}
                                      className="!w-full !h-full"
                                    >
                                      {" "}
                                      {/* force each slide */}
                                      <img
                                        src={el}
                                        alt={`Business Photo ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                      />
                                    </SwiperSlide>
                                  )
                                )}
                              </Swiper>
                            </div>

                            {/* Right - Details */}
                            <div className="flex-1 space-y-2">
                              <h4 className="text-lg font-bold text-gray-900">
                                {appointment?.business?.businessName}
                              </h4>

                              <div className="text-gray-700">
                                Practitioner Name:{" "}
                                <Link
                                  to="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  {
                                    appointment?.practitioner
                                      ?.practitionerName
                                  }
                                </Link>
                              </div>

                              <div className="text-gray-700">
                                Appointment Date & Time:{" "}
                                <Link
                                  to="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  {formatted}
                                </Link>
                              </div>

                              <div className="text-gray-700">
                                Service Type:{" "}
                                <Link
                                  to="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  {appointment?.serviceType}
                                </Link>
                              </div>

                              <div className="text-gray-700">
                                Service Duration:{" "}
                                <Link
                                  to="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  {appointment?.duration} minutes
                                </Link>
                              </div>

                              <div className="text-gray-700">
                                Area of Expertise:{" "}
                                <Link
                                  to="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  {appointment?.serviceName}
                                </Link>
                              </div>

                              <div className="text-gray-700">
                                Price:{" "}
                                <Link
                                  to="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  {appointment?.price}
                                </Link>
                              </div>

                              <div className="pt-2">
                                <Link
                                  to={`/service/${appointment?.businessId}`}
                                  title="Book Another Appointment"
                                  className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
                                >
                                  <i className="fa-solid fa-pen-to-square mr-2"></i>
                                  Book Again
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
        )}
      </div>
    </>
  );
}
