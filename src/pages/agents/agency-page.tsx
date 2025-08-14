import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../../components/navbar/navbar";
import GridProperty from "../../components/grid-property";
import DetailSidebarThree from "../../components/detail-sidebar-three";
import FooterTop from "../../components/footer-top";
import Footer from "../../components/footer";

import {
  agencyData,
  agentData,
  agentInfo,
  propertyData,
} from "../../data/data";

import agency1 from "../../assets/img/ag-1.png";

interface AgentData {
  id: number;
  image: string;
  name: string;
  property: string;
  call: string;
  review: string;
}

interface Property {
  id: number;
  image: string[];
  tag: string[];
  tag2: string;
  type: string;
  name: string;
  loction: string;
  size: string;
  beds: string;
  sqft: string;
  value: string;
}

export default function AgencyPage() {
  let [activeTab, setActiveTab] = useState<number>(1);

  let params = useParams();
  let id: any = params.id;

  let data = agencyData.find((item: any) => item.id === parseInt(id));
  return (
    <>
      <div className="image-cover page-title">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2 className="ipt-title">Agent Detail</h2>
              <span className="ipn-subtitle">Adam D. Okraar From Canada</span>
            </div>
          </div>
        </div>
      </div>

      <section className="agent-page p-0 gray-simple">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="agency agency-list overlio-40">
                <div className="agency-avatar">
                  <img src={data?.image ? data?.image : agency1} alt="" />
                </div>
                <div className="agency-content">
                  <div className="agency-name">
                    <h4>
                      <Link to="/agency-page">
                        {data?.name ? data?.name : "Strive Partners Realty"}
                      </Link>
                    </h4>
                    <span>
                      <i className="lni-map-marker"></i>3599 Huntz Lane
                    </span>
                  </div>
                  <div className="agency-desc">
                    <p>
                      Most text editors like MS Word or Lotus Notes generate
                      random lorem text when needed, either as pre-installed
                      module or plug-in to be added. Word selection or sequence
                      don't necessarily match the original, which is intended to
                      add variety. Presentation software like Keynote.
                    </p>
                  </div>
                  <div className="prt-detios">
                    <span className="label text-light bg-success">
                      176 Property
                    </span>
                  </div>
                  <ul className="social-icons mt-4">
                    <li>
                      <Link className="facebook" to="#">
                        <i className="fa-brands fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="twitter" to="#">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="linkedin" to="#">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="linkedin" to="#">
                        <i className="fa-brands fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="block-wrap">
                <div className="block-header ags">
                  <h4 className="block-title">Agency Info</h4>
                  <Link to="/add-agent" className="btn btn-seegreen">
                    Add New Agent
                  </Link>
                </div>
                <div className="block-body">
                  <ul className="dw-proprty-info">
                    {agentInfo.map((item: any, index: number) => {
                      return (
                        <li key={index}>
                          <strong>{item.title}</strong>
                          {item.subTitle}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="block-wraps">
                <div className="block-wraps-header">
                  <div className="block-header">
                    <ul
                      className="nav nav-pills py-2"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <Link
                          className={`nav-link px-4 ${
                            activeTab === 1 ? "active" : ""
                          }`}
                          to="#"
                          onClick={() => setActiveTab(1)}
                        >
                          Agents
                        </Link>
                      </li>
                      <li className="nav-item" role="presentation">
                        <Link
                          className={`nav-link px-4 ${
                            activeTab === 2 ? "active" : ""
                          }`}
                          to="#"
                          onClick={() => setActiveTab(2)}
                        >
                          Property
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="block-body">
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className={`tab-pane fade ${
                          activeTab === 1 ? "show active" : ""
                        }`}
                        id="agent"
                      >
                        <div className="row justify-content-center g-4">
                          {agentData.map((item: AgentData, index: number) => {
                            return (
                              <div
                                className="col-lg-6 col-md-6 col-sm-12"
                                key={index}
                              >
                                <div className="agents-grid card rounded-3 border">
                                  <div className="agents-grid-wrap">
                                    <div className="fr-grid-thumb mx-auto text-center mt-5 mb-3">
                                      <Link
                                        to={`/agent-page/${item.id}`}
                                        className="d-inline-flex p-1 circle border"
                                      >
                                        <img
                                          src={item.image}
                                          className="img-fluid circle"
                                          width="130"
                                          alt=""
                                        />
                                      </Link>
                                    </div>
                                    <div className="fr-grid-deatil text-center">
                                      <div className="fr-grid-deatil-flex">
                                        <h5 className="fr-can-name mb-0">
                                          <Link to="#">{item.name}</Link>
                                        </h5>
                                        <span className="agent-property text-muted-2">
                                          {item.property}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="fr-grid-info d-flex align-items-center justify-content-between px-4 py-4">
                                    <div className="fr-grid-sder">
                                      <ul className="p-0">
                                        <li>
                                          <strong>Call:</strong>
                                          <span className="fw-medium text-primary ms-2">
                                            {item.call}
                                          </span>
                                        </li>
                                        <li>
                                          <div className="fr-can-rating">
                                            <i
                                              className="fas fa-star fs-xs text-warning"
                                              style={{ margin: "0 2px" }}
                                            ></i>
                                            <i
                                              className="fas fa-star fs-xs text-warning"
                                              style={{ margin: "0 2px" }}
                                            ></i>
                                            <i
                                              className="fas fa-star fs-xs text-warning"
                                              style={{ margin: "0 2px" }}
                                            ></i>
                                            <i
                                              className="fas fa-star fs-xs text-warning"
                                              style={{ margin: "0 2px" }}
                                            ></i>
                                            <i
                                              className="fas fa-star fs-xs text-muted"
                                              style={{ margin: "0 2px" }}
                                            ></i>
                                            <span className="reviews_text fs-sm text-muted-2">
                                              ({item.review})
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="fr-grid-deatil-flex-right">
                                      <div className="agent-email">
                                        <Link
                                          to="#"
                                          className="square--50 rounded text-danger bg-light-danger"
                                        >
                                          <i className="fa-solid fa-envelope-circle-check"></i>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                            <Link
                              to="#"
                              className="btn btn-primary px-lg-5 rounded"
                            >
                              Explore More Agents
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`tab-pane fade ${
                          activeTab === 2 ? "show active" : ""
                        }`}
                        id="property"
                      >
                        <div className="row justify-content-center g-4">
                          {propertyData
                            .slice(0, 6)
                            .map((item: Property, index: number) => {
                              return (
                                <div
                                  className="col-lg-6 col-md-6 col-sm-12"
                                  key={index}
                                >
                                  <GridProperty item={item} border={true} />
                                </div>
                              );
                            })}
                        </div>
                        <div className="row align-items-center justify-content-center">
                          <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                            <Link
                              to="#"
                              className="btn btn-primary px-md-5 rounded"
                            >
                              Browse More Properties
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <DetailSidebarThree />
            </div>
          </div>
        </div>
      </section>

      <FooterTop bg="theme-bg" />

      <Footer />
    </>
  );
}
