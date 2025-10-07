import Founder from "../../assets/img/Founder.png";
import { FaLinkedin } from "react-icons/fa";

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
      {/* Hero Section */}
      <div className="text-white min-h-[420px] bg-gradient-to-t from-emerald-700 via-emerald-500 to-emerald-400 flex flex-col justify-center items-center px-4 text-center">

        <h1 className="font-bold text-3xl md:text-4xl underline mb-6">
          About Us
        </h1>
        <div className="max-w-5xl mx-auto">
          <p className="text-lg md:text-xl mb-4">Our mission is clear:</p>
          <p className="font-semibold text-2xl md:text-4xl leading-snug">
            To make wellness accessible, effortless, and timely — so you can put
            your health first, even on your busiest days.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto space-y-32 mt-16 px-4">
        <div className="max-w-4xl text-[#333333]">
          <h3 className="text-2xl md:text-4xl font-semibold my-4">
            At Last Minute Wellness, we make accessing wellness services in
            Canada simple, fast, and stress-free
          </h3>
          <div className="max-w-3xl text-base md:text-xl space-y-4">
            <p>
              In today’s busy world, finding a last-minute appointment for
              physiotherapy, chiropractic care, acupuncture, or other wellness
              services shouldn’t mean endless phone calls or scrolling through
              multiple websites.
            </p>
            <p>
              We connect you with real-time availability, so you can book the
              care you need — right when you need it.
            </p>
            <p>
              For practitioners, we take the frustration out of last-minute
              cancellations and empty spots. Our platform brings you new clients
              and helps keep your schedule full, so you can focus on what
              matters most: delivering quality care.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h4 className="text-center text-2xl md:text-4xl font-semibold mb-8">
            Our Core Values
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-[#333333] [perspective:1000px]">
            {ethics.map((ethic) => (
              <div
                key={ethic.id}
                className="group relative h-56 md:h-72 p-6 rounded-xl border border-gray-200 bg-white shadow-sm 
                       transition-all duration-700 ease-in-out cursor-pointer hover:shadow-lg"
              >
                <div className="flex flex-col justify-center items-center h-full">
                  <h4
                    className="font-semibold text-xl md:text-2xl transition-all duration-500 ease-in-out 
                           translate-y-[80px] group-hover:translate-y-0 group-hover:mb-3"
                  >
                    {ethic.name}
                    <span className="font-extrabold group-hover:hidden transition-opacity duration-300">
                      {" "}
                      ↓
                    </span>
                  </h4>
                  <p className="text-sm md:text-lg opacity-0 duration-300 ease-in-out group-hover:opacity-100">
                    {ethic.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-[#333333]">
          <div className="max-w-3xl space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Words from our Founder & CEO
            </h3>
            <div className="text-base italic space-y-2">
              <p>
              "At Last Minute Wellness, our mission began with something deeply
              personal.
              </p>
              <p>
              I’m Utkarsh Dev Kaushik. For over a decade, I’ve worked in
              financial services, but my most important role has been at home —
              as a father. My son was born medically complex, and caring for him
              took a toll on my body and mind. I even developed tennis elbow
              from the daily strain, making simple tasks painful.
              </p>
              <p>
              During recovery, I struggled to access physiotherapy and wellness
              care when I needed it most. I often had to call multiple clinics
              or scour websites just to find a last-minute appointment. Long
              wait times and tricky booking processes made me think: there has
              to be a better way.
              </p>
              <p>
              That’s how Last Minute Wellness was born — a platform to connect
              people instantly with physiotherapists, chiropractors,
              acupuncturists, and other wellness providers, just like ordering
              food or booking a ride.
              </p>
              <p>
              Our goal is simple: make wellness accessible, reduce barriers, and
              help people get the care they need — without the stress I faced.
              </p>
              <p>Last Minute Wellness isn’t just a booking platform. It’s a bridge
              between clients and practitioners, built on empathy, experience,
              and a passion for healthier communities. Because sometimes, care
              can’t wait."</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <a
                href="https://www.linkedin.com/in/utkarsh-kaushik-3b6372106/" // replace with actual LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <FaLinkedin className="w-6 h-6" />
                <span className="font-semibold">Utkarsh Kaushik</span>
              </a>
            </div>
          </div>
          <img
            className="w-52 h-52 md:w-80 md:h-80 object-cover shadow-md rounded-lg"
            src={Founder}
            alt="founder-image"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-24 mb-8 px-4">
        <p className="text-sm md:text-base">
          For any queries or information, contact us at{" "}
          <a
            href="mailto:info@lastminutewellness.ca"
            className="text-blue-600 underline"
          >
            info@lastminutewellness.ca
          </a>
        </p>
      </div>
    </div>
  );
}
