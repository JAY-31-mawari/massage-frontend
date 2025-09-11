export function TermsOfService() {
  const termsOfService = [
    {
      id: 2,
      title: "Terms of Service (Clients & Practitioners)",
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
    }
  ];
  return (
    <div className="container py-12 px-8 lg:px-4">
      <div className="lg:max-w-6xl mx-auto">
        <h1 className="font-bold mb-8 text-4xl lg:text-6xl text-blue-500 text-center">
          Privacy Policy (PIPEDA compliant)
        </h1>

        <div className="mb-8">
          {termsOfService.map((tcx) => (
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
