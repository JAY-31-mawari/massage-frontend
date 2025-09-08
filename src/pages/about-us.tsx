export default function AboutUs() {
  return (
    <>
      <div className="container py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bold mb-8 text-5xl text-blue-500">About Us</h1>

          <div className="space-y-6 text-2xl">
            <p className="font-bold">
              At Last Minute Wellness, we make accessing wellness services in
              Canada simple, fast, and stress-free.
            </p>
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

            <p>
              Our mission is clear:
              <span className="font-bold">
                {" "}
                to make wellness accessible, effortless, and timely—so you can
                put your health first, even on your busiest days
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
