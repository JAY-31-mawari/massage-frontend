import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerReviews from "../../components/customerReviews";
import FooterTop from "../../components/footer-top";
import oneImg from "../../assets/img/steps/one.png";
import twoImg from "../../assets/img/steps/two.png";
import StackImg from "../../assets/img/stack.png"
import threeImg from "../../assets/img/steps/three.jpeg";
import { servicesData } from "../../data/servicesData";
import axios from "axios";
import {
  CheckCircle,
  SearchIcon,
  ClockIcon,
  CheckCircleIcon,
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
        className="relative bg-no-repeat bg-cover bg-center w-full h-[600px] lg:h-[620px]"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>{" "}
        {/* Deep Teal Overlay */}
        <div className="relative max-w-8xl mx-auto px-12 sm:px-6 md:px-12 h-full flex flex-col justify-center items-start">
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4 font-light tracking-wide">
            Feel better, Even on your busiest days
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 sm:mb-10 leading-tight max-w-xl sm:max-w-2xl md:max-w-3xl drop-shadow-lg">
            Last-Minute Appointments,{" "}
            <span className="text-white-300">First-class care</span>
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
      <div className="p-6 sm:p-10   mx-auto relative z-10">
        {/* Main Title */}
        <div className="text-center mb-6 md:mb-16 pt-6 md:pt-12">
          <h2 className="text-2xl lg:text-5xl font-bold text-gray-700 mb-3">
            Our <span className="text-white-600">Premium</span> Wellness
            Services
          </h2>
          <p className="text-lg md:text-2xl text-slate-600 max-w-5xl mx-auto font-medium">
            Discover a range of professional health and wellness services
            tailored to your needs.
          </p>
        </div>

        <div className="flex flex-col mb-10 md:flex-row items-center justify-center">
          {/* Service Grid - Modern Card Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {servicesData.map((service, index) => (
              <div
                onClick={() => navigate(`/service/${service.url}`)}
                key={index}
                className="group bg-white rounded-xl shadow-sm border border-gray-100 transition duration-500 ease-in-out hover:shadow-2xl hover:border-emerald-300 text-center cursor-pointer overflow-hidden transform hover:-translate-y-1"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-t-xl mb-0 object-cover w-full h-48 transition duration-500 ease-in-out group-hover:scale-100"
                />
                <p className="font-medium text-base md:text-xl text-gray-700 p-4 group-hover:text-gray-800 transition">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Steps for users */}
      <div className="bg-[#fafbff] min-h-screen font-sans text-gray-800 antialiased py-10 lg:py-16 border-t-2 border-t-gray-100">
        <div className="lg:mx-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-700">
              Our <span>Simple</span> Process
            </h1>
            <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
              Book your wellness appointment in three simple, stress-free steps.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-16 items-center lg:items-start">
            {/* Step-by-Step Content */}
            <div className="flex-1 w-full space-y-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex items-start transition-all duration-500 ease-in-out cursor-pointer p-4 rounded-2xl sm:rounded-3xl border ${
                    activeStep === step.id
                      ? " border-emerald-300 shadow-xl"
                      : "bg-white border-gray-100"
                  } hover: hover:border-emerald-200`}
                  onMouseEnter={() => setActiveStep(step.id)}
                >
                  <div
                    className={`flex-shrink-0 flex items-center justify-center p-3 rounded-xl transition-colors duration-500 ${
                      activeStep === step.id
                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                        : "bg-gray-100 text-emerald-500"
                    }`}
                  >
                    <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3
                      className={`text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-500 ${
                        activeStep === step.id
                          ? "text-emerald-700"
                          : "text-gray-900"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg text-gray-700 font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Container */}
            <div className="flex-1 w-full mt-10 lg:mt-0 relative h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-emerald-100">
              {steps.map((step) => (
                <img
                  key={step.id}
                  src={step.image}
                  alt={step.title}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
                    activeStep === step.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-black/10"></div>
              {/* Subtle gradient overlay */}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r bg-[#f5fcfc] border-t-2 border-t-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={StackImg}
                  alt="Wellness therapy"
                  className="w-full h-96 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-cyan-600/20"></div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Connecting You with{" "}
                <span className="text-blue-600">Quality Healthcare</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Last minute wellness is Canada's premier platform for connecting
                clients with certified wellness professionals. We believe
                everyone deserves access to quality healthcare services that
                promote healing, wellness, and vitality.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">
                    Verified and certified professionals
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">
                    Instant or quick appointment confirmations
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">
                    Nationwide coverage across Canada
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">
                    Secure and easy online booking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Review */}
      <section className="bg-gray-100 py-12 px-4 sm:px-6 md:px-12 lg:!px-28 lg:py-24 relative border-t-2 border-t-gray-200">
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
