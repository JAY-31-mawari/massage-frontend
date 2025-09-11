export function WebsiteTermsOfUse() {
  const websiteTerms = [
    {
      id: 1,
      title: "Website Terms of use",
      sections: [
        {
          heading: "",
          points: [""],
        },
      ],
    },
  ];
  return (
    <div className="container py-12 px-8 lg:px-4">
      <div className="lg:max-w-6xl mx-auto">
        <h1 className="font-bold mb-8 text-4xl lg:text-6xl text-blue-500 text-center">
          Website Terms of use
        </h1>

        <div className="mb-8">
          {websiteTerms.map((tcx) => (
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
