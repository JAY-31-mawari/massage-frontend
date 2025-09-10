export function Refund() {
  const refundPoints = [
    {
      id: 1,
      header: "1. Cancellation Window",
      points: [
        "Appointments may be cancelled or rescheduled up to 48 hours in advance at no charge.",
      ],
    },
    {
      id: 2,
      header: "2. Late Cancellations",
      points: [
        "Cancellations made less than 24 hours before the appointment will be subject to a 50% fee of the scheduled service.",
      ],
    },
    {
      id: 3,
      header: "3. No-Shows",
      points: [
        "Clients who do not attend their scheduled appointment without prior notice will be charged the full appointment fee.",
      ],
    },
    {
      id: 4,
      header: "4. Practitioner Cancellations",
      points: [
        "If a practitioner cancels an appointment, clients will receive a full refund and assistance in rebooking another appointment as quickly as possible.",
      ],
    },
    {
      id: 5,
      header: "5. Emergencies",
      points: [
        "We understand emergencies happen. Exceptions may be made in cases of illness, emergencies, or other unforeseen circumstances.",
      ],
    },
  ];

  return (
    <div className="container py-12 px-8 lg:px-4 text-xl lg:text-2xl">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-bold mb-8 text-4xl lg:text-6xl text-blue-500 text-center">
          Cancellation & No-Show Policy
        </h1>

        <p className="mb-4">
          At LastMinuteWellness, we respect both our clients’ time and our
          practitioners’ schedules. To ensure fairness and availability for
          everyone, the following cancellation policy applies to all
          appointments booked through our platform:
        </p>

        <div className="mb-8">
          {refundPoints.map((refund) => (
            <div>
              <h1 className="font-semibold">{refund.header}</h1>
              <ul className="ml-14 list-disc mt-2 mb-4">
                {refund.points.map((point)=>(
                  <li>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
