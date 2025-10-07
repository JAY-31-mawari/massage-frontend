import { Link } from "react-router-dom";

export default function FooterTop({ bg }: { bg: any }) {
  return (
    <section className={`${bg}`}>
      <div className="w-full">
        <div className="bg-blue-500 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 p-8">
          {/* Left Content */}
          <div className="sm:text-center !text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Want to Become a Practitioner?
            </h3>
            <span className="text-lg opacity-90">
              Grow your business, connect with new clients, and take control of your schedule.
            </span>
            
          </div>

          {/* Button */}
          <Link
            to="/about-service"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
          >
            Sign Up Today
          </Link>
        </div>
      </div>
    </section>
  );
}
