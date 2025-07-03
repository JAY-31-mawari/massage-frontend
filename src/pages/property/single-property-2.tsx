import React from 'react'
import { Link, useParams } from 'react-router-dom';

import Slider from "react-slick";

import bg1 from '../../assets/img/gl-1.png'
import bg2 from '../../assets/img/gl-2.png'
import bg3 from '../../assets/img/gl-3.png'
import bg4 from '../../assets/img/gl-4.png'
import bg5 from '../../assets/img/gl-5.png'
import agency1 from '../../assets/img/agency-1.png'
import bed from '../../assets/img/bed.svg'
import bathtub from '../../assets/img/bathtub.svg'
import move from '../../assets/img/move.svg'

import Navbar from '../../components/navbar/navbar'
import DetailSidebar from '../../components/detail-sidebar';
import PropertyDetail from '../../components/property-detail';
import FooterTop from '../../components/footer-top';
import Footer from '../../components/footer';

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

export default function SinglePropertyTwo() {
    let params = useParams()
    let id:any = params.id
    let data = propertyData.find((item:any)=>item.id === parseInt(id))
  return (
    <>
        <Navbar transparent={false}/>   

        <div className="featured_slick_gallery gray">
            <div className="featured_slick_gallery-slide home-slider">
                <Slider {...settings}>
                    <div className="featured_slick_padd"><Link to="#" className="mfp-gallery"><img src={bg1} className="img-fluid mx-auto" alt="" /></Link></div>
                    <div className="featured_slick_padd"><Link to="#" className="mfp-gallery"><img src={bg2} className="img-fluid mx-auto" alt="" /></Link></div>
                    <div className="featured_slick_padd"><Link to="#" className="mfp-gallery"><img src={bg3} className="img-fluid mx-auto" alt="" /></Link></div>
                    <div className="featured_slick_padd"><Link to="#" className="mfp-gallery"><img src={bg4} className="img-fluid mx-auto" alt="" /></Link></div>
                    <div className="featured_slick_padd"><Link to="#" className="mfp-gallery"><img src={bg5} className="img-fluid mx-auto" alt="" /></Link></div>
                </Slider>
            </div>
            <Link to="#" className="btn-view-pic">View photos</Link>
        </div>

        <section className="gray-simple rtl p-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11 col-md-12">
                
                        <div className="property_block_wrap style-3">
                        
                            <div className="pbw-flex-1">
                                <div className="pbw-flex-thumb">
                                    <img src={agency1} className="img-fluid" alt="" />
                                </div>
                            </div>
                            
                            <div className="pbw-flex">
                                <div className="prt-detail-title-desc">
                                    <span className="label text-light bg-success">For Sale</span>
                                    <h3 className='mt-3'>{data?.name ? data?.name : 'Jannat Graynight Mood In Siver Colony, London'}</h3>
                                    <span><i className="lni-map-marker"></i> 778 Country St. Panama City, FL</span>
                                    <h3 className="prt-price-fix text-primary mt-2">$7,600<sub>/month</sub></h3>
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
                        </div>
                    </div>	
                </div>
            </div>
        </section>

        <section className="gray-simple min">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12">
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
