import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar/navbar'
import FilterTop from '../../components/filter-top'
import SideFilter from '../../components/side-filter'
import ListProperty from '../../components/list-property'
import FooterTop from '../../components/footer-top'
import Footer from '../../components/footer'

import { propertyData } from '../../data/data'

export default function ListLayoutOne() {
    const [show, setShow] = useState<boolean>(false)
  return (
    <>
        <Navbar transparent={false}/>
        <section className="gray-simple">
            <div className="container">
                <div className="row m-0">
                    <FilterTop/>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="filter_search_opt">
                            <Link to="#" className="btn btn-dark full-width mb-4" onClick={()=>setShow(!show)}>
                                <span className="svg-icon text-light svg-icon-2hx me-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor"/>
                                    </svg>
                                </span>Open Filter Option
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <SideFilter show={show} setShow={setShow}/>
                    </div>
                    <div className="col-lg-8 col-md-12 list-layout">
                        <div className="row justify-content-center g-4">
                            {propertyData.map((item,index)=>{
                                return(
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" key={index}>
                                        <ListProperty item={item}/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <ul className="pagination p-center">
                                    <li className="page-item">
                                        <Link className="page-link" to="#" aria-label="Previous"><i className="fa-solid fa-arrow-left-long"></i><span className="sr-only">Previous</span></Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item active"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">...</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">18</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#" aria-label="Next"><i className="fa-solid fa-arrow-right-long"></i><span className="sr-only">Next</span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>	
        </section>

        <FooterTop bg="theme-bg"/>

        <Footer/>
    </>
  )
}
