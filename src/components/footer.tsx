import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();

  const connects = [
    { name: "Book an Appointment", path: "/serviceList" },
    { name: "Become a Practitioner", path: "/about-service" },
    { name: "FAQ", path:"/faq"},
    { name: "Terms & Conditions", path: "/tnc" },
    { name: "Contact Us", path: "/contact" },

    //     { name: "FAQs Page", path: "/faq" },
    // { name: "Checkout", path: "/checkout" },
    // { name: "Blog", path: "/blog" },
  ];

  const services = [
    { name: "Acupuncture", path: "/service/acupuncture" },
    { name: "Chiropractic Care", path: "/service/chiropractic" },
    { name: "Massage Therapy", path: "/service/massage" },
    { name: "Physiotherapy", path: "/service/physiotherapy" },
  ];

  const account = [
    { name: "My Profile", path: "#" },
    { name: "My Account", path: "#" },
    { name: "My Property", path: "#" },
  ];

  const socials = [
    { name: "Facebook", path: "https://www.facebook.com/shreethemes" },
    { name: "Twitter", path: "https://x.com/shreethemes" },
    { name: "Instagram", path: "https://www.instagram.com/shreethemes/" },
    { name: "LinkedIn", path: "https://www.linkedin.com/company/shreethemes" },
  ];

  return (
    <footer className="bg-[#090a13] text-gray-100 pt-10 pb-4 px-6 tracking-widest">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-14 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div>
                <span className="font-bold text-3xl tracking-wider">
                  Last Minute Wellness
                </span>
                {/* <div className="text-sm text-background/70 font-bold tracking-widest uppercase">
                  WELLNESS SPA
                </div> */}
              </div>
            </div>
            <p className="text-background/80 text-xl leading-relaxed mb-8 max-w-md font-medium">
              Your premier destination for transformative massage therapy and
              luxury wellness experiences.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-8">Signature Treatments</h4>
            <ul className="space-y-4 text-background/80 text-lg">
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

          <div>
            <h4 className="font-bold text-xl mb-8">Connect</h4>
            <ul className="space-y-4 text-background/80 text-lg">
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
        </div>

        <div className="border-t border-background/20 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 mb-6 md:mb-0 font-medium text-lg">
            &copy; 2024 Last Minute Wellness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
