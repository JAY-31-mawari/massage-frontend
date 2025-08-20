import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SellPropertyOne from "../../components/sell-property-one";
import TeamOne from "../../components/team-one";
import ClientOne from "../../components/client-one";
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
  const services = useServiceStore((state) => state.services)
  const setServicesData = useServiceStore((state) => state.setServices);
 
  useEffect(() => {
    async function getDefultBusinesses() {
      const businessData = await axios.get(
        global.config.ROOTURL.prod + "/business"
      );
      setServicesData(businessData.data.businesses);
    }
    if(services.length === 0){
      getDefultBusinesses()
    }
  }, [services]);

  return (
    <>
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
              <div className="flex items-center gap-2 bg-white rounded-2xl p-3 w-full max-w-3xl mx-auto border border-gray-100">
                {/* Input */}
                <div className="flex items-center flex-1 bg-gray-50 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
                  <MapPin className="text-blue-500 w-5 h-5 mr-2" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter city, state or zipcode"
                    className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-400"
                  />
                </div>

                {/* Live Location */}
                <button
                  className="flex items-center gap-1 px-4 py-2.5 text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition text-sm font-medium"
                  onClick={() => {
                    setStorageItem("live", "true");
                    navigate("/serviceList");
                  }}
                  disabled={isLoadingLocation}
                  title="Use my current location"
                >
                  <Locate className="w-6 h-6" />
                </button>

                {/* Search Button */}
                <button
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg transition"
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

      <section className="bg-[#f8fdfd] py-16 px-4 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center">
          {/* Left Text Section */}
          <div className="md:w-1/2 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 leading-snug">
              You’ll find the best professional
              <br />
              <span className="font-bold">
                Massage Therapist and techniques
              </span>
              <br />
              for your needs
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

      <div className="clearfix"></div>

      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
              <div className="sec-heading center">
                <h2>Top-Rated Wellness Practitioners</h2>
                <p>
                  Meet our most trusted and highly rated experts in
                  Physiotherapy, Chiropractic Care, Massage Therapy, and
                  Acupuncture. These professionals are recognized for delivering
                  exceptional care even when you're short on time.
                </p>
              </div>
            </div>
          </div>
          <SellPropertyOne border={false} />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-4">
              <Link
                to="listings-list-with-sidebar"
                className="btn btn-primary px-lg-5 rounded"
              >
                Browse More Properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
              <div className="sec-heading center">
                <h2>Explore Featured Agents</h2>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores
                </p>
              </div>
            </div>
          </div>
          <TeamOne />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
              <Link
                to="/listings-list-with-sidebar"
                className="btn btn-primary px-lg-5 rounded"
              >
                Explore More Agents
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>

      <section className="bg-[#f8fdfd] py-10 px-4 md:py-16 md:px-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug">
            You’re <span className="font-bold">3 easy steps</span> away from{" "}
            <br className="hidden md:block" />a great massage experience
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 justify-items-center">
          {[
            {
              number: 1,
              title: "1. Find the right Massage Therapist for you",
              desc: "Search by name, location, massage technique, or review score",
              src: oneImg,
              alt: "Find Therapist",
            },
            {
              number: 2,
              title: "2. Massage Prices & Availability",
              desc: "No more phone tag trying to book an appointment",
              src: twoImg,
              alt: "Prices and Availability",
            },
            {
              number: 3,
              title: "3. Massage Online Booking",
              desc: "You get an immediate confirmation and we'll send an appointment reminder the day before.",
              src: threeImg,
              alt: "Online Booking",
            },
          ].map(({ number, title, desc, src, alt }, index) => (
            <div
              className="text-center flex flex-col items-center h-full"
              key={index}
            >
              {/* Step Number */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-500 text-white text-lg font-bold mb-4">
                {number}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow justify-between h-full max-w-xs">
                <div className="px-2">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-snug">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">{desc}</p>
                </div>
                <img
                  src={src}
                  alt={alt}
                  className="mt-6 rounded-xl w-full sm:w-[200px] md:w-[250px] h-44 sm:h-[240px] md:h-[280px] object-cover mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
              <div className="sec-heading center">
                <h2>Good Reviews by Customers</h2>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores
                </p>
              </div>
            </div>
          </div>
          <ClientOne />
        </div>
      </section>

      <FooterTop bg="theme-bg" />

      <Footer />
    </>
  );
}
