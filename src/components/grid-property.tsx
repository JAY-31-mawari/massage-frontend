import React from 'react'
import { Link } from 'react-router-dom';

import send from '../assets/img/svg/send.svg'
import map from '../assets/img/svg/map-1.svg'
import moon from '../assets/img/svg/moon.svg'
import verified from '../assets/img/svg/verified.svg'
import user from '../assets/img/svg/user-1.svg'
import Paypal from '../assets/img/partners/Paypal-light.png'

import TinySlider from "tiny-slider-react";
import '../../node_modules/tiny-slider/dist/tiny-slider.css'
import { useMerchantStore } from '../store/merchantStore';
import { usePractitionerStore } from '../store/practitionerStore';
import { setStorageItem } from '../utils/sessionStorage';

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

export default function GridProperty({item,border}:{item:any, border:any}) {

  const updateMerchant = useMerchantStore((state) => state.updateMerchant)
  const updatePractitioner = usePractitionerStore((state)=>state.setPractitioners)

  const handleSelectService = (data: any) => {
    setStorageItem('merchant-data', JSON.stringify(data))
    setStorageItem('practitioner-data',JSON.stringify(data.practitioners))
    updateMerchant(data)
    updatePractitioner(data?.practitioners)
  }

  return (
        <div className={`property-listing card rounded-3 ${border ? 'border' : 'border-0'}`} onClick={() => handleSelectService(item)}>
          <div className={`listing-img-wrapper p-3 `}>
              <div className="list-img-slide position-relative">
                  {/* <div className="position-absolute top-0 left-0 ms-3 mt-3 z-1">
                    {item.tag.map((el:any, index:number)=>{
                      return(
                        
                        <div key={index} className={`label text-light d-inline-flex align-items-center justify-content-center mx-1 ${el === 'Verified' ? 'bg-success' : ''} ${el === 'SuperAgent' ? 'bg-purple' : ''} ${el === 'New' ? 'bg-danger' : ''}`}>
                          {el === 'Verified' && <img src={verified} alt="" className='me-1' />}

                          {el === 'SuperAgent' && <img src={user} alt="" className='me-1'/>}

                          {el === 'New' && <img src={moon} alt="" className='me-1'/>}
                            {el}
                        </div>
                      )
                    })}
                  </div> */}
                  <div className="click rounded-3 overflow-hidden mb-0">
                      <TinySlider settings={settings}>
                        {/* {item.image.map((el:any, index:number) => { */}
                          {/* // return( */}
                            <div><Link to={`/single-property-1/${item._id}`}><img src={Paypal} className="img-fluid" alt="" /></Link></div>
                          {/* // ) */}
                        {/* // })} */}
                      </TinySlider>
                  </div>
              </div>
          </div>
          
          <div className="listing-caption-wrapper px-3">
              <div className="listing-detail-wrapper">
                  <div className="listing-short-detail-wrap">
                      <div className="listing-short-detail">
                          {/* <div className="d-flex align-items-center">
                            {item.tag2 === "For Rent" && <span className="label bg-light-success text-success prt-type me-2">For Rent</span>}
                            {item.tag2 === "For Sell" && <span className="label bg-light-danger text-danger prt-type me-2">For Sell</span>}
                              <span className="label bg-light-purple text-purple property-cats">{item.type}</span>
                          </div> */}
                          <h4 className="listing-name fw-semibold fs-5 mb-2 mt-3"><Link to={`/single-property-1/${item._id}`}>{item?.businessName}</Link></h4>
                          <div className="prt-location text-muted-2 d-flex">
                               <img src={map} alt="" />
                              {item.business_email}
                          </div>
                      </div>
                  </div>
              </div>
              
              {/* <div className="price-features-wrapper">
                  <div className="list-fx-features d-flex align-items-center justify-content-between">
                      <div className="listing-card d-flex align-items-center">
                          <div className="square--25 text-muted-2 fs-sm circle gray-simple me-1"><i className="fa-solid fa-building-shield fs-xs"></i></div><span className="text-muted-2 fs-sm">{item.size}</span>
                      </div>
                      <div className="listing-card d-flex align-items-center">
                          <div className="square--25 text-muted-2 fs-sm circle gray-simple me-1"><i className="fa-solid fa-bed fs-xs"></i></div><span className="text-muted-2 fs-sm">{item.beds}</span>
                      </div>
                      <div className="listing-card d-flex align-items-center">
                          <div className="square--25 text-muted-2 fs-sm circle gray-simple me-1"><i className="fa-solid fa-clone fs-xs"></i></div><span className="text-muted-2 fs-sm">{item.sqft}</span>
                      </div>
                  </div>
              </div> */}
              
              <div className="listing-detail-footer d-flex align-items-center justify-content-between py-4">
                  <div className="listing-short-detail-flex">
                      <h6 className="listing-card-info-price m-0">{item.business_phone}</h6>
                  </div>
                  <div className="footer-flex">
                      <Link to={`/single-property-1/${item._id}`} className="prt-view">
                          <img src={send} alt="" />
                      </Link>
                  </div>
              </div>
          
          </div>
          
        </div>
  )
}
