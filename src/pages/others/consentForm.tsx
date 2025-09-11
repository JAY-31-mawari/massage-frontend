export default function ConsentForm() {
  return (
    <div className="container py-12 px-8 lg:px-4">
      <div className="lg:max-w-6xl mx-auto">
        <h1 className="font-bold mb-8 text-4xl lg:text-6xl text-blue-500 text-center">
          Client Waiver & Consent Form
        </h1>

        <div className="mb-8">
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
        </div>
      </div>
    </div>
  );
}
