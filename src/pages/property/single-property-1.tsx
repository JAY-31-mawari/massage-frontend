import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Slider from "react-slick";

import bg1 from '../../assets/img/p-1.jpg'
import bg2 from '../../assets/img/p-2.jpg'
import bg3 from '../../assets/img/p-3.jpg'
import bg4 from '../../assets/img/p-4.jpg'
import bed from '../../assets/img/bed.svg'
import bathtub from '../../assets/img/bathtub.svg'
import move from '../../assets/img/move.svg'

import Navbar from '../../components/navbar/navbar'
import PropertyDetail from '../../components/property-detail';
import DetailSidebar from '../../components/detail-sidebar';
import FooterTop from '../../components/footer-top';
import Footer from '../../components/footer';
import { useMerchantStore } from '../../store/merchantStore';

import { propertyData } from '../../data/data';

var settings = {
    dots: false,
    slidesToShow: 2,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 2000,
    speed: 3000,
    slidesToScroll: 1,
    centerMode: true,
  };

export default function SinglePropertyOne() {
    let params = useParams()
    let id:any = params.id
    let data = propertyData.find((item:any)=>item.id === parseInt(id))

    const merchant = useMerchantStore((state) => state.merchant)
  return (
    <>
        <Navbar transparent={false}/>   

        <div className="featured_slick_gallery gray">
            <div className="featured_slick_gallery-slide home-slider">
                <Slider {...settings}>
                    <div className="featured_slick_padd"><a href="assets/img/p-1.jpg" className="mfp-gallery"><img src={bg1} className="img-fluid mx-auto" alt="" /></a></div>
                    <div className="featured_slick_padd"><a href="assets/img/p-2.jpg" className="mfp-gallery"><img src={bg2} className="img-fluid mx-auto" alt="" /></a></div>
                    <div className="featured_slick_padd"><a href="assets/img/p-3.jpg" className="mfp-gallery"><img src={bg3} className="img-fluid mx-auto" alt="" /></a></div>
                    <div className="featured_slick_padd"><a href="assets/img/p-4.jpg" className="mfp-gallery"><img src={bg4} className="img-fluid mx-auto" alt="" /></a></div>
                </Slider>
            </div>
            <Link to="#" className="btn-view-pic">View photos</Link>
        </div>

        <section className="gray-simple">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="property_block_wrap style-2 p-4">
                            <div className="prt-detail-title-desc">
                                <span className="label text-light bg-success">For Sale</span>
                                <h3 className='mt-3'>{merchant?.businessName ? merchant?.businessName : 'Jannat Graynight Mood In Siver Colony, London'}</h3>
                                <span><i className="lni-map-marker"></i>{merchant?.business_email}</span>
                                <h3 className="prt-price-fix text-primary mt-2">{merchant?.business_phone}</h3>
                                <div className="list-fx-features">
                                    <div className="listing-card-info-icon">
                                        <div className="inc-fleat-icon me-1"><img src={bed} width="13" alt=""/></div>3 Beds
                                    </div>
                                    <div className="listing-card-info-icon">
                                        <div className="inc-fleat-icon me-1"><img src={bathtub} width="13" alt=""/></div>1 Bath
                                    </div>
                                    <div className="listing-card-info-icon">
                                        <div className="inc-fleat-icon me-1"><img src={move} width="13" alt=""/></div>800 sqft
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PropertyDetail/>
                    </div>
                    
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <DetailSidebar/>
                    </div>
                </div>
            </div>
        </section>
        <FooterTop bg="theme-bg"/>
        <Footer/>
    </>
  )
}
