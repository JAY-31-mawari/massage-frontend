import { useState } from "react";
import { Link } from "react-router-dom";
import aboutService from "../../assets/img/city-2.png";
import ListIcon from "../../assets/img/svg/list-icon.svg";
import Availability from "../../assets/img/svg/availability.svg";
import PriceTag from "../../assets/img/svg/priceTag.svg";
import SuitCase from "../../assets/img/svg/suitcase.svg";
import AboutSerivceBg from "../../assets/img/background/aboutService.png";
import Testimony1 from "../../assets/img/partners/emma-make-2x.webp";
import Testimony2 from "../../assets/img/partners/harbor-bickmore-2x.webp";
import Testimony3 from "../../assets/img/partners/batzorig-regzen-2x.webp";

export function MerchantAboutUs() {
  const aboutServiceLists = [
    {
      id: 1,
      icon: Availability,
      text: "Fill last-minute slots and reduce cancellations",
    },
    {
      id: 2,
      icon: ListIcon,
      text: "Attract new clients without extra marketing",
    },
    {
      id: 3,
      icon: SuitCase,
      text: "Focus on providing care, not administrative tasks",
    },
    {
      id: 4,
      icon: PriceTag,
      text: "Easy-to-use, mobile-friendly platform",
    },
  ];

  const testimonials = [
    {
      id: 1,
      image: Testimony1,
      imageText: "Clinic based practitioner",
      header: "Get discovered by clients",
      testimony:
        "Illustrator Emma Makeopens in a new tab creates commissioned work for clients like Anthropologie and Penguin Random House.",
    },
    {
      id: 2,
      image: Testimony2,
      imageText: "Home based practitioner",
      header: "Offer freelance services",
      testimony:
        "Font designer Harbor Bickmoreopens in a new tab crafts custom fonts for clients on demand as a freelance service.",
    },
    {
      id: 3,
      image: Testimony3,
      imageText: "Mobile practitioner",
      header: "Sell creative assets",
      testimony:
        "Self-taught designer Batzorig Regzenopens in a new tab designs top-selling presentation templates made with small businesses in mind.",
    },
  ];

  const faqData = [
    {
      question: "How do payments work?",
      answer: "Practitioners receive weekly payouts directly to their account.",
    },
    {
      question: "What about cancellations?",
      answer: "We notify clients immediately and help manage rescheduling.",
    },
    {
      question: "Do I need insurance or licensing?",
      answer: "Only valid, licensed practitioners can join.",
    },
    {
      question: "How does pricing work?",
      answer:
        "We charge a simple [X% commission] per completed appointment. There are no setup or monthly fees—you only pay when you get clients.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero/ Header Section */}
      <div
        className="relative text-white text-center py-20 sm:py-28 md:py-32 bg-no-repeat bg-cover bg-center w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
        style={{ backgroundImage: `url(${AboutSerivceBg})` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative font-bold px-4 sm:px-6 md:px-10">
          <p className="text-xl sm:text-3xl md:text-5xl">
            Fill Last-Minute Appointments & Grow Your Practice
          </p>
          <div className="font-bold max-w-3xl mx-auto sm:text-2xl md:text-4xl lg:text-3xl leading-tight mt-5">
            <h1>
              We help wellness practitioners attract clients, reduce empty
              slots, and focus on what matters most—providing care.
            </h1>
          </div>
          <Link
            to="/register"
            className="my-6 tracking-wider inline-block px-4 py-2 sm:px-5 sm:py-3 bg-blue-600 text-white text-base sm:text-lg md:text-xl rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign Up Today
          </Link>
        </div>
      </div>

      {/* how it works section*/}
      <section className="bg-[#fafbff] py-8 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="text-center">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl sm:mx-12 md:mx-24 lg:mx-32">
            Getting Started is Simple
          </h1>
          <p className="text-gray-700 mt-3 text-base sm:text-lg md:text-xl lg:text-2xl sm:mx-12 md:mx-32 lg:mx-96">
            Last minute wellness is a community of over 50 million members
            across the world. See how they use our platform to grow their
            careers on our blog
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12 sm:my-16 md:mx-8 lg:mx-12">
          {testimonials.map((testimoniest) => (
            <div key={testimoniest.id}>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={testimoniest.image}
                  alt={testimoniest.imageText}
                  className="rounded-2xl w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 w-full h-[40%] sm:h-[50%] bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h1 className="text-lg sm:text-xl">
                    {testimoniest.imageText}
                  </h1>
                </div>
              </div>
              <h1 className="font-bold my-2 text-lg sm:text-xl">
                {testimoniest.header}
              </h1>
              <p className="text-base sm:text-lg">{testimoniest.testimony}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits secton, cta sign up button*/}
      <section className="flex flex-col">
        <div className="px-4 sm:px-8 md:px-12 lg:!px-24 py-4 md:py-6 lg:!py-10 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] items-center gap-6 md:gap-8">
          <div className="p-2 sm:p-4">
            <div>
              <p className="text-[#0057FF] text-xl sm:text-2xl font-semibold">
                Get Discovered
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mt-2 mb-3">
                Why Practitioners Love Last Minute Wellness
              </h1>
              {aboutServiceLists.map((service) => (
                <div className="flex items-center my-2" key={service.id}>
                  <img
                    src={service.icon}
                    alt={`service-${service.id}`}
                    className="py-2 w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <p className="ml-3 text-base sm:text-lg md:text-xl">
                    {service.text}
                  </p>
                </div>
              ))}
              <div className="bg-[#f6edfd] max-w-2xl mx-1 p-4 my-4 mb-6 rounded-3xl text-lg text-center">
                <p className="mb-2">Ready to Grow your practice?</p>
                <Link to="/register"  className="bg-blue-700 text-white py-2 px-3 rounded-xl">
                  Get Started in minutes
                </Link>
                <p className="mt-3">
                  It only takes a few minutes to list your first availability
                  and start getting clients.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={aboutService}
              alt="illustration"
              className="max-w-[220px] sm:max-w-xs md:max-w-sm w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* PRACTITIONER FAQ SECTION */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 my-4">
          Questions? We’ve Got You Covered
        </h2>
        <div className="max-w-2xl lg:mx-auto py-2 px-2 lg:py-10 lg:px-4">
          <div className="space-y-4 mb-20">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b-2 mb-2">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full text-left px-6 py-2 flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-medium text-black text-xl">
                      {item.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <svg
                        className="w-4 h-4 text-black"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
                      isOpen
                        ? "max-h-96 opacity-100 py-2"
                        : "max-h-0 opacity-0 py-0"
                    }`}
                  >
                    <p className="text-gray-600 text-lg">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
