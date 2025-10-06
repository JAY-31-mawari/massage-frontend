import { useState } from "react";

export function ClientFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const clientFAQ = [
    {
      id: 1,
      question: "1. What is LastMinuteWellness?",
      answer: `<p>LastMinuteWellness is a Canadian booking platform that connects you with last-minute openings for 
      physiotherapy, chiropractic, acupuncture and massage therapy — available at home, on the go (mobile), or in clinics.</p>`,
    },
    {
      id: 2,
      question: "2. Do I need health insurance to use LastMinuteWellness?",
      answer: `<p>No. Anyone can book directly. If you have insurance coverage, you can download your receipt from your account and submit it to your provider for reimbursement.</p>`,
    },
    {
      id: 3,
      question: "3. What kinds of services can I book?",
      answer: `<p>You can book home-based, mobile, or clinic appointments for physiotherapy, chiropractic, acupuncture, and massage therapy.</p>`,
    },
    {
      id: 4,
      question: "4. How far in advance can I book?",
      answer: `<p>At this time, appointments can be booked up to <strong>7 days in advance.</strong></p>`,
    },
    {
      id: 5,
      question: "5. How does booking and confirmation work?",
      answer: `<p>Some practitioners offer <strong>instant auto-approval</strong>. Others review requests:</p>
      <ul class="list-disc ml-6 space-y-2">
        <li>If your request is made <strong>within 2 hours of closing,</strong> they’ll confirm within 20 minutes.</li>
        <li>Otherwise, they’ll confirm by the start of their <strong>next business day.</strong></li>
      </ul>`,
    },
    {
      id: 6,
      question: "6. Do I need to call the clinic or practitioner to confirm?",
      answer: `<p>No. Once you book through LastMinuteWellness, both you and the practitioner receive instant notifications. 
      You’ll be updated when the appointment is confirmed.</p>`,
    },
    {
      id: 7,
      question: "7. What if a practitioner doesn’t confirm my request?",
      answer: `<p>If the practitioner does not confirm, you won’t be charged, and you can simply book another appointment.</p>`,
    },
    {
      id: 8,
      question: "8. How do payments work?",
      answer: `<p>We place a <strong>pre-authorization</strong> on your card at the time of booking, but you’re only charged <strong>after you’ve received the service.</strong></p>`,
    },
    {
      id: 9,
      question: "9. Are there any extra fees for clients?",
      answer: `<p>No. You only pay the service price listed. We do not charge booking fees — only standard credit card processing fees apply.</p>`,
    },
    {
      id: 10,
      question: "10. Can I cancel or reschedule my appointment?",
      answer: `<p>Yes. Cancellations and reschedules are handled according to our 
      <a href="${global.config.URL.url}/refund-&-cancellation" class="text-blue-600 underline">[Cancellation Policy]</a>. 
      Please review it before booking.</p>`,
    },
    {
      id: 11,
      question: "11. What if I don’t show up for my appointment?",
      answer: `<p>No-show policies vary by practitioner. In most cases, a full or partial fee may apply if you miss your appointment without notice.</p>`,
    },
    {
      id: 12,
      question: "12. Is my personal and payment information safe?",
      answer: `<p>Yes. We use industry-leading security standards and comply with Canadian privacy regulations 
      (PIPEDA) to protect your information.</p>`,
    },
    {
      id:13,
      question:"13.  Didn’t find your question here?",
      answer: `<p>Get in touch - Connect contact us here to get in touch <a href='mailto:info@lastminutewellness.ca' class="text-blue-600 underline">info@lastminutewellness.ca</a></p>`
    }
  ];

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <h1 className="font-bold my-6 mb-8 text-3xl text-gray-700 text-center underline">
          FAQs
        </h1>
        <div>
          <div className="max-w-4xl lg:mx-auto py-2 px-2 lg:py-10 lg:px-4">
            <div className="space-y-4 mb-20">
              {clientFAQ.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-b-2 mb-2">
                    <button
                      onClick={() => toggle(index)}
                      className="w-full text-left px-6 py-2 flex justify-between items-center focus:outline-none"
                    >
                      <span className="font-medium text-[#333333] text-xl w-11/12 break-words whitespace-normal">
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
    </div>
  );
}
