import { useState } from "react";
import { Link } from "react-router-dom";

import bg from "../assets/img/bg-2.jpg";
import Faqs from "../components/faq";

import { faqData, faqAbout, faq2, faq3 } from "../data/data";

export default function Faq() {
  let [activeTab, setActiveTab] = useState<number>(1);
  return (
    <>
      <section
        className="image-cover faq-sec text-center"
        style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat" }}
        data-overlay="6"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 position-relative z-1">
              <h1 className="text-light">Frequently Asked Questions</h1>
              <div className="faq-search">
                <form>
                  <input
                    name="search"
                    className="form-control"
                    placeholder="Search Your Query..."
                  />
                  <button type="submit">
                    {" "}
                    <i className="fa-solid fa-magnifying-glass"></i>{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row">
            {faqAbout.map((item: any, index: number) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
                  <div className="contact-box">
                    <i className={item.icon}></i>
                    <h4>{item.title}</h4>
                    <p>{item.subTitle}</p>
                    <span
                      className={
                        item.subTitle2 === "Live Chat" ? "live-chat" : ""
                      }
                    >
                      {item.subTitle2}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row">
            <div className="col-lg-10 col-md-12 col-sm-12">
              <div className="block-header border-0 m-0">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <Link
                      className={`nav-link ${activeTab === 1 ? "active" : ""}`}
                      onClick={() => setActiveTab(1)}
                      id="general-tab"
                      to="#"
                    >
                      General
                    </Link>
                  </li>

                  <li className="nav-item" role="presentation">
                    <Link
                      className={`nav-link ${activeTab === 2 ? "active" : ""}`}
                      onClick={() => setActiveTab(2)}
                      id="payment-tab"
                      to="#"
                    >
                      Payment
                    </Link>
                  </li>

                  <li className="nav-item" role="presentation">
                    <Link
                      className={`nav-link ${activeTab === 3 ? "active" : ""}`}
                      onClick={() => setActiveTab(3)}
                      id="upgrade-tab"
                      to="#"
                    >
                      Upgrade
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="tab-content" id="pills-tabContent">
                {activeTab === 1 && (
                  <div className="tab-pane fade show active" id="general">
                    <Faqs faqData={faqData} />
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="tab-pane fade show active" id="payment">
                    <Faqs faqData={faq2} />
                  </div>
                )}
                {activeTab === 3 && (
                  <div className="tab-pane fade show active" id="upgrade">
                    <Faqs faqData={faq3} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
