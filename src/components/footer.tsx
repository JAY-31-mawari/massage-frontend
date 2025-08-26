import { Link } from "react-router-dom";

export default function Footer() {
  const navigations = [
    { name: "Terms & Conditions", path: "/tnc" },
    { name: "FAQs Page", path: "/faq" },
    { name: "Checkout", path: "/checkout" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  const services = [
    { name: "Physiotherapy", path: "/service/physiotherapy" },
    { name: "Chiropractic Care", path: "/service/chiropractic" },
    { name: "Massage Therapy", path: "/service/massage" },
    { name: "Acupuncture", path: "/service/acupuncture" },
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
    <footer className="bg-[#090a13] text-gray-100">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        
        {/* Logo & Address */}
        <div>
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <span className="text-white">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8797 15.375C15.9797 15.075 15.9797 14.775 15.9797 14.475C15.9797 13.775 15.7797 13.075 15.4797 12.475C14.7797 11.275 13.4797 10.475 11.9797 10.475C11.7797 10.475 11.5797 10.475 11.3797 10.575C7.37971 11.075 4.67971 14.575 2.57971 18.075L10.8797 3.675C11.3797 2.775 12.5797 2.775 13.0797 3.675C13.1797 3.875 13.2797 3.975 13.3797 4.175C15.2797 7.575 16.9797 11.675 15.8797 15.375Z"
                  fill="currentColor"
                />
                <path
                  opacity="0.3"
                  d="M20.6797 20.6749C16.7797 20.6749 12.3797 20.275 9.57972 17.575C10.2797 18.075 11.0797 18.375 11.9797 18.375C13.4797 18.375 14.7797 17.5749 15.4797 16.2749C15.6797 15.9749 15.7797 15.675 15.7797 15.375V15.2749C16.8797 11.5749 15.2797 7.47495 13.2797 4.07495L21.6797 18.6749C22.2797 19.5749 21.6797 20.6749 20.6797 20.6749ZM8.67972 18.6749C8.17972 17.8749 7.97972 16.975 7.77972 15.975C7.37972 13.575 8.67972 10.775 11.3797 10.375C7.37972 10.875 4.67972 14.375 2.57972 17.875C2.47972 18.075 2.27972 18.375 2.17972 18.575C1.67972 19.475 2.27972 20.475 3.27972 20.475H10.3797C9.67972 20.175 9.07972 19.3749 8.67972 18.6749Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <h5 className="text-xl font-bold text-white">LMW</h5>
          </Link>
          <p>Collins Street West, Victoria 8007, Canada.</p>
          <p>+1 246-345-0695</p>
          <p>info@example.com</p>
        </div>

        {/* Navigations */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navigations</h4>
          <ul className="space-y-3 pl-0">
            {navigations.map((item, i) => (
              <li key={i}>
                <Link to={item.path} className="text-gray-100 hover:text-white transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-3 pl-0">
            {services.map((item, i) => (
              <li key={i}>
                <Link to={item.path} className="text-gray-100 hover:text-white transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h4 className="text-white font-semibold mb-4">My Account</h4>
          <ul className="space-y-3 pl-0">
            {account.map((item, i) => (
              <li key={i}>
                <Link to={item.path} className="text-gray-100 hover:text-white transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <ul className="space-y-3 pl-0">
            {socials.map((item, i) => (
              <li key={i}>
                <Link to={item.path} target="_blank" className="text-gray-100 hover:text-white transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6 text-sm text-gray-100 flex justify-between items-center">
          <p>
            © {new Date().getFullYear()} LMW. Developed with{" "}
            <span className="text-red-500">♥</span> by{" "}
            <Link to="https://shreethemes.in/" target="_blank" className="text-white">
              Jay
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
