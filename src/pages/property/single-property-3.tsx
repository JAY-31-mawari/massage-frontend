import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Navbar from '../../components/navbar/navbar'
import DetailSidebar from '../../components/detail-sidebar'
import PropertyDetail from '../../components/property-detail'
import Footer from '../../components/footer'
import FooterTop from '../../components/footer-top'

import { propertyData } from '../../data/data'

export default function SinglePropertyThree() {
    let params = useParams()
    let id:any = params.id
    let data = propertyData.find((item:any)=>item.id === parseInt(id))
  return (
    <>
     <Navbar transparent={false}/>   

    <section className="bg-title">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-11 col-md-12">
            
                    <div className="property_block_wrap style-4">
                        <div className="prt-detail-title-desc">
                            <span className="label text-light bg-warning mb-1 d-inline-flex">For Sale</span>
                            <h3 className="text-light mt-3">{data?.name ? data?.name : 'Jannat Graynight Mood In Siver Colony, London'}</h3>
                            <span><i className="lni-map-marker"></i> 778 Country St. Panama City, FL</span>
                            <h3 className="prt-price-fix text-light mt-2">$7,600<sub>/month</sub></h3>
                            <div className="pbwts-social">
                                <ul className='mt-2'>
                                    <li>Share:</li>
                                    <li><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                    <li><Link to="#"><i className="fa-brands fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>	
            </div>
        </div>
    </section>

    <section className="gray-simple">
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
