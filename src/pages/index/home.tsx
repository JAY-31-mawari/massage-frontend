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
import {
  CheckCircle,
  SearchIcon,
  ClockIcon,
  CheckCircleIcon,
  ChevronDownIcon,
} from "lucide-react";
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
  const [activeStep, setActiveStep] = useState(1);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id: any) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const steps = [
    {
      id: 1,
      title: "Find Your Practitioner",
      description:
        "Search by location and service type to find qualified professionals near you.",
      subInfo:
        "You can filter by specialty, availability, and user reviews to find the perfect match for your needs.",
      icon: SearchIcon,
      image: oneImg,
    },
    {
      id: 2,
      title: "Book Your Appointment",
      description:
        "Select your preferred time slot and confirm your appointment details.",
      subInfo:
        "Our real-time calendar shows you available slots, making scheduling quick and hassle-free.",
      icon: ClockIcon,
      image: twoImg,
    },
    {
      id: 3,
      title: "Get Confirmed",
      description:
        "Receive instant or quick confirmation from your chosen practitioner.",
      subInfo:
        "You'll receive a confirmation email and a reminder before your appointment.",
      icon: CheckCircleIcon,
      image: threeImg,
    },
  ];

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
    <div className="bg-white">
      {/* Search Section */}
      <div
        className="relative bg-no-repeat bg-cover bg-center w-full h-[600px] lg:h-[700px]"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-8xl mx-auto px-12 sm:px-6 md:px-12 h-full flex flex-col justify-center items-start">
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Wellness Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover a range of professional health and wellness services
            tailored to your needs
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Service Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 w-full">
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

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Connecting You with{" "}
                <span className="text-teal-600">Quality Healthcare</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                WellnessBook is Canada's premier platform for connecting clients
                with certified wellness professionals. We believe everyone
                deserves access to quality healthcare services that promote
                healing, wellness, and vitality.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="text-slate-700">
                    Verified and certified professionals
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="text-slate-700">
                    Instant or quick appointment confirmations
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="text-slate-700">
                    Nationwide coverage across Canada
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="text-slate-700">
                    Secure and easy online booking
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1632012643865-dadda4f2d3cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxtYXNzYWdlJTIwdGhlcmFweXxlbnwwfHx8dGVhbHwxNzU4NzA3NzE1fDA&ixlib=rb-4.1.0&q=85"
                  alt="Wellness therapy"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-cyan-600/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Steps for users */}
      

      <div className="min-h-screen  font-sans text-gray-800 antialiased py-8 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl tracking-tight">
              How It Works
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Book your wellness appointment in three simple steps.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12 items-center">
            {/* Step-by-Step Content */}
            <div className="flex-1 w-full lg:w-1/2">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex items-start transition-all duration-500 ease-in-out cursor-pointer mb-6 p-8 rounded-xl ${
                    activeStep === step.id ? "bg-indigo-50" : "bg-transparent"
                  } hover:bg-gray-100`}
                  onMouseEnter={() => setActiveStep(step.id)}
                >
                  <div
                    className={`flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full transition-colors duration-500 ${
                      activeStep === step.id
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h3
                      className={`text-2xl font-semibold transition-colors duration-500 ${
                        activeStep === step.id
                          ? "text-indigo-600"
                          : "text-gray-900"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Container */}
            <div className="flex-1 w-full lg:w-1/2 mt-12 lg:mt-0 relative h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
              {steps.map((step) => (
                <img
                  key={step.id}
                  src={step.image}
                  alt={step.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    activeStep === step.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

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
