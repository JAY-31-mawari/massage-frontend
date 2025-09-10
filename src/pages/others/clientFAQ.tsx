export function ClientFAQ() {
  const clientFAQ = [
    {
      id: 1,
      question: "1. Do I need health insurance to use LastMinuteWellness?",
      answer:
        "No. Anyone can book directly. If you have insurance coverage, you can simply download your receipt from your account and submit it to your provider for reimbursement.",
    },
    {
      id: 2,
      question: "2. How does it work?",
      answer:
        "Simply search for the type of service you need, view real-time availability from local practitioners, and book instantly. You’ll receive a confirmation once the practitioner accepts your appointment.",
    },
    {
      id: 3,
      question: "3. Do I need to call the clinic to confirm my appointment?",
      answer:
        "No. Once you book through LastMinuteWellness, both you and the practitioner receive instant notifications. The practitioner confirms within 15 minutes, and your spot is secured.",
    },
    {
      id: 4,
      question: "4. What happens if a practitioner doesn’t confirm?",
      answer:
        "If the practitioner does not confirm within 15 minutes, you won’t be charged, and you’re free to book another appointment.",
    },
    {
      id: 5,
      question: "5. How do payments work?",
      answer:
        "We place a pre-authorization on your card at the time of booking, but you’re only charged after you’ve received the service.",
    },
    {
      id: 6,
      question:
        "6. Are there any extra fees for booking through LastMinuteWellness?",
      answer:
        "No. You only pay the price listed for the service. There are no hidden charges for clients.",
    },
    {
      id: 7,
      question: "7. Can I cancel or reschedule my booking?",
      answer:
        "Yes, as per the practitioner’s cancellation policy, which will be shown before you confirm your booking.",
    },
    {
      id: 8,
      question: "8. What if I don’t show up for my appointment?",
      answer:
        "No-show policies vary by practitioner. In most cases, you may be charged the full or partial fee if you miss your appointment without notice.",
    },
    {
      id: 9,
      question: "9. Is my personal and payment information safe?",
      answer:
        "Yes. We use industry-leading security standards and comply with Canadian privacy regulations (PIPEDA) to protect your information.",
    },
    {
      id: 10,
      question: "10. Which wellness services are available?",
      answer:
        " We currently support physiotherapy, chiropractic, acupuncture, and massage therapy.",
    },
  ];

  return (
    <div className="container py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-bold mb-8 text-5xl text-blue-500 text-center">FAQs</h1>

        {clientFAQ.map((faq, index) => (
          <div key={index} className="mb-8">
            <h1 className="font-semibold text-xl lg:text-2xl">{faq.question}</h1>

            <div>
              <p className="text-lg lg:text-xl mt-2 mb-4 ml-8">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
