import React from 'react'
import { Link } from 'react-router-dom'

import bg1 from '../../assets/img/slider-1.jpg'
import bg2 from '../../assets/img/slider-2.jpg'
import bg3 from '../../assets/img/slider-3.jpg'

import Slider from "react-slick";

import Navbar from '../../components/navbar/navbar'
import TopNav from '../../components/navbar/top-nav'
import HowItsWork from '../../components/how-its-work'
import GridPropertyOne from '../../components/grid-property-one'
import ExplorePropertyTwo from '../../components/explore-property-two'
import ClientOne from '../../components/client-one'
import TeamOne from '../../components/team-one'
import FooterTop from '../../components/footer-top'
import Footer from '../../components/footer'

var settings = {
    dots: false,
    slidesToShow: 1,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 2000,
    speed: 3000,
    slidesToScroll: 1,
  };

export default function IndexEight() {
  return (
    <>
        <TopNav/>
        <Navbar transparent={false}/>

        <div className="home-slider margin-bottom-0">
            <Slider {...settings}>
                <div className="item">
                    <div className='d-flex align-items-center'  style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center', backgroundRepeat:'no-repeat',width:'100%', height:"100%"}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="home-slider-container">
                                        <div className="home-slider-desc">
                                            <div className="modern-pro-wrap">
                                                <span className="property-type bg-light-success text-success">For Sale</span>
                                                <span className="property-featured bg-danger">Featured</span>
                                            </div>
                                            <div className="home-slider-title">
                                                <h3><Link to="/single-property-page-1">Aashirvaad Apartment</Link></h3>
                                                <span><i className="lni-map-marker"></i> 778 Country St. Panama City, FL</span>
                                            </div>
                                            <div className="slide-property-info">
                                                <ul>
                                                    <li>Beds: 4</li>
                                                    <li>Bath: 2</li>
                                                    <li>sqft: 5270</li>
                                                </ul>
                                            </div>
                                            <div className="listing-price-with-compare">
                                                <h4 className="list-pr fs-3">$2,580</h4>
                                                <div className="lpc-right d-flex align-items-center mt-3">
                                                    <Link to="/compare-property" className="square--50 rounded gray-simple me-2" ><i className="fa-solid fa-code-compare"></i></Link>
                                                    <Link to="#" className="square--50 rounded gray-simple" ><i className="fa-solid fa-heart"></i></Link>
                                                </div>
                                            </div>
                                            <Link to="/single-property-page-1" className="read-more bg-primary">View Details <i className="fa fa-angle-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="item">
                    <div className='d-flex align-items-center'  style={{backgroundImage:`url(${bg2})`, backgroundPosition:'center', backgroundRepeat:'no-repeat',width:'100%', height:"100%"}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="home-slider-container">
                                        <div className="home-slider-desc">
                                            <div className="modern-pro-wrap">
                                                <span className="property-type bg-light-success text-success">For Sale</span>
                                                <span className="property-featured bg-danger">Featured</span>
                                            </div>
                                            <div className="home-slider-title">
                                                <h3><Link to="/single-property-page-1">Aashirvaad Apartment</Link></h3>
                                                <span><i className="lni-map-marker"></i> 778 Country St. Panama City, FL</span>
                                            </div>
                                            
                                            <div className="slide-property-info">
                                                <ul>
                                                    <li>Beds: 4</li>
                                                    <li>Bath: 2</li>
                                                    <li>sqft: 5270</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="listing-price-with-compare">
                                                <h4 className="list-pr fs-3">$2,580</h4>
                                                <div className="lpc-right d-flex align-items-center mt-3">
                                                    <Link to="/compare-property" className="square--50 rounded gray-simple me-2"><i className="fa-solid fa-code-compare"></i></Link>
                                                    <Link to="#" className="square--50 rounded gray-simple"><i className="fa-solid fa-heart"></i></Link>
                                                </div>
                                            </div>
                                            <Link to="/single-property-page-1" className="read-more bg-primary">View Details <i className="fa fa-angle-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="item">
                    <div className='d-flex align-items-center'  style={{backgroundImage:`url(${bg3})`, backgroundPosition:'center', backgroundRepeat:'no-repeat',width:'100%', height:"100%"}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="home-slider-container">
                                        <div className="home-slider-desc">
                                            <div className="modern-pro-wrap">
                                                <span className="property-type bg-light-success text-success">For Sale</span>
                                                <span className="property-featured bg-danger">Featured</span>
                                            </div>
                                            <div className="home-slider-title">
                                                <h3><Link to="/single-property-page-1">Aashirvaad Apartment</Link></h3>
                                                <span><i className="lni-map-marker"></i> 778 Country St. Panama City, FL</span>
                                            </div>
                                            <div className="slide-property-info">
                                                <ul>
                                                    <li>Beds: 4</li>
                                                    <li>Bath: 2</li>
                                                    <li>sqft: 5270</li>
                                                </ul>
                                            </div>
                                            <div className="listing-price-with-compare">
                                                <h4 className="list-pr fs-3">$2,580</h4>
                                                <div className="lpc-right d-flex align-items-center mt-3">
                                                    <Link to="/compare-property" className="square--50 rounded gray-simple me-2"><i className="fa-solid fa-code-compare"></i></Link>
                                                    <Link to="#" className="square--50 rounded gray-simple"><i className="fa-solid fa-heart"></i></Link>
                                                </div>
                                            </div>
                                            <Link to="/single-property-page-1" className="read-more bg-primary">View Details <i className="fa fa-angle-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>

        <section>
            <HowItsWork/>
        </section>

        <div className="clearfix"></div>

        <section className="gray-simple">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Explore Good places</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <GridPropertyOne border={false}/>
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                        <Link to="/listings-list-with-sidebar" className="btn btn-primary px-md-5 rounded">Browse More Properties</Link>
                    </div>
                </div>
            </div>	
        </section>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Explore Good places</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <ExplorePropertyTwo/>
            </div>	
        </section>

        <section className="gray-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Good Reviews by Customers</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <ClientOne/>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Explore Featured Agents</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <TeamOne/>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                        <Link to="/listings-list-with-sidebar" className="btn btn-primary px-lg-5 rounded">Explore More Agents</Link>
                    </div>
                </div>
            </div>
        </section>
        <div className="clearfix"></div>

        <FooterTop bg="theme-bg"/>

        <Footer/>
    </>
  )
}
