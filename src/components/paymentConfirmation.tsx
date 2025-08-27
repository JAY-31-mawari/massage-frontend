export default function Payment() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-10">
          {/* Payment Confirmation Message */}
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-green-600 text-4xl mb-2">✔✔</div>
              <h4 className="text-xl font-semibold mb-2">
                Thank You, Your Booking Order Confirmed!
              </h4>
              <p className="text-gray-600 mb-6">
                A confirmation mail has been sent to your email. Check your
                inbox.
              </p>
            </div>
            <div className="text-left">
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="font-medium">Booking ID/Num.:</span>{" "}
                  #BK1254872
                </li>
                <li>
                  <span className="font-medium">First Name:</span> Calvin
                </li>
                <li>
                  <span className="font-medium">Last Name:</span> Carlo
                </li>
                <li>
                  <span className="font-medium">Email:</span> resido@gmail.com
                </li>
                <li>
                  <span className="font-medium">Phone:</span> 91 235 458 7458
                </li>
                <li>
                  <span className="font-medium">City:</span> California
                </li>
                <li>
                  <span className="font-medium">Country:</span> United States
                </li>
                <li>
                  <span className="font-medium">Location:</span> New Besil,
                  Liverpool
                </li>
                <li>
                  <span className="font-medium">Zip:</span> 215467
                </li>
              </ul>
              <hr className="my-4" />
              <h4 className="text-lg font-semibold mb-2">Payment Detail</h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
