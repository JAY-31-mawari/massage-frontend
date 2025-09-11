export function PrivacyPolicy() {
  const privacyPolicy = [
    {
      id: 1,
      title: "Privacy Policy (PIPEDA compliant)",
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
  ];
  return (
    <div className="container py-12 px-8 lg:px-4">
      <div className="lg:max-w-6xl mx-auto">
        <h1 className="font-bold mb-8 text-4xl lg:text-6xl text-blue-500 text-center">
          Privacy Policy (PIPEDA compliant)
        </h1>

        <div className="mb-8">
          {privacyPolicy.map((tcx) => (
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
        </div>
      </div>
    </div>
  );
}
