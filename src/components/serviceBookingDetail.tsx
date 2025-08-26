import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DateTimeComponent from "./date-time-appointment";
import { useMerchantStore } from "../store/merchantStore";
import { useUserStore } from "../store/userStore";
import toast from "react-hot-toast";
import "../../node_modules/react-modal-video/css/modal-video.css";
import "../../node_modules/react-18-image-lightbox/style.css";
import { getStorageItem } from "../utils/sessionStorage";
import axios from "axios";
import { useAppointmentStore } from "../store/appointmentHistoryStore";

export default function ServiceBookingDetail({
  practitionerId,
  serviceName,
  duration,
  setDuration,
}: {
  practitionerId: string;
  serviceName: string;
  duration: number;
  setDuration:(time:number)=>void;
}) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const merchant = useMerchantStore((state) => state.merchant);
  const user = useUserStore((state) => state.user);
  const clearUserAppoinmentHistory = useAppointmentStore(
    (state) => state.clearAppointments
  );
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [appointmentDateTime, setAppointmentDateTime] = useState(new Date());
  const [bookedSlots, setBookedSlots] = useState([]);
  const accessToken = getStorageItem("token");
  const [isOpen, setIsOpen] = useState(false);
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let [open2, setOpen2] = useState<boolean>(false);
  let [open4, setOpen4] = useState<boolean>(false);
  let [open5, setOpen5] = useState<boolean>(false);
  let [open6, setOpen6] = useState<boolean>(false);
  let [open7, setOpen7] = useState<boolean>(false);
  let [show, setShow] = useState<boolean>(false);
  let [show2, setShow2] = useState<boolean>(false);
  let [show3, setShow3] = useState<boolean>(false);

  let [activeIndex, setActiveIndex] = useState<number>(0);
  let [photo, setPhoto] = useState<boolean>(false);

  const onImageClick = (index: number) => {
    setActiveIndex(index);
    setPhoto(true);
  };

  const rating = [
    { value: "1", label: "01 Star" },
    { value: "1", label: "02 Star" },
    { value: "1", label: "03 Star" },
    { value: "1", label: "04 Star" },
    { value: "1", label: "05 Star" },
  ];

  const BookAppointment = async () => {
    if (!user?._id) {
      toast.error("Please Login First");
      setTimeout(() => {
        navigate("/create-account");
      }, 2000);
      return;
    }
    if (!merchant?._id) {
      toast.error("Please select service first for booking");
      return;
    }
    if (selectedTimeSlot === "") {
      toast.error("Please select time slot for your appoinment");
      return;
    }
    if (!serviceName) {
      toast.error("Please select service first");
      return;
    }
    if (!practitionerId) {
      toast.error("Please select your practitioner");
      return;
    }

    const currentTime = new Date();
    if (appointmentDateTime < currentTime) {
      toast.error("Please select a future Time for your appointment");
      return;
    }
    setIsLoading(true)
    const bookingPayload = {
      method: "POST",
      url: global.config.ROOTURL.prod + `/appointment`,
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-type": "application/json",
      },
      data: {
        userId: user._id,
        businessId: merchant._id,
        serviceName,
        practitionerId,
        appointmentDate: appointmentDateTime, // Format: "2025-08-11T15:30:00" (local time without timezone)
        duration: duration,
        timeZone: userTimeZone,
        serviceType: merchant?.businessType,
        price: 150,
      },
    };
    await axios(bookingPayload)
      .then((res) => {
        getAllBookings();
        toast.success("Your Appointment is Booked");
        setDuration(15)
        clearUserAppoinmentHistory();
      })
      .catch((error) => {
        toast.error("This Slot is already Booked")
        console.log("handleBookAppointment Error", error);
      });

    setIsLoading(false)
  };

  const getAllBookings = async () => {
    if (!merchant?._id) {
      toast.error("Select a business first");
      return;
    }
    const getBookingPayload = {
      method: "GET",
      url:
        global.config.ROOTURL.prod +
        `/appointment/business/${merchant._id}?appointmentDate=${appointmentDateTime}`,
    };
    try {
      await axios(getBookingPayload)
        .then((res) => {
          setBookedSlots(res.data?.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.error("getAllBookings Error", err);
    }
  };


  useEffect(() => {
    getAllBookings();
  }, [selectedDate]);

  return (
    <>
      <div className="property_block_wrap style-2">
        <DateTimeComponent
          isLoading={isLoading}
          bookedSlots={bookedSlots}
          selectedDate={selectedDate}
          selectedPractitionerId={practitionerId}
          selectedTimeSlot={selectedTimeSlot}
          appointmentDateTime={appointmentDateTime}
          setSelectedDate={setSelectedDate}
          setSelectedTimeSlot={setSelectedTimeSlot}
          setAppointmentDateTime={setAppointmentDateTime}
          handleBookingAppointment={BookAppointment}
          serviceDuration={duration}
        />
      </div>

      <div className="property_block_wrap style-2">
        <div className="property_block_wrap_header">
          <Link
            to="#"
            onClick={() => setOpen2(!open2)}
            className={open2 ? "" : "collapsed"}
          >
            <h4 className="property_block_title">Description</h4>
          </Link>
        </div>
        <div
          id="clTwo"
          className={`panel-collapse collapse ${open2 ? "show" : ""}`}
        >
          <div className="block-body">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
