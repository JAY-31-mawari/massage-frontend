import Founder from "../../assets/img/Founder.png";
import AboutBg from "../../assets/img/background/images.jpeg"

export default function AboutUs() {
  const ethics = [
    {
      id: 1,
      name: "Accessibility",
      content:
        "Our ethical commitment is to dismantle the barriers of complexity and delay, making essential wellness services like physiotherapy, chiropractic care, and acupuncture accessible, immediate, and simple for everyone, especially on their busiest days",
    },
    {
      id: 2,
      name: "Efficiency",
      content:
        "We are ethically driven to eliminate waste—the wasted time of clients making endless calls and the wasted opportunity of practitioners dealing with last-minute cancellations",
    },
    {
      id: 3,
      name: "Simplicity",
      content: `We believe that booking your wellness should be the simplest part of your health journey. We take the "stress-free" approach—eliminating the frustration of endless searching—so that every client can easily and confidently put their health first`,
    },
  ];

  return (
    <div>
      <div className="text-white h-[420px] bg-gradient-to-r from-emerald-700 via-emerald-500 to-teal-400">
        <h1 className="text-center font-bold pt-6 text-3xl underline">
          About us
        </h1>
        <div className="max-w-5xl mx-auto text-center py-24">
          <p>Our mission is clear: </p>
          <p className="font-semibold text-4xl">
            <span>
              To make wellness accessible, effortless, and timely—so you can put
              your health first, even on your busiest days
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-28 mt-20">
        <div className="max-w-4xl text-[#333333]">
          <h3 className="text-3xl font-semibold my-4">
            At Last Minute Wellness, we make accessing wellness services in
            Canada simple, fast, and stress-free
          </h3>
          <div className="max-w-3xl text-lg">
            <p>
              In today’s busy world, finding a last-minute appointment for
              physiotherapy, chiropractic care, acupuncture, or other wellness
              services shouldn’t mean endless phone calls or scrolling through
              multiple websites.
            </p>
            <p>
              We connect you with real-time availability, so you can book the
              care you need—right when you need it.
            </p>
            <p>
              For practitioners, we take the frustration out of last-minute
              cancellations and empty spots. Our platform brings you new clients
              and helps keep your schedule full, so you can focus on what
              matters most: delivering quality care.
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-center text-4xl font-semibold mb-4">
            Our core values
          </h4>
          <div className="grid grid-cols-3 gap-8 text-[#333333] [perspective:1000px]">
            {ethics.map((ethic) => (
              <div
                key={ethic.id}
                className="group relative h-64 p-6 overflow-hidden rounded-xl border border-gray-200 
                       shadow-sm transform transition-all duration-700 ease-in-out cursor-pointer                        
                       "
              >
                <div className="flex flex-col justify-center items-center">
                  <h4
                    className="font-semibold text-3xl
                               transition-all duration-500 ease-in-out 
                               translate-y-[70px]
                               group-hover:text-2xl group-hover:mb-3 group-hover:translate-y-[0px]"
                  >
                    {ethic.name}
                    <span className="font-extrabold group-hover:hidden transition-opacity duration-300">
                      {" "}
                      ↓
                    </span>
                  </h4>
                  <p className="text-base opacity-0 duration-300 ease-in-out group-hover:opacity-100">
                    {ethic.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-around mb-4 text-[#333333]">
          <div className="max-w-3xl space-y-1">
            <h3 className="text-3xl font-semibold my-4">
              Words from our Founder & CEO
            </h3>
            <p className="text-lg italic">
              "Wellness should be simple, accessible, and never out of reach. At
              Last Minute Wellness, our mission is to connect people with the
              right care at the right time—and to help practitioners focus on
              what truly matters: healing lives, not filling schedules"
            </p>
            <p className="text-right mr-4">
              - <span className="font-semibold underline">Utkarsh Kaushik</span>
            </p>
          </div>

          <img
            className="w-[300px] h-[300px] object-cover shadow-md"
            src={Founder}
            alt="founder-image"
          />
        </div>
      </div>

      <div className="text-center mt-40 mb-4">
        <p>
          For any queries or information, contact us at{" "}
          <a href="lastminutewellness@ca" className="text-blue-600 underline">
            lastminutewellness@ca
          </a>
        </p>
      </div>
    </div>
  );
}
