import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerReviews from "../../components/customerReviews";
import FooterTop from "../../components/footer-top";
import oneImg from "../../assets/img/one.webp";
import twoImg from "../../assets/img/two.webp";
import threeImg from "../../assets/img/three.webp";
import reviewsImg from "../../assets/img/reviews.webp";
import { servicesData } from "../../data/servicesData";
import axios from "axios";
import { useSearchLocation } from "../../store/searchLocation";
import { setStorageItem } from "../../utils/sessionStorage";
import { useServiceStore } from "../../store/serviceStore";
import { MapPin, Locate } from "lucide-react";
import homeBg from "../../assets/img/background/pexels-olly-3757952.jpg";

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
    <div className="bg-gradient-to-r from-cyan-100 via-white to-purple-200">
      {/* Search Section */}
      <div
        className="relative bg-no-repeat bg-cover bg-center w-full h-[600px] lg:h-[700px]"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-8xl mx-auto px-12 sm:px-6 md:px-12 h-full flex flex-col justify-center items-start">
          {/* Hero Text */}
          <p className="text-base sm:text-md md:text-xl text-white mb-3 sm:mb-4 font-medium">
            Feel Better, Even on Your Busiest Days
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight max-w-md sm:max-w-lg md:max-w-2xl">
            Last-Minute Appointments, First-Class Care
          </h2>

          {/* Search Box */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-white rounded-2xl p-4 w-full max-w-xl sm:max-w-2xl border border-gray-200 shadow-md">
            {/* Input */}
            <div className="flex items-center flex-1 bg-blue-50 rounded-xl px-3 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
              <MapPin className="text-blue-500 w-5 h-5 mr-2" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter City, State or Zipcode"
                className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-400 text-sm sm:text-base lg:text-lg"
              />
            </div>

            {/* Live Location */}
            <button
              className="flex items-center justify-center gap-2 px-4 py-3 text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition text-sm font-medium sm:w-auto w-full"
              onClick={() => {
                setStorageItem("live", "true");
                navigate("/serviceList");
              }}
              disabled={isLoadingLocation}
              title="Use my current location"
            >
              <Locate className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="sm:hidden">Use Location</span>
            </button>

            {/* Search Button */}
            <button
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition sm:w-auto w-full"
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

      {/* Service Details startpoint */}
      <div className="mt-2 p-6 sm:p-10 rounded-xl max-w-[1400px] mx-auto">
        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-5">
          Services We Provide
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Service Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 w-full max-w-[1200px]">
            {servicesData.map((service, index) => (
              <div
                onClick={() => navigate(`/service/${service.url}`)}
                key={index}
                className="bg-white rounded-lg shadow transition duration-300 ease-in-out hover:shadow-xl hover:brightness-110 text-center cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded mb-3 object-cover transition duration-300 ease-in-out w-full h-36 sm:h-[200px]"
                />
                <p className="font-semibold text-md sm:text-base mb-4">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Content */}
      <section className="py-8 px-4 md:px-16">
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

          {/* Right div + Testimonials Section */}
          <div className="relative group md:w-1/2 flex justify-center">
            <img
              src={reviewsImg}
              alt="reviews"
              className="w-[400px] h-[320px] object-cover rounded-xl shadow-lg transition-all duration-300 ease-in-out transform group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_3px_rgba(86,97,246,0.4)] cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* Steps for users */}
      <section className="py-5 bg-[rgb(255,255,255)]">
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

      {/* Customer Review */}
      <section className="bg-[#fafbff] py-12 px-4 sm:px-6 md:px-12 lg:!px-28 lg:py-24 relative">
        <div className="max-w-6xl">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold">
            See what our community says
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Learn firsthand from our clients on how they've grown their
            experience with Last minute wellness.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative mt-4">
          {/* Left Arrow */}
          <CustomerReviews />
        </div>
      </section>

      <FooterTop bg="theme-bg" />
    </div>
  );
}
