import { useState } from "react";
import { Link } from "react-router-dom";
import AboutSerivceBg from "../../assets/img/background/aboutService.png";
import Home from "../../assets/img/partners/home.png";
import Mobile from "../../assets/img/partners/mobile.png";
import Clinic from "../../assets/img/partners/clinic.png";
import { Check, X } from "lucide-react";

export function MerchantAboutUs() {
  const testimonials = [
    {
      id: 1,
      image: Clinic,
      imageText: "Clinic based practitioner",
      header: "Get discovered by clients",
      testimony: `Fill gaps in your schedule with new clients who are already nearby.`,
    },
    {
      id: 2,
      image: Home,
      imageText: "Home based practitioner",
      header: "Offer great services",
      testimony: `Turn your spare room into a steady client flow without spending on ads.`,
    },
    {
      id: 3,
      image: Mobile,
      imageText: "Mobile practitioner",
      header: "Keep More of Your Earnings",
      testimony: `Make the most of your travel time by getting matched with local last-minute clients.`,
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "1. What is LastMinuteWellness?",
      answer: `<p>LastMinuteWellness is a Canadian booking platform connecting clients with 
      last-minute openings for physiotherapy, chiropractic, acupuncture 
      and massage therapy — available at home, on the go (mobile), or in clinics.</p>`,
    },
    {
      id: 2,
      question: "2. Do I need to be a registered professional?",
      answer: `<p>Yes. If your field is a regulated profession, you must provide your 
      registration details.</p>`,
    },
    {
      id: 3,
      question: "3. What if my field is not regulated?",
      answer: `<p>You must be affiliated with a reputable professional association 
      relevant to your service.</p>`,
    },
    {
      id: 4,
      question: "4. Do I need insurance?",
      answer: `<p>Yes. All practitioners must provide proof of 
      professional liability insurance before activating their profile.</p>`,
    },
    {
      id: 5,
      question: "5. How are background checks conducted?",
      answer: `<p>Professional background checks are handled through <strong>Triton</strong>, 
      and you pay for them directly.</p>`,
    },
    {
      id: 6,
      question: "6. How is my payment handled?",
      answer: `<p>You don’t need to manage client payments. Your <strong>commission for the week</strong>
      will be deposited into your account <strong>on Wednesday of the following week.</strong></p>`,
    },
    {
      id: 7,
      question: "7. How far in advance can I schedule my availability?",
      answer: `<p>You can upload your schedule for a <strong>maximum of 1 week at a time.</strong></p>`,
    },
    {
      id: 8,
      question: "8. How does booking approval work?",
      answer: `<p>You can choose between:</p>
    <ul class="list-disc ml-6 space-y-2">
      <li><strong>Automatic approval</strong> – client appointments are confirmed instantly.</li>
      <li><strong>Manual approval</strong> – confirm requests via email or text. Responses are expected:
        <ul class="list-disc ml-6 mt-2">
          <li>Within 20 minutes for same-day or near-closing requests</li>
          <li>By the start of the next business day for other requests</li>
        </ul>
      </li>
    </ul>`,
    },
    {
      id: 9,
      question: "9. What happens if I forget to confirm an appointment?",
      answer: `<p>If you don’t confirm within your chosen timeframe, the booking will 
      <strong>automatically expire</strong>, and the client won’t be charged.</p>`,
    },
    {
      id: 10,
      question: "10. Do I need to provide receipts for insurance purposes?",
      answer: `<p>No. Our platform automatically provides <strong>official receipts</strong> 
      (including your license details) that clients can use for insurance reimbursement.</p>`,
    },
    {
      id: 11,
      question: "11. What is the commission structure?",
      answer: `
    <div class="overflow-x-auto w-full">
      <table class="min-w-full border border-gray-300 text-left text-sm border-collapse">
        <thead class="bg-gray-100">
          <tr>
            <th class="border border-gray-300 px-4 py-2">Service</th>
            <th class="border border-gray-300 px-4 py-2">Physiotherapy</th>
            <th class="border border-gray-300 px-4 py-2">Chiropractor</th>
            <th class="border border-gray-300 px-4 py-2">Acupuncture</th>
            <th class="border border-gray-300 px-4 py-2">Massage</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-gray-50">
            <td class="border border-gray-300 px-4 py-2 font-semibold">Clinic Based</td>
            <td class="border border-gray-300 px-4 py-2">25%</td>
            <td class="border border-gray-300 px-4 py-2">25%</td>
            <td class="border border-gray-300 px-4 py-2">25%</td>
            <td class="border border-gray-300 px-4 py-2">15%</td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="border border-gray-300 px-4 py-2 font-semibold">Home Based</td>
            <td class="border border-gray-300 px-4 py-2">NA</td>
            <td class="border border-gray-300 px-4 py-2">NA</td>
            <td class="border border-gray-300 px-4 py-2">NA</td>
            <td class="border border-gray-300 px-4 py-2">20%</td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="border border-gray-300 px-4 py-2 font-semibold">Mobile</td>
            <td class="border border-gray-300 px-4 py-2">NA</td>
            <td class="border border-gray-300 px-4 py-2">NA</td>
            <td class="border border-gray-300 px-4 py-2">NA</td>
            <td class="border border-gray-300 px-4 py-2">22%</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="mt-3 text-sm text-gray-600">
        <em>* A <strong>1.3% card processing fee applies.</strong></em>
      </p>
  `,
    },

    {
      id: 12,
      question: "12. What is the cancellation and refund policy?",
      answer: `
    <p>High-level overview:</p>
    <ul class="list-disc ml-6 space-y-2">
      <li><strong>Within 24 hours</strong> of the appointment: 0% refund</li>
      <li><strong>24–48 hours</strong> before the appointment: 50% refund</li>
      <li><strong>More than 48 hours</strong> before the appointment: 100% refund</li>
    </ul>
    <p class="mt-3 text-sm text-gray-600">
      For full details, please see our
      <a href="${global.config.URL.url}/refund-&-cancellation" class="text-blue-600 underline">[Cancellation & Refund Policy]</a>.
    </p>
  `,
    },
    {
      id: 13,
      question: "13. What if I double-book?",
      answer: `<p>[Answer to be provided by me]</p>`,
    },
    {
      id: 14,
      question: "14. Who do I contact for support?",
      answer: `<p>For any questions or issues, reach out to the LastMinuteWellness support 
      team via <a href='mailto:info@lastminutewellness.ca' class="text-blue-600 underline">info@lastminutewellness.ca</a>.</p>`,
    },
    {
      id: 15,
      question:
        "15. What types of appointments can I offer on LastMinuteWellness?",
      answer: `<p>At this time, we only allow <strong>initial assessments and 
      treatment appointments</strong> for acupuncture, chiropractic, physiotherapy and massage-therapy. 
      Follow-up appointments should be booked through your in-house system if needed.</p>`,
    },
    {
      id:16,
      question:"16.  Didn’t find your question here?",
      answer: `<p>Get in touch - Connect contact us here to get in touch <a href='mailto:info@lastminutewellness.ca' class="text-blue-600 underline">info@lastminutewellness.ca</a></p>`
    }
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
              We help wellness practitioners acquire clients, reduce empty
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
            Growing community, across Canada
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
                <div className="absolute bottom-0 left-0 w-full h-[40%] sm:h-[50%] bg-gradient-to-t from-black/80 to-transparent"></div>
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
                              <th className="p-3 sm:p-4 font-semibold">
                                Features
                              </th>
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
                              <td className="p-3 sm:p-4">
                                Long-term commitments
                              </td>
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
                                <Check size={18} /> Set your own rates & pause
                                anytime
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
          <p className="mb-4">Excited to take your business to the next level?</p>
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
        <div className="max-w-4xl lg:mx-auto py-2 px-2 lg:py-10 lg:px-4">
          <div className="space-y-4 mb-20">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b-2 mb-2">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full text-left px-6 py-2 flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-medium text-[#333333] text-xl w-10/12 break-words whitespace-normal">
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
                    <div
                      className="text-gray-600 text-lg w-11/12 break-words whitespace-normal"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    ></div>
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
