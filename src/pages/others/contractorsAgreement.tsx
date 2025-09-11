export function ContractorAgreement() {
  const contractorAgreement = [
    {
      id: 3,
      title: "Independent Contractor Agreement (Practitioners)",
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
    }
  ];
  return (
    <div className="container py-12 px-8 lg:px-4">
      <div className="lg:max-w-6xl mx-auto">
        <h1 className="font-bold mb-8 text-4xl lg:text-6xl text-blue-500 text-center">
          Independent Contractor Agreement (Practitioners)
        </h1>

        <div className="mb-8">
          {contractorAgreement.map((tcx) => (
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
