import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import UserNav from '../../components/navbar/user-nav'
import AdminSidebar from '../../components/admin-sidebar'
import Footer from '../../components/footer'
import FooterTop from '../../components/footer-top'
import axios from 'axios'
import { getStorageItem } from '../../utils/sessionStorage'
import { userProperty } from '../../data/property'
import { useUserStore } from '../../store/userStore'

export default function MyProperty() {
    let [show, setShow] = useState<boolean>(false)
    const userData = useUserStore((state)=>state.user)
    // const [userData, setUserData] = useState<any>(JSON.parse(getStorageItem('user-data')))
    const [uid, setUid] = useState(getStorageItem("uid"))
    console.log(userData)
    const [practitioners, setPractitioners] = useState<any>([])

    const fetchPractitionersByBusinessId = async() => {
        const practitionerRes = await axios.get(global.config.ROOTURL.prod + `/practitioner/${uid}`)
        setPractitioners(practitionerRes.data.data)
        console.log(practitionerRes.data.data)
    }

    useEffect(()=>{
        if(userData?._id && userData?.businessName){
            fetchPractitionersByBusinessId()
        }
    }, [])
    
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
                                <h4>My Practitioners</h4>
                            </div>
                            
                            <div className="row">
                                {practitioners.map((item:any)=>{
                                    return(
                                        <div className="col-md-12 col-sm-12 col-md-12" key={item?._id}>
                                            <div className="singles-dashboard-list">
                                                <div className="sd-list-left">
                                                    <img src={item?.profilePicture} className="img-fluid" alt="" />
                                                </div>
                                                <div className="sd-list-right">
                                                    <h4 className="listing_dashboard_title"><Link to="#" className="text-primary">{item?.practitionerName}</Link></h4>
                                                    {/* <div className="user_dashboard_listed">
                                                        Price: from $ {item?.areaOfExpertise[0]} month
                                                    </div> */}
                                                    <div className="user_dashboard_listed">
                                                        Listed in <Link to="#" className="text-primary"></Link> and <Link to="#" className="text-primary">{userData?.businessName}</Link>
                                                    </div>
                                                    <div className="user_dashboard_listed">
                                                        Area of Expertise: <Link to="#" className="text-primary">{item?.areaOfExpertise[0]}</Link>
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
