import { useState } from "react";
import { Link } from "react-router-dom";
import AboutSerivceBg from "../../assets/img/background/aboutService.png";
import Testimony1 from "../../assets/img/partners/emma-make-2x.webp";
import Testimony2 from "../../assets/img/partners/harbor-bickmore-2x.webp";
import Testimony3 from "../../assets/img/partners/batzorig-regzen-2x.webp";
import { Check, X } from "lucide-react";

export function MerchantAboutUs() {
  const testimonials = [
    {
      id: 1,
      image: Testimony1,
      imageText: "Clinic based practitioner",
      header: "Get discovered by clients",
      testimony: `“Fill gaps in your schedule with new clients who are already nearby.”`,
    },
    {
      id: 2,
      image: Testimony2,
      imageText: "Home based practitioner",
      header: "Offer great services",
      testimony: `“Turn your spare room into a steady client flow without spending on ads.”`,
    },
    {
      id: 3,
      image: Testimony3,
      imageText: "Mobile practitioner",
      header: "Keep More of Your Earnings",
      testimony: `“Make the most of your travel time by getting matched with local last-minute clients.”`,
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
            to="/practitioner-register"
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
          <p className="text-gray-700 mt-3 text-base max-w-4xl mx-auto sm:text-lg md:text-xl lg:text-2xl sm:mx-12 md:mx-32">
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
  <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 pt-6 md:pt-10 lg:pt-14 items-center gap-6 md:gap-10">
    <div className="px-2 sm:px-4">
      <div className="text-center lg:text-left">
        {/* Tagline */}
        <p className="text-[#0057FF] text-lg sm:text-xl md:text-2xl font-semibold">
          Get Discovered
        </p>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight mt-3 mb-5">
          Why Practitioners Love Last Minute Wellness
        </h1>

        {/* Table Section */}
        <section className="pt-10 sm:pt-12">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md bg-white">
                  <table className="w-full border-collapse text-left">
                    <thead className="bg-gray-50 text-gray-800 text-sm sm:text-base">
                      <tr>
                        <th className="p-3 sm:p-4 font-semibold">Features</th>
                        <th className="p-3 sm:p-4 font-semibold">
                          Traditional Marketing
                        </th>
                        <th className="p-3 sm:p-4 font-semibold text-blue-700">
                          Last Minute Wellness
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-700 text-sm sm:text-base">
                      <tr>
                        <td className="p-3 sm:p-4 font-medium text-gray-800">
                          Monthly Fees
                        </td>
                        <td className="p-3 sm:p-4">$500–$2,000</td>
                        <td className="p-3 sm:p-4 flex items-center gap-2 text-green-600 font-semibold">
                          <Check size={18} /> $0
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-medium text-gray-800">
                          Contracts
                        </td>
                        <td className="p-3 sm:p-4">Long-term commitments</td>
                        <td className="p-3 sm:p-4 flex items-center gap-2 text-green-600 font-semibold">
                          <Check size={18} /> None
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-medium text-gray-800">
                          Payment Model
                        </td>
                        <td className="p-3 sm:p-4">Upfront costs</td>
                        <td className="p-3 sm:p-4 flex items-center gap-2 text-green-600 font-semibold">
                          <Check size={18} /> Only when booked
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-medium text-gray-800">
                          Flexibility
                        </td>
                        <td className="p-3 sm:p-4">Limited</td>
                        <td className="p-3 sm:p-4 flex items-center gap-2 text-green-600 font-semibold">
                          <Check size={18} /> Set your own rates & pause anytime
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</section>


      {/* CTA button for practitioner sign up */}
      <div className="flex justify-center">
        <div className="max-w-2xl mx-1 p-4 rounded-3xl text-lg text-center ">
          <p className="mb-4">Ready to Grow your practice?</p>
          <Link
            to="/practitioner-register"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium shadow hover:bg-blue-700 transition"
          >
            Get Started in minutes
          </Link>
          <p className="mt-4 text-base text-gray-500">
            It only takes a few minutes to list your first availability and
            start getting clients.
          </p>
        </div>
      </div>

      {/* PRACTITIONER FAQ SECTION */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-8 my-4">
          Questions? We’ve Got You Covered
        </h2>
        <div className="max-w-3xl lg:mx-auto py-2 px-2 lg:py-10 lg:px-4">
          <div className="space-y-4 mb-20">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b-2 mb-2">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full text-left px-6 py-2 flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-medium text-black text-xl w-10/12 break-words whitespace-normal">
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
                    className={`max-w-2xl transition-all duration-300 ease-in-out px-6 overflow-hidden ${
                      isOpen
                        ? "max-h-96 opacity-100 py-2"
                        : "max-h-0 opacity-0 py-0"
                    }`}
                  >
                    <p className="text-gray-600 text-lg w-11/12 break-words whitespace-normal">
                      {item.answer}
                    </p>
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
