import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import map from "../assets/img/svg/map-1.svg";
import TinySlider from "tiny-slider-react";
import "../../node_modules/tiny-slider/dist/tiny-slider.css";
import { setStorageItem } from "../utils/sessionStorage";
import { useMerchantStore } from "../store/merchantStore";
import { Service } from "./interfaces";

const settings = {
  items: 1,
  controls: false,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  nav: true,
  speed: 400,
  gutter: 0,
};

export default function ServiceCardLayout({ item }: { item: Service }) {
  const navigate = useNavigate();
  const updateMerchant = useMerchantStore((state) => state.updateMerchant);

  const handleSelectService = () => {
    setStorageItem("merchant-data", JSON.stringify(item));
    updateMerchant(item);
    navigate(`/service`);
  };

  return (
    <div
      onClick={handleSelectService}
      className="flex flex-row rounded-2xl shadow bg-red hover:shadow-md transition cursor-pointer h-[250px] overflow-hidden p-3"
    >
      {/* Left: Image Section */}
      <div className="w-[250px] h-full flex-shrink-0">
        <div className="relative h-full">
          <div className="h-full">
            <div className="h-full rounded-xl overflow-hidden">
              <TinySlider settings={settings}>
                {item?.businessPhotos &&
                  item.businessPhotos.map((el, index) => (
                    <div key={index} className="h-full">
                      <img
                        src={el}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
              </TinySlider>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Content Section */}
      <div className="flex flex-col justify-between flex-grow px-4 py-2 h-full">
        {/* Top: Title & Location */}
        <div>
          <h4 className="text-lg font-semibold mb-1">{item.businessName}</h4>
          <h6 className="text-sm text-gray-600">{item.businessType}</h6>
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <img src={map} alt="" className="w-4 h-4 mr-1" />
            {item.merchantAddress}
          </div>
        </div>

        {/* Price & Icons */}
        <div className="flex items-center justify-between my-2">
          <h6 className="text-blue-600 font-semibold text-base">$150</h6>
          <div className="flex items-center space-x-2">
            <Link
              to="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
            >
              <i className="fa-solid fa-code-compare"></i>
            </Link>
            <Link
              to="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition"
            >
              <i className="fa-solid fa-envelope-open-text"></i>
            </Link>
            <Link
              to="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition"
            >
              <i className="fa-solid fa-heart-circle-check"></i>
            </Link>
          </div>
        </div>

        {/* Footer: Rating */}
        <div className="flex items-center justify-between border-t pt-2">
          <div>
            <div className="flex mb-1">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className="fa-solid fa-star text-yellow-400 text-sm mx-[2px]"
                ></i>
              ))}
            </div>
            <span className="text-gray-500 text-xs">47 Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}
