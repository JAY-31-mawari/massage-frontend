import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Slider from "react-slick";

import bg1 from "../../assets/img/p-1.jpg";
import bg2 from "../../assets/img/p-2.jpg";
import bg3 from "../../assets/img/p-3.jpg";
import bg4 from "../../assets/img/p-4.jpg";
import bed from "../../assets/img/bed.svg";
import bathtub from "../../assets/img/bathtub.svg";
import move from "../../assets/img/move.svg";

import Navbar from "../../components/navbar/navbar";
import PropertyDetail from "../../components/service-detail";
import DetailSidebar from "../../components/detail-sidebar";
import FooterTop from "../../components/footer-top";
import Footer from "../../components/footer";
import { useMerchantStore } from "../../store/merchantStore";
import { serviceNames } from "../../data/servicesData";
import axios from "axios";
import { Service } from "../../components/interfaces";

var settings = {
  dots: false,
  slidesToShow: 2,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 3000,
  slidesToScroll: 1,
  centerMode: true,
};

export default function SinglePropertyOne() {
  let params = useParams();
  let id: any = params.id;
  const [serviceCountMap, setServiceCountMap] = useState<
    Record<string, number>
  >({});
  const [merchant, setMerchant] = useState<any>()
  const timesDuration = [30, 45, 60]
  const [userSelectedService, setUserSelectedService] = useState("");
  const [userSelectedPractitionerId, setUserSelectedPractitionerId] =
    useState("");
  const [userSelectedTimeDuration, setUserSelectedTimeDuration] = useState(0);

  const selectedServiceData = useMerchantStore((state) => state.merchant);

  const getSpecificBusinessById = async() => {
    const payload = {
      method: 'GET',
      url: global.config.ROOTURL.prod + `/business/${id}`
    }

    await axios(payload).then((res)=>{
      setMerchant(res.data)
    }).catch((err)=>{
      console.error("Error Fetching Data: getSpecificBusinessById", err)
    })
  }

  useEffect(()=>{
    if(id){
      getSpecificBusinessById()
    }else{
      setMerchant(selectedServiceData)
    }
  },[id])


  // function mapServiceToPractitionerCount(business: Merchant): Record<string, number> {
  //   const serviceMap: Record<string, number> = {};

  //   for (const practitioner of business.practitioners) {
  //     for (const service of practitioner.areaOfExpertise || []) {
  //       serviceMap[service] = (serviceMap[service] || 0) + 1;
  //     }
  //   }

  //   return serviceMap;
  // }

  // useEffect(() => { console.log(userSelectedPractitionerId) }, [userSelectedPractitionerId])

  // useEffect(() => {
  //   // if (merchant?.practitioners?.length && merchant._id) {
  //   //     const mapped = mapServiceToPractitionerCount(merchant as Merchant);
  //   //     console.log("mapped service count", mapped)
  //   //     setServiceCountMap(mapped);
  //   //   }
  // }, [merchant])
  return (
    <>
      <Navbar transparent={false} />

      <div className="featured_slick_gallery gray">
        <div className="featured_slick_gallery-slide home-slider">
          <Slider {...settings}>
            <div className="featured_slick_padd">
              <a href="assets/img/p-1.jpg" className="mfp-gallery">
                <img src={bg1} className="img-fluid mx-auto" alt="" />
              </a>
            </div>
            <div className="featured_slick_padd">
              <a href="assets/img/p-2.jpg" className="mfp-gallery">
                <img src={bg2} className="img-fluid mx-auto" alt="" />
              </a>
            </div>
            <div className="featured_slick_padd">
              <a href="assets/img/p-3.jpg" className="mfp-gallery">
                <img src={bg3} className="img-fluid mx-auto" alt="" />
              </a>
            </div>
            <div className="featured_slick_padd">
              <a href="assets/img/p-4.jpg" className="mfp-gallery">
                <img src={bg4} className="img-fluid mx-auto" alt="" />
              </a>
            </div>
          </Slider>
        </div>
        <Link to="#" className="btn-view-pic">
          View photos
        </Link>
      </div>

      <section className="gray-simple">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="property_block_wrap style-2 p-4">
                <div className="prt-detail-title-desc">
                  <span className="label text-light bg-success">For Sale</span>
                  <h3 className="mt-3">
                    {merchant?.businessName
                      ? merchant?.businessName
                      : "Jannat Graynight Mood In Siver Colony, London"}
                  </h3>
                  <span>
                    <i className="lni-map-marker"></i>
                    {merchant?.business_email}
                  </span>
                  <h3 className="prt-price-fix text-primary mt-2">
                    {merchant?.business_phone}
                  </h3>
                  <div className="list-fx-features">
                    <div className="listing-card-info-icon">
                      <div className="inc-fleat-icon me-1">
                        <img src={bed} width="13" alt="" />
                      </div>
                      3 Beds
                    </div>
                    <div className="listing-card-info-icon">
                      <div className="inc-fleat-icon me-1">
                        <img src={bathtub} width="13" alt="" />
                      </div>
                      1 Bath
                    </div>
                    <div className="listing-card-info-icon">
                      <div className="inc-fleat-icon me-1">
                        <img src={move} width="13" alt="" />
                      </div>
                      800 sqft
                    </div>
                  </div>
                  <div className="listing-card-info-icon">
                    <label htmlFor="service-select">Select your Service</label>
                    <select
                      id="service-select"
                      value={userSelectedService}
                      onChange={(e) => setUserSelectedService(e.target.value)}
                    >
                      <option value="" disabled>
                        -- Choose a service --
                      </option>
                      {serviceNames.map((serviceName) => (
                        <option key={serviceName} value={serviceName}>
                          {serviceName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="listing-card-info-icon">
                    <label htmlFor="timeDuration">Select Time Duration</label>
                    <select
                      id="timeDuration"
                      value={userSelectedTimeDuration}
                      onChange={(e) => setUserSelectedTimeDuration(parseInt(e.target.value, 10))}
                    >
                      <option value="" disabled>
                        -- Choose a time --
                      </option>
                      {timesDuration.map((time) => (
                        <option key={time} value={time}>
                          {time} minutes
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="listing-card-info-icon">
                {userSelectedService === ""
                  ? merchant?.practitioners?.map((practitioner:any) => (
                      <div
                        className="mt-4 px-6"
                        key={practitioner._id}
                        onClick={() =>
                          setUserSelectedPractitionerId(practitioner._id)
                        }
                      >
                        <img
                            src={practitioner.profilePicture}
                            className={`w-24 h-24 object-cover rounded-full ring-4 ${practitioner._id === userSelectedPractitionerId ? "ring-green-600" : "ring-indigo-300"}`}
                            width="130"
                            alt=""
                          />
                          <div className="fr-grid-deatil text-center">
                            <div className="fr-grid-deatil-flex">
                              <h5 className="fr-can-name mb-0">
                                {practitioner.practitionerName}                              
                              </h5>

                            </div>
                          </div>
                      </div>
                    ))
                  : merchant?.practitioners
                      ?.filter((practitioner:any) =>
                        practitioner.areaOfExpertise?.includes(
                          userSelectedService
                        )
                      )
                      .map((practitioner:any) => (
                        <div
                          className="mt-4 px-6"
                          key={practitioner._id}
                          onClick={() =>
                            setUserSelectedPractitionerId(practitioner._id)
                          }
                        >
                          <img
                            src={practitioner.profilePicture}
                            className="w-20 h-20 object-cover rounded-full ring-2 ring-indigo-300"
                            width="130"
                            alt=""
                          />
                          <div className="fr-grid-deatil text-center">
                            <div className="fr-grid-deatil-flex">
                              <h5 className="fr-can-name mb-0">
                                {practitioner.practitionerName}                              
                              </h5>

                            </div>
                          </div>
                        </div>
                      ))}
              </div>
              <PropertyDetail
                serviceName={userSelectedService}
                practitionerId={userSelectedPractitionerId}
                duration={userSelectedTimeDuration}
              />
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
              <DetailSidebar />
            </div>
          </div>
        </div>
      </section>
      <FooterTop bg="theme-bg" />
      <Footer />
    </>
  );
}
