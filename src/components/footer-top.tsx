import { useNavigate } from "react-router-dom";

export default function FooterTop({ bg }: { bg: any }) {
  const navigate = useNavigate()
  return (
    <section className={`${bg}`}>
      <div className="w-full">
        <div className="bg-blue-500 text-white shadow-lg flex flex-col md:flex-row items-center justify-center gap-6 py-10">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-3xl font-bold mb-2">
              Want to Become a Practitioner?
            </h3>
            <p className="my-2 text-2xl opacity-90">
              We'll help you to grow your career and growth.
            </p>
            <button
              onClick={() => navigate("/practitioner-register")}
              className="bg-white text-blue-600 text-lg font-semibold px-6 py-3 mt-4 rounded-xl shadow hover:bg-gray-100 transition"
            >
              Sign Up Today
            </button>
          </div>

          {/* Button */}
        </div>
      </div>
    </section>
  );
}
