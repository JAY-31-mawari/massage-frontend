import { Link } from "react-router-dom";
import error from "../assets/img/404.png";
import ScrollToTop from "../components/scroll-to-top";

export default function Error() {
  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center bg-background px-4 py-12">
        <div className="max-w-lg w-full text-center space-y-6">
          <img
            src={error}
            alt="404 Error - Page Not Found"
            className="mx-auto w-full max-w-xs sm:max-w-sm object-contain"
          />
          <h2 className="text-2xl font-bold text-foreground">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600">
            The page you are looking for doesn’t exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}
