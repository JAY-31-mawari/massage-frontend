export default function Page() {
  const termsConditions = [
    {
      id: 1,
      title: "1. Privacy Policy (PIPEDA compliant)",
      sections: [
        {
          heading: "What we collect",
          points: [
            "Name, email, phone number",
            "Appointment and payment details",
            "Practitioner credentials and availability",
          ],
        },
        {
          heading: "How we use it",
          points: [
            "To connect clients with practitioners",
            "To process payments",
            "To improve our services",
          ],
        },
        {
          heading: "Sharing",
          points: [
            "We never sell personal data.",
            "Information is shared only with the practitioner you book with, and service providers who help us operate (e.g., payment processors).",
          ],
        },
        {
          heading: "Storage & Security",
          points: [
            "Users can request access, correction, or deletion of their data.",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "2. Terms of Service (Clients & Practitioners)",
      sections: [
        {
          heading: "Platform Role",
          points: [
            "LastMinuteWellness is a booking platform only. We do not provide healthcare services, and we are not responsible for the outcomes of treatments.",
          ],
        },
        {
          heading: "Practitioners",
          points: [
            "Are independent contractors. They are solely responsible for their conduct, licensing, insurance, and the quality of their services.",
          ],
        },
        {
          heading: "Clients",
          points: [
            "Agree that treatments involve inherent risks.",
            "LastMinuteWellness is not responsible for injuries, dissatisfaction with services, property damage, or issues arising during appointments.",
          ],
        },
        {
          heading: "Prohibited Conduct",
          points: [
            "Any harassment, inappropriate behaviour, or unsafe actions will result in suspension from the platform.",
          ],
        },
        {
          heading: "Liability",
          points: [
            "LastMinuteWellness disclaims all liability to the maximum extent permitted by law.",
            "Any disputes are between the client and the practitioner.",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "3. Independent Contractor Agreement (Practitioners)",
      sections: [
        {
          heading: "Status",
          points: [
            "You are an independent contractor, not an employee of LastMinuteWellness.",
          ],
        },
        {
          heading: "You must",
          points: [
            "Maintain valid licenses and insurance.",
            "Follow all local/provincial regulations.",
            "Ensure client safety during treatments.",
          ],
        },
        {
          heading: "Indemnification",
          points: [
            "You indemnify (protect) LastMinuteWellness from any claims arising out of your services, including injuries, negligence, or misconduct.",
          ],
        },
        {
          heading: "Payments",
          points: [
            "LastMinuteWellness collects client payments, deducts commission + processing fees, and remits your balance weekly.",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "4. Cancellation & Refund Policy",
      sections: [
        {
          heading: "Client Cancellations",
          points: [
            "24-48 hours notice → full refund.",
            "<24 hours notice → practitioner may charge up to 50%.",
            "No-show → no refund.",
          ],
        },
        {
          heading: "Practitioner Cancellations",
          points: [
            "If a practitioner cancels, the client receives a full refund and priority to rebook.",
          ],
        },
        {
          heading: "Platform Role",
          points: [
            "Refunds are processed through LastMinuteWellness, but disputes over service quality must be resolved between client and practitioner.",
          ],
        },
        {
          heading: "Technology Related Issues",
          points: [
            "Any concerns relating to lastminutewellness’s platform or technology, e.g., errors in appointment scheduling caused by lastminutewellness technology or technical issues impacting or preventing Provider’s service fulfillment, may be raised at any time directly with lastminutewellness and you may receive a partial or full refund.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="container py-12 px-8 lg:px-4">
      <div className="lg:max-w-6xl mx-auto">
        <h1 className="font-bold mb-8 text-4xl lg:text-6xl text-blue-500 text-center">
          Terms & Conditions
        </h1>

        <div className="mb-8">
          {termsConditions.map((tcx) => (
            <div key={tcx.id}>
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mt-2 lg:mt-10">
                {tcx.title}
              </h1>
              {tcx.sections.map((section) => (
                <div>
                  <p className="ml-6 md:ml-7 lg:ml-8 my-1 md:!my-2 lg:!my-3 text-lg md:text-xl lg:text-2xl font-semibold">
                    {section.heading}
                  </p>
                  <ul className="ml-12 md:ml-16 lg:ml-20 list-disc my-1 mb-4 text-base md:text-lg lg:text-xl">
                    {section.points.map((point) => (
                      <li className="my-1">{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
          <div>
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mt-2 lg:mt-10">
              5. Client Waiver & Consent Form
            </h1>
            <div>
              <p className="ml-6 md:ml-7 lg:ml-8 my-1 md:!my-2 lg:!my-3 text-lg md:text-xl lg:text-2xl">
                By booking an appointment through LastMinuteWellness, you acknowledge and agree:
              </p>
              <ol className="ml-12 md:ml-16 lg:ml-20 my-1 mb-4 list-decimal text-base md:text-lg lg:text-xl">
                <li className="my-1">I understand that LastMinuteWellness is a booking platform, not a healthcare provider.</li>
                <li className="my-1">I accept the risks associated with receiving wellness treatments, including but not limited to:</li>
                <ul className="list-disc ml-7 my-1">
                  <li className="my-1">Slips, falls, or accidents at the treatment location (home, clinic, etc.).</li>
                  <li className="my-1">Adverse reactions to treatment.</li>
                  <li className="my-1">Environmental risks (e.g., pets at home visits, uneven driveways).</li>
                </ul>
                <li className="my-1">I release and hold harmless LastMinuteWellness, its directors, employees, and affiliates from any claims, injuries, or damages related to my appointment.</li>
                <li className="my-1">Any legal claims must be made directly against the practitioner providing the service.</li>
                <li className="my-1">I confirm I am voluntarily choosing to receive treatment and have disclosed all relevant medical conditions to the practitioner.</li>
              </ol>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mt-2 lg:mt-10">
              6. Website Terms of use
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
