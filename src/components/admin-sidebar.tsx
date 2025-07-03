import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import team1 from '../assets/img/team-1.jpg'

export default function AdminSidebar({show, setShow}:{show:any, setShow:any}) {
    let loction = useLocation()
    let current = loction.pathname
  return (
    <div className={`simple-sidebar sm-sidebar ${show ? 'd-block d-md-block' : 'd-none d-md-block'}`} id="filter_search" >
        <div className="search-sidebar_header">
            <h4 className="ssh_heading">Close Filter</h4>
            <button className="w3-bar-item w3-button w3-large" onClick={()=>setShow(!show)}><i className="fa-regular fa-circle-xmark fs-5 text-muted-2"></i></button>
        </div>
        
        <div className="sidebar-widgets">
            <div className="dashboard-navbar">
                <div className="d-user-avater">
                    <img src={team1} className="img-fluid avater" alt=""/>
                    <h4>Adam Harshvardhan</h4>
                    <span>Canada USA</span>
                </div>
                <div className="d-navigation">
                    <ul>
                        <li className={current === "/dashboard" ? "active" : ""}><Link to="/dashboard"><i className="fa-solid fa-gauge"></i>Dashboard</Link></li>
                        <li className={current === "/my-profile" ? "active" : ""}><Link to="/my-profile"><i className="fa-solid fa-address-card"></i>My Profile</Link></li>
                        <li className={current === "/bookmark-list" ? "active" : ""}><Link to="/bookmark-list"><i className="fa-solid fa-bookmark"></i>Bookmarked Listings</Link></li>
                        <li className={current === "/my-property" ? "active" : ""}><Link to="/my-property"><i className="fa-solid fa-building-circle-check"></i>My Properties</Link></li>
                        <li className={current === "/submit-property-dashboard" ? "active" : ""}><Link to="/submit-property-dashboard"><i className="fa-solid fa-house"></i>Submit New Property</Link></li>
                        <li className={current === "/change-password" ? "active" : ""}><Link to="/change-password"><i className="fa-solid fa-unlock"></i>Change Password</Link></li>
                        <li className={current === "#" ? "active" : ""}><Link to="#"><i className="fa-solid fa-power-off"></i>Log Out</Link></li>
                    </ul>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}
