import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import UserNav from '../../components/navbar/user-nav'
import AdminSidebar from '../../components/admin-sidebar'
import Footer from '../../components/footer'
import FooterTop from '../../components/footer-top'

import { userProperty } from '../../data/property'

export default function MyProperty() {
    let [show, setShow] = useState<boolean>(false)
  return (
    <>
        <UserNav/>
        <div className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className="ipt-title">Welcome!</h2>
                        <span className="ipn-subtitle">Welcome To Your Account</span>
                    </div>
                </div>
            </div>
        </div>

        <section className="bg-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="filter_search_opt">
                            <Link to="#" className="btn btn-dark full-width mb-4" onClick={()=>setShow(!show)}>Dashboard Navigation<i className="fa-solid fa-bars ms-2"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-12">
                        <AdminSidebar show={show} setShow={setShow}/>
                    </div>
                    
                    <div className="col-lg-9 col-md-12">
                        <div className="dashboard-wraper">
                        
                            <div className="form-submit mb-4">	
                                <h4>My Property</h4>
                            </div>
                            
                            <div className="row">
                                {userProperty.map((item,index)=>{
                                    return(
                                        <div className="col-md-12 col-sm-12 col-md-12" key={index}>
                                            <div className="singles-dashboard-list">
                                                <div className="sd-list-left">
                                                    <img src={item.image} className="img-fluid" alt="" />
                                                </div>
                                                <div className="sd-list-right">
                                                    <h4 className="listing_dashboard_title"><Link to="#" className="text-primary">My List property Name</Link></h4>
                                                    <div className="user_dashboard_listed">
                                                        Price: from $ {item.value} month
                                                    </div>
                                                    <div className="user_dashboard_listed">
                                                        Listed in <Link to="#" className="text-primary">Rentals</Link> and <Link to="#" className="text-primary">Apartments</Link>
                                                    </div>
                                                    <div className="user_dashboard_listed">
                                                        City: <Link to="#" className="text-primary">{item.city}</Link> , {item.size}
                                                    </div>
                                                    <div className="action">
                                                        <Link to="#" title="Edit"><i className="fa-solid fa-pen-to-square"></i></Link>
                                                        <Link to="#" title="202 User View"><i className="fa-regular fa-eye"></i></Link>
                                                        <Link to="#" title="Delete Property" className="delete"><i className="fa-regular fa-circle-xmark"></i></Link>
                                                        <Link to="#" title="Make Featured" className="delete"><i className="fa-solid fa-star"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
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
