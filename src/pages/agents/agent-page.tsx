import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Navbar from '../../components/navbar/navbar'
import GridProperty from '../../components/grid-property'
import DetailSidebarThree from '../../components/detail-sidebar-three'
import FooterTop from '../../components/footer-top'
import Footer from '../../components/footer'

import user from '../../assets/img/user-5.jpg'

import { agentData, agentInfo, propertyData } from '../../data/data'

interface Data{
    id: number;
    image: string[];
    tag: string[];
    tag2: string;
    type: string;
    name: string;
    loction: string;
    size: string;
    beds: string;
    sqft: string;
    value: string;
}

export default function AgentPage() {
    let [activeTab, setActiveTab] = useState<number>(1)

    let params = useParams()
    let id:any = params.id

    let data = agentData.find((item:any)=>item.id === parseInt(id))
  return (
    <>
        <Navbar transparent={false}/>

        <div className="image-cover page-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className="ipt-title">Agent Detail</h2>
                        <span className="ipn-subtitle">Adam D. Okraar From Canada</span>
                    </div>
                </div>
            </div>
        </div>

        <section className="agent-page p-0 gray-simple">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="agency agency-list overlio-40">
                            <div className="agency-avatar">
                                <img src={data?.image ? data?.image : user} alt=""/>
                            </div>
                            <div className="agency-content">
                                <div className="agency-name">
                                    <h4><Link to="/agency-page">{data?.name ? data?.name : 'Adam D. Okraar'}</Link></h4>
                                    <span><i className="lni-map-marker"></i>3599 Huntz Lane</span>
                                </div>
                                <div className="agency-desc">
                                    <p>Think of a news blog that's filled with content hourly on the day of going live However, reviewers tend to be distracted by comprehensible content. In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready.</p>
                                </div>
                                <div className="prt-detios">
                                    <span className="label text-light bg-success">202 Property</span>
                                </div>
                                <ul className="social-icons mt-4">
                                    <li><Link className="facebook" to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                                    <li><Link className="twitter" to="#"><i className="fa-brands fa-twitter"></i></Link></li>
                                    <li><Link className="linkedin" to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                    <li><Link className="linkedin" to="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="min gray-simple">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="block-wrap">
                            <div className="block-header">
                                <h4 className="block-title">Agent Info</h4>
                            </div>
                            <div className="block-body">
                                <ul className="dw-proprty-info">
                                    {agentInfo.map((item:any,index:number)=>{
                                        return(
                                            <li key={index}><strong>{item.title}</strong>{item.subTitle}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="block-wraps">
                            <div className="block-wraps-header">
                                <div className="block-header">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item" role="presentation">
                                            <Link className={`nav-link px-4 ${activeTab === 1 ? 'active' :''}`} id="rental-tab" to="#" onClick={()=>setActiveTab(1)}>Rental</Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link className={`nav-link px-4 ${activeTab === 2 ? 'active' :''}`} id="sale-tab" to="#" onClick={()=>setActiveTab(2)}>For Sale</Link>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="block-body">
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className={`tab-pane fade ${activeTab === 1 ? 'show active' :''}`} id="rental" role="tabpanel" aria-labelledby="rental-tab">
                                            <div className="row justify-content-center g-4">
                                                {propertyData.slice(0,6).map((item:Data,index:number)=>{
                                                    return(
                                                    <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
                                                        <GridProperty item={item} border={true}/>
                                                    </div>
                                                    )
                                                })}
                                            </div>
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                                                    <Link to="#" className="btn btn-primary px-md-5 rounded">Browse More Properties</Link>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className={`tab-pane fade ${activeTab === 2 ? 'show active' :''}`} id="sale" role="tabpanel" aria-labelledby="sale-tab">
                                            <div className="row justify-content-center g-4">
                                                {propertyData.slice(3,9).map((item:Data,index:number)=>{
                                                    return(
                                                    <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
                                                        <GridProperty item={item} border={true}/>
                                                    </div>
                                                    )
                                                })}
                                            </div>
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                                                    <Link to="#" className="btn btn-primary px-md-5 rounded">Browse More Properties</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <DetailSidebarThree/>
                    </div>
                </div>					
            </div>	
        </section>

        <FooterTop bg="theme-bg"/>

        <Footer/>
    </>
  )
}
