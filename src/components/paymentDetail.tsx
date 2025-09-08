export default function Payment() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-10">
          {/* Payment Detail Info */}
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="mb-6">
              <ul className="flex gap-6 text-gray-600 text-sm font-medium">
                <li className="flex items-center gap-2 text-blue-600">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">
                    ✓
                  </span>
                  Customer Detail
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200">
                    2
                  </span>
                  Payment Information
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200">
                    3
                  </span>
                  Confirmation!
                </li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold mb-4">Billing Detail</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  value={"Calvin"}
                  readOnly
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  value="resido@gmail.com"
                  readOnly
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  value="+12 4578 4667"
                  readOnly
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Country<span className="text-red-500">*</span>
                </label>
                <select className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200">
                  <option value="">&nbsp;</option>
                  <option value="1">United States</option>
                  <option value="2">United Kingdom</option>
                  <option value="3">India</option>
                  <option value="4">Canada</option>
                </select>
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  City<span className="text-red-500">*</span>
                </label>
                <select className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200">
                  <option value="">&nbsp;</option>
                  <option value="1">Canada, USA</option>
                  <option value="2">California</option>
                  <option value="3">New York</option>
                  <option value="4">Liverpool</option>
                </select>
              </div>
            </div>

            {/* Special Instruction */}
            <div className="mt-6">
              <label className="block text-sm font-medium mb-1">
                Special Instruction
              </label>
              <textarea className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"></textarea>
            </div>

            {/* Checkbox */}
            <div className="mt-4 flex items-center gap-2">
              <input
                id="a-2"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="a-2" className="text-sm">
                Create An Account
              </label>
            </div>

            {/* Next Step */}
            <div className="mt-6 text-center">
              {/* <Link
                to="#"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Next Step
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
