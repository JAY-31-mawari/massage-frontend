import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import map from '../assets/img/svg/map-1.svg'
import TinySlider from "tiny-slider-react";
import "../../node_modules/tiny-slider/dist/tiny-slider.css";
import { setStorageItem } from "../utils/sessionStorage";
import { useMerchantStore } from "../store/merchantStore";
import { Service } from './interfaces';

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

export default function ServiceLayout({ item }: { item: Service }) {
  const navigate = useNavigate();
  const updateMerchant = useMerchantStore((state) => state.updateMerchant);

    const handleSelectService = () => {
        setStorageItem('merchant-data', JSON.stringify(item))
        updateMerchant(item)
        navigate(`/single-property-1/${item._id}`)
    }

  return (
    <div
      className="property-listing card border-0 rounded-3 p-3 d-flex flex-row align-items-stretch"
      onClick={handleSelectService}
      style={{ height: "250px" }} // fixed overall height
    >
      {/* Left: Image Section */}
      <div
        className="listing-img-wrapper flex-shrink-0"
        style={{ width: "250px", height: "100%" }}
      >
        <div className="position-relative h-100">
          <div className="list-img-slide h-100">
            <div className="click mb-0 rounded-3 overflow-hidden h-100">
              <TinySlider settings={settings}>
                {item?.businessPhotos &&
                  item.businessPhotos.map((el, index) => (
                    <div key={index} style={{ height: "100%" }}>
                      <Link to={`/single-property-1/${item._id}`}>
                        <img
                          src={el}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          alt=""
                        />
                      </Link>
                    </div>
                  ))}
              </TinySlider>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Content Section */}
      <div
        className="listing-caption-wrapper flex-grow-1 ps-3 d-flex flex-column justify-content-between"
        style={{ height: "100%" }}
      >
        {/* Top: Title & Location */}
        <div>
          <h4 className="listing-name fw-semibold fs-6 mb-2">
            <Link
              to={`/single-property-1/${item._id}`}
              className="prt-link-detail"
            >
              {item.businessName}
            </Link>
          </h4>
          <div className="prt-location text-muted-2 d-flex align-items-center">
            <img src={map} alt="" className="me-1" />
            {item.merchantAddress}
          </div>
        </div>

        {/* Price & Icons */}
        <div className="price-features-wrapper d-flex align-items-center justify-content-between my-3">
          <h6 className="listing-card-info-price text-primary m-0">$ 150</h6>
          <div className="lst-short-btns-groups d-flex align-items-center">
            <Link
              to="#"
              className="square--50 circle text-primary bg-light-primary me-2"
            >
              <i className="fa-solid fa-code-compare"></i>
            </Link>
            <Link
              to="#"
              className="square--50 circle text-success bg-light-success me-2"
            >
              <i className="fa-solid fa-envelope-open-text"></i>
            </Link>
            <Link
              to="#"
              className="square--50 circle text-danger bg-light-danger"
            >
              <i className="fa-solid fa-heart-circle-check"></i>
            </Link>
          </div>
        </div>

        {/* Footer: Rating */}
        <div className="lst-detail-footer d-flex align-items-center justify-content-between border-top pt-2">
          <div className="footer-first">
            <div className="foot-reviews-wrap">
              <div className="foot-reviews-stars mb-1">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className="fa-solid fa-star text-warning fs-sm"
                    style={{ margin: "0 2px" }}
                  ></i>
                ))}
              </div>
              <div className="foot-reviews-subtitle">
                <span className="text-muted">47 Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
