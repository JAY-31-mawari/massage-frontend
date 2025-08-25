import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SideFilter({
  show,
  setShow,
  selectService,
  setSelectService,
  serviceTypes,
}: {
  show: any;
  setShow: any;
  selectService: string;
  setSelectService: any;
  serviceTypes: string[];
}) {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-gray-800">
          Select your Service-Type
        </h4>
      </div>

      {/* Radio Options */}
      <div className="space-y-3">
        <label className="flex items-center gap-3 cursor-pointer text-gray-700 hover:text-blue-600">
          <input
            type="radio"
            name="service"
            checked={selectService === ""}
            onChange={() => setSelectService("")}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
          />
          All
        </label>
        {serviceTypes.map((service, index) => {
          const checked = service === selectService;
          return (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer text-gray-700 hover:text-blue-600"
            >
              <input
                type="radio"
                name="service"
                checked={checked}
                onChange={() => setSelectService(service)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              {service}
            </label>
          );
        })}
      </div>

      {/* Bottom Button */}
      <div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          22 Results Show
        </button>
      </div>
    </div>
  );
}
