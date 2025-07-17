import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import UserNav from '../../components/navbar/user-nav'
import AdminSidebar from '../../components/admin-sidebar'
import FooterTop from '../../components/footer-top'
import Footer from '../../components/footer'
import { useUserStore } from '../../store/userStore'

export default function Dashboard() {
    let [show, setShow] = useState<boolean>(false)
    const user = useUserStore((state) => state.user)
    console.log("hello world jay amwarir here",user)
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
                        <Link to="#"  className="btn btn-dark full-width mb-4" onClick={()=>setShow(!show)}>Dashboard Navigation<i className="fa-solid fa-bars ms-2"></i></Link>
                    </div>
                </div>
            </div>
                        
            <div className="row">
                <div className="col-lg-3 col-md-12">
                    <AdminSidebar show={show} setShow={setShow}/>
                </div>
                
                <div className="col-lg-9 col-md-12">
                    
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h4>Your Current Package: <span className="pc-title text-primary">Gold Package</span></h4>
                        </div>
                    </div>
                    
                    <div className="row">
            
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="dashboard-stat widget-1">
                                <div className="dashboard-stat-content"><h4>607</h4> <span>Listings Included</span></div>
                                <div className="dashboard-stat-icon"><i className="fa-solid fa-location-dot"></i></div>
                            </div>	
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="dashboard-stat widget-2">
                                <div className="dashboard-stat-content"><h4>102</h4> <span>Listings Remaining</span></div>
                                <div className="dashboard-stat-icon"><i className="ti-pie-chart"></i></div>
                            </div>	
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="dashboard-stat widget-3">
                                <div className="dashboard-stat-content"><h4>70</h4> <span>Featured Included</span></div>
                                <div className="dashboard-stat-icon"><i className="ti-user"></i></div>
                            </div>	
                        </div>
                        
                        {/* <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="dashboard-stat widget-4">
                                <div className="dashboard-stat-content"><h4>30</h4> <span>Featured Remaining</span></div>
                                <div className="dashboard-stat-icon"><i className="fa-solid fa-location-dot"></i></div>
                            </div>	
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="dashboard-stat widget-5">
                                <div className="dashboard-stat-content"><h4>Unlimited</h4> <span>Images / per listing</span></div>
                                <div className="dashboard-stat-icon"><i className="ti-pie-chart"></i></div>
                            </div>	
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="dashboard-stat widget-6">
                                <div className="dashboard-stat-content"><h4>2021-02-26</h4> <span>Ends On</span></div>
                                <div className="dashboard-stat-icon"><i className="ti-user"></i></div>
                            </div>	
                        </div> */}

                    </div>
            
                    <div className="dashboard-wraper">
                    
                        <div className="form-submit">	
                            <h4>My Account</h4>
                            <div className="submit-section">
                                <div className="row">
                                
                                    <div className="form-group col-md-6">
                                        <label>Full Name</label>
                                        <input type="text" className="form-control" value={user?.fullName || user?.businessName} readOnly/>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label>User Name</label>
                                        <input type="text" className="form-control" value={user?.userName || user?.businessName} readOnly/>
                                    </div>
                                    
                                    <div className="form-group col-md-6">
                                        <label>Email</label>
                                        <input type="email" className="form-control" value={user?.email || user?.business_email} readOnly/>
                                    </div>
                                    
                                    {/* <div className="form-group col-md-6">
                                        <label>Your Title</label>
                                        <input type="text" className="form-control" value="Web Designer"/>
                                    </div> */}
                                    
                                    <div className="form-group col-md-6">
                                        <label>Phone</label>
                                        <input type="text" className="form-control" value={user?.phone || user?.business_phone} readOnly/>
                                    </div>
                                    
                                    {/* <div className="form-group col-md-6">
                                        <label>Address</label>
                                        <input type="text" className="form-control" value="522, Arizona, Canada"/>
                                    </div> */}
                                    
                                    {/* <div className="form-group col-md-6">
                                        <label>City</label>
                                        <input type="text" className="form-control" value="Montquebe"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>State</label>
                                        <input type="text" className="form-control" value="Canada"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Zip</label>
                                        <input type="text" className="form-control" value="160052"/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label>About</label>
                                        <textarea className="form-control">Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</textarea>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* <div className="form-submit">	
                            <h4>Social Accounts</h4>
                            <div className="submit-section">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label>Facebook</label>
                                        <input type="text" className="form-control" value="https://facebook.com/"/>
                                    </div>
                                    
                                    <div className="form-group col-md-6">
                                        <label>Twitter</label>
                                        <input type="email" className="form-control" value="https://twitter.com/"/>
                                    </div>
                                    
                                    <div className="form-group col-md-6">
                                        <label>Google Plus</label>
                                        <input type="text" className="form-control" value="https://googleplus.com"/>
                                    </div>
                                    
                                    <div className="form-group col-md-6">
                                        <label>LinkedIn</label>
                                        <input type="text" className="form-control" value="https://linkedin.com/"/>
                                    </div>
                                    <div className="form-group col-lg-12 col-md-12">
                                        <button className="btn btn-primary rounded px-5" type="button">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
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
