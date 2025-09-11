import path from "path";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();

  const services = [
    { name: "Acupuncture", path: "/service/acupuncture" },
    { name: "Chiropractic Care", path: "/service/chiropractic" },
    { name: "Massage Therapy", path: "/service/massage" },
    { name: "Physiotherapy", path: "/service/physiotherapy" },
  ];

  const connects = [
    { name: "Book an Appointment", path: "/serviceList" },
    { name: "Become a Practitioner", path: "/about-service" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  const getToKnowUs = [
    { name: "Consent Form", path: "/consent-form" },
    { name: "Contractor Agreement", path: "/contractor-agreement" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Refund Policy", path: "/refund-&-cancellation" }
  ];

  return (
    <footer className="bg-[#090a13] text-gray-100 pt-16 pb-4 lg:px-6 ">
      <div className="container max-w-8xl">
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-6 mb-20 mx-12 lg:text-lg text-center md:!text-start">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-1 mb-8">
              <div>
                <span className="font-bold text-3xl tracking-wider">
                  Last Minute Wellness
                </span>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-8 max-w-md text-xl lg:tracking-wider">
              Your premier destination for transformative massage therapy and
              luxury wellness experiences.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl lg:text-2xl mb-8">Signature Treatments</h4>
            <ul className="space-y-3 lg:space-y-4 text-background/80 tracking-widest">
              {services.map((service) => (
                <li
                  onClick={() => navigate(service.path)}
                  className="hover:text-background transition-colors cursor-pointer font-medium hover:underline hover:decoration-white hover:decoration-2"
                >
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pl-4">
            <h4 className="font-bold text-xl lg:text-2xl mb-8">Connect</h4>
            <ul className="space-y-3 lg:space-y-4 text-background/80 tracking-widest">
              {connects.map((type) => (
                <li
                  onClick={() => navigate(type.path)}
                  className="hover:text-background transition-colors cursor-pointer font-medium hover:underline hover:decoration-white hover:decoration-2"
                >
                  {type.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xl lg:text-2xl mb-8">Get To Know Us</h4>
            <ul className="space-y-3 lg:space-y-4 text-background/80 tracking-widest">
              {getToKnowUs.map((type) => (
                <li
                  onClick={() => navigate(type.path)}
                  className="hover:text-background transition-colors cursor-pointer font-medium hover:underline hover:decoration-white hover:decoration-2"
                >
                  {type.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 mb-6 md:mb-0 font-medium text-lg">
            &copy; 2024 Last Minute Wellness. All rights reserved.
          </p>
          <div>
            <ul className="flex tracking-tight lg:tracking-widest">
              <li
                onClick={() => navigate("/terms-of-use")}
                className="hover:text-background transition-colors cursor-pointer font-medium hover:underline hover:decoration-white hover:decoration-2 mx-4"
              >
                Terms of Use
              </li>
              <li
                onClick={() => navigate("/terms-of-service")}
                className="hover:text-background transition-colors cursor-pointer font-medium hover:underline hover:decoration-white hover:decoration-2 mx-4"
              >
                Terms of Service
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
