import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ModalVideo from "react-modal-video";
import Lightbox from "react-18-image-lightbox";

import floor from "../assets/img/floor.jpg";
import image1 from "../assets/img/pl-6.jpg";
import DateTimeComponent from "./date-time-appointment";
import { useMerchantStore } from "../store/merchantStore";
import { useUserStore } from "../store/userStore";

import { galleryImg } from "../data/property";
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
}: {
  practitionerId: string;
  serviceName: string;
  duration: number;
}) {
  const navigate = useNavigate();
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
        duration: 60,
        serviceType: merchant?.businessType,
        price: 150,
      },
    };
    await axios(bookingPayload)
      .then((res) => {
        getAllBookings();
        toast.success("Your Appointment is Booked");
        clearUserAppoinmentHistory();
      })
      .catch((error) => {
        console.log("handleBookAppointment Error", error);
      });
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
          bookedSlots={bookedSlots}
          selectedDate={selectedDate}
          selectedPractitionerId={practitionerId}
          selectedTimeSlot={selectedTimeSlot}
          appointmentDateTime={appointmentDateTime}
          setSelectedDate={setSelectedDate}
          setSelectedTimeSlot={setSelectedTimeSlot}
          setAppointmentDateTime={setAppointmentDateTime}
          handleBookingAppointment={BookAppointment}
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

      {/* <div className="property_block_wrap style-2">
        <div className="property_block_wrap_header">
          <Link
            to="#"
            onClick={() => setOpen4(!open4)}
            className={open4 ? "" : "collapsed"}
          >
            <h4 className="property_block_title">Property video</h4>
          </Link>
        </div>

        <div
          id="clFour"
          className={`panel-collapse collapse ${open4 ? "show" : ""}`}
        >
          <div className="block-body">
            <div className="property_video">
              <div className="thumb">
                <img
                  className="pro_img img-fluid w100"
                  src={image1}
                  alt="7.jpg"
                />
                <div className="overlay_icon">
                  <div className="bb-video-box">
                    <div className="bb-video-box-inner">
                      <div className="bb-video-box-innerup">
                        <Link
                          to="#"
                          onClick={() => setIsOpen(true)}
                          className="text-primary"
                        >
                          <i className="fa-solid fa-play"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId="yba7hPeTSjk"
          onClose={() => setIsOpen(false)}
        />
      </div>

      <div className="property_block_wrap style-2">
        <div className="property_block_wrap_header">
          <Link
            to="#"
            onClick={() => setOpen5(!open5)}
            className={open5 ? "" : "collapsed"}
          >
            <h4 className="property_block_title">Floor Plan</h4>
          </Link>
        </div>
        <div
          id="clFive"
          className={`panel-collapse collapse ${open5 ? "show" : ""}`}
        >
          <div className="block-body">
            <div className="accordion" id="floor-option">
              <div className="card">
                <div className="card-header" id="firstFloor">
                  <h2 className="mb-0">
                    <button
                      type="button"
                      onClick={() => setShow(!show)}
                      className={`btn btn-link ${show ? "" : "collapsed"}`}
                    >
                      First Floor<span>740 sq ft</span>
                    </button>
                  </h2>
                </div>
                <div
                  id="firstfloor"
                  className={`collapse ${show ? "show" : ""}`}
                >
                  <div className="card-body">
                    <img src={floor} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="seconfFloor">
                  <h2 className="mb-0">
                    <button
                      type="button"
                      onClick={() => setShow2(!show2)}
                      className={`btn btn-link ${show2 ? "" : "collapsed"}`}
                    >
                      Second Floor<span>710 sq ft</span>
                    </button>
                  </h2>
                </div>
                <div
                  id="secondfloor"
                  className={`collapse ${show2 ? "show" : ""}`}
                >
                  <div className="card-body">
                    <img src={floor} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="third-garage">
                  <h2 className="mb-0">
                    <button
                      type="button"
                      onClick={() => setShow3(!show3)}
                      className={`btn btn-link ${show3 ? "" : "collapsed"}`}
                    >
                      Garage<span>520 sq ft</span>
                    </button>
                  </h2>
                </div>
                <div id="garages" className={`collapse ${show3 ? "show" : ""}`}>
                  <div className="card-body">
                    <img src={floor} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="property_block_wrap style-2">
        <div className="property_block_wrap_header">
          <Link
            to="#"
            onClick={() => setOpen6(!open6)}
            className={open6 ? "" : "collapsed"}
          >
            <h4 className="property_block_title">Location</h4>
          </Link>
        </div>
        <div
          id="clSix"
          className={`panel-collapse collapse ${open6 ? "show" : ""}`}
        >
          <div className="block-body">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.3838103135677!2d80.87929001488125!3d26.827742183164247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe8bc34b51bb%3A0xa3ca86eec63f6f8!2sINFOSYS%20DIGITAL%20COMPUTER%20(Prabhat%20Computer%20Classes)!5e0!3m2!1sen!2sin!4v1680238790732!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
                title="myframe"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="property_block_wrap style-2">
        <div className="property_block_wrap_header">
          <Link
            to="#"
            onClick={() => setOpen7(!open7)}
            className={open7 ? "" : "collapsed"}
          >
            <h4 className="property_block_title">Gallery</h4>
          </Link>
        </div>

        <div
          id="clSev"
          className={`panel-collapse collapse ${open7 ? "show" : ""}`}
        >
          <div className="block-body">
            <ul className="list-gallery-inline">
              {galleryImg.map((item: any, index: number) => {
                return (
                  <li>
                    <Link
                      to="#"
                      className="mfp-gallery"
                      onClick={() => onImageClick(index)}
                      key={index}
                    >
                      <img src={item} className="img-fluid mx-auto" alt="" />
                    </Link>
                  </li>
                );
              })}
            </ul>
            {photo && (
              <Lightbox
                mainSrc={galleryImg[activeIndex]}
                nextSrc={galleryImg[(activeIndex + 1) % galleryImg.length]}
                prevSrc={
                  galleryImg[
                    (activeIndex + galleryImg.length - 1) % galleryImg.length
                  ]
                }
                onCloseRequest={() => setPhoto(false)}
                onMovePrevRequest={() =>
                  setActiveIndex(
                    (activeIndex + galleryImg.length - 1) % galleryImg.length
                  )
                }
                onMoveNextRequest={() =>
                  setActiveIndex((activeIndex + 1) % galleryImg.length)
                }
              />
            )}
          </div>
        </div>
      </div>    */}
    </>
  );
}
