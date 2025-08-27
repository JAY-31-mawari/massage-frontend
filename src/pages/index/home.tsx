import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerReviews from "../../components/customerReviews";
import FooterTop from "../../components/footer-top";
import Footer from "../../components/footer";
import bg from "../../assets/img/banner-6.png";
import oneImg from "../../assets/img/one.webp";
import twoImg from "../../assets/img/two.webp";
import threeImg from "../../assets/img/three.webp";
import reviewsImg from "../../assets/img/reviews.webp";
import { servicesData } from "../../data/servicesData";
import axios from "axios";
import { useSearchLocation } from "../../store/searchLocation";
import { setStorageItem } from "../../utils/sessionStorage";
import { useServiceStore } from "../../store/serviceStore";
import toast from "react-hot-toast";
import { MapPin, Locate } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const updateLocation = useSearchLocation(
    (state) => state.updateSearchLocation
  );
  const [location, setLocation] = useState("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const services = useServiceStore((state) => state.services);
  const setServicesData = useServiceStore((state) => state.setServices);

  useEffect(() => {
    async function getDefultBusinesses() {
      const businessData = await axios.get(
        global.config.ROOTURL.prod + "/business"
      );
      if (businessData.data.businesses.length === 0) {
        return;
      }
      setServicesData(businessData.data.businesses);
    }
    if (services.length === 0) {
      getDefultBusinesses();
    }
  }, [services]);

  return (
    <>
      {/* Search Section */}
      <div
        className="image-cover hero-banner bg-primary"
        style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat" }}
      >
        <div className="container">
          <div className="simple-search-wrap">
            <div className="hero-search-2">
              <p className="lead-i text-light">
                Feel Better, Even on Your Busiest Days
              </p>
              <h2 className="text-light mb-4">
                Last-Minute Appointments, First-Class Care
              </h2>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-white rounded-2xl p-3 w-full max-w-3xl mx-auto border border-gray-100">
                {/* Input */}
                <div className="flex items-center flex-1 bg-blue-50 rounded-xl px-3 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
                  <MapPin className="text-blue-500 w-5 h-5 mr-2" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter City, State or Zipcode"
                    className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-400 text-lg"
                  />
                </div>

                {/* Live Location */}
                <button
                  className="flex items-center justify-center gap-1 px-4 py-2.5 text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition text-sm font-medium sm:w-auto w-full"
                  onClick={() => {
                    setStorageItem("live", "true");
                    navigate("/serviceList");
                  }}
                  disabled={isLoadingLocation}
                  title="Use my current location"
                >
                  <Locate className="w-6 h-6" />
                  <span className="sm:hidden">Use Location</span>
                </button>

                {/* Search Button */}
                <button
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg transition sm:w-auto w-full"
                  onClick={() =>
                    location
                      ? navigate(`/serviceList?search=${location}`)
                      : navigate(`/serviceList`)
                  }
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service Details startpoint */}
      <div className="bg-[#f8fdfd] mt-5 mb-5 p-6 sm:p-10 rounded-xl">
        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-5">
          Services We Provide
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Service Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5 w-full">
            {servicesData.map((service, index) => (
              <div
                onClick={() => navigate(`/service/${service.url}`)}
                key={index}
                className="bg-white rounded-lg p-4 shadow transition duration-300 ease-in-out hover:shadow-xl hover:brightness-110 text-center cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded mb-3 mx-auto object-cover transition duration-300 ease-in-out w-full sm:w-[200px] h-36 sm:h-[180px]"
                />
                <p className="font-semibold text-sm sm:text-base">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* website Content */}

      <section className="bg-[#f8fdfd] py-16 px-4 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center">
          {/* Left Text Section */}
          <div className="md:w-1/2 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 leading-snug">
              Relaxation, Just a Few Clicks Away 🌿
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              You’ll have the largest directory of Massage Therapists at your
              fingertips. Search by business or individual therapist name,
              massage technique, location, or review rating. Find just what you
              need to soothe what hurts, relax tense muscles, and bring you a
              sense of calm.
            </p>
          </div>

          {/* Right Card + Testimonials Section */}
          <div className="relative group md:w-1/2 flex justify-center">
            <img
              src={reviewsImg}
              alt="reviews"
              className="w-[280px] h-[320px] object-cover rounded-xl shadow-lg transition-all duration-300 ease-in-out transform group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_3px_rgba(86,97,246,0.4)] cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* Steps for users */}
      <section className="gray-bg">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug">
            Your perfect massage, made simple in 3 steps
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 justify-items-center">
          {/* Step 1 */}
          <div className="text-center flex flex-col items-center h-full">
            {/* Step Number */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-500 text-white text-lg font-bold mb-4">
              1
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow justify-between h-full max-w-xs">
              <div className="px-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-snug">
                  Step 1: Search Services
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Enter your{" "}
                  <span className="font-semibold text-gray-700">city</span>,{" "}
                  <span className="font-semibold text-gray-700">state</span>, or{" "}
                  <span className="font-semibold text-gray-700">ZIP code</span>{" "}
                  to find massage services. Want instant results? Use{" "}
                  <span className="font-semibold text-gray-700">
                    live location
                  </span>{" "}
                  to discover nearby services.
                </p>
              </div>
              <img
                src={oneImg}
                alt="Find Therapist"
                className="mt-6 rounded-xl w-full sm:w-[200px] md:w-[250px] h-44 sm:h-[240px] md:h-[280px] object-cover mx-auto"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center flex flex-col items-center h-full">
            {/* Step Number */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-500 text-white text-lg font-bold mb-4">
              2
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow justify-between h-full max-w-xs">
              <div className="px-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-snug">
                  Step 2: Choose Massage & Time
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Browse different{" "}
                  <span className="font-semibold text-gray-700">
                    massage types
                  </span>
                  , pick your{" "}
                  <span className="font-semibold text-gray-700">
                    preferred practitioner
                  </span>
                  , and select a{" "}
                  <span className="font-semibold text-gray-700">timeslot</span>{" "}
                  that fits your schedule.
                </p>
              </div>
              <img
                src={twoImg}
                alt="Prices and Availability"
                className="mt-6 rounded-xl w-full sm:w-[200px] md:w-[250px] h-44 sm:h-[240px] md:h-[280px] object-cover mx-auto"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center flex flex-col items-center h-full">
            {/* Step Number */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-500 text-white text-lg font-bold mb-4">
              3
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow justify-between h-full max-w-xs">
              <div className="px-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-snug">
                  Step 3: Book & Relax
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Confirm your booking with a{" "}
                  <span className="font-semibold text-gray-700">
                    quick & secure payment
                  </span>
                  . You’ll get an{" "}
                  <span className="font-semibold text-gray-700">
                    instant confirmation
                  </span>
                  and a{" "}
                  <span className="font-semibold text-gray-700">reminder</span>{" "}
                  day before your appointment. Now, sit back and get ready to
                  feel amazing ✨
                </p>
              </div>
              <img
                src={threeImg}
                alt="Online Booking"
                className="mt-6 rounded-xl w-full sm:w-[200px] md:w-[250px] h-44 sm:h-[240px] md:h-[280px] object-cover mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
              <div className="sec-heading center">
                <h2>Our Customer Reviews</h2>
              </div>
            </div>
          </div>
          <CustomerReviews />
        </div>
      </section>

      <FooterTop bg="theme-bg" />

      <Footer />
    </>
  );
}
