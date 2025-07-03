import React from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select';

import bg from '../../assets/img/bg-1.jpg'
import map from '../../assets/img/pin.svg'

import Navbar from '../../components/navbar/navbar'
import HowItsWork from '../../components/how-its-work';
import BestLoctionOne from '../../components/best-loction-one';
import ClientOne from '../../components/client-one';
import PricingOne from '../../components/pricing-one';
import FooterTop from '../../components/footer-top';
import Footer from '../../components/footer';
import GridPropertyOne from '../../components/grid-property-one';

export default function Index() {
   
    const minprice = [
        { value: '1', label: '$500' },
        { value: '1', label: '$1000' },
        { value: '1', label: '$1500' },
        { value: '1', label: '$2000' },
        { value: '1', label: '$3000' },
    ];
    const maxprice = [
        { value: '1', label: '$1000' },
        { value: '1', label: '$1500' },
        { value: '1', label: '$2000' },
        { value: '1', label: '$3000' },
        { value: '1', label: '$3000' },
    ];

    const propertyType = [
        { value: '1', label: 'Rental' },
        { value: '1', label: 'Villas' },
        { value: '1', label: 'Offices' },
        { value: '1', label: 'Condos' },
        { value: '1', label: 'Studios' },
    ]
    const rooms = [
        { value: '1', label: '1' },
        { value: '1', label: '2' },
        { value: '1', label: '3' },
        { value: '1', label: '4' },
        { value: '1', label: '5' },
    ]
    const loction = [
        { value: '1', label: 'Los Angeles, CA' },
        { value: '1', label: 'New York City, NY' },
        { value: '1', label: 'Chicago, IL' },
        { value: '1', label: 'Houston, TX' },
        { value: '1', label: 'Philadelphia, PA' },
        { value: '1', label: 'San Antonio, TX' },
        { value: '1', label: 'San Jose, CA' },
    ]

  return (
    <>
        <Navbar transparent={false}/>

        <div className="image-cover hero-banner" style={{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="hero-search-wrap">
                    <div className="hero-search">
                        <h1>Find accessible homes to rent</h1>
                    </div>
                    <div className="hero-search-content side-form">
                        
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <div className="input-with-icon">
                                        <input type="text" className="form-control" placeholder="Search for a location"/>
                                        <img src={map} width="18" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group">
                                    <label className='mb-2'>Min Price</label>
                                    <Select options={minprice}  className="form-control" placeholder="No Min"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group">
                                    <label className='mb-2'>Max Price</label>
                                    <Select options={maxprice} className="form-control" placeholder="No Max"/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group">
                                    <label className='mb-2'>Property Type</label>
                                    <Select options={propertyType} className="form-control" placeholder="Show All"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group">
                                    <label className='mb-2'>Bed Rooms</label>
                                    <Select options={rooms} className="form-control" placeholder="Bedrooms"/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className='mb-2'>Property Location</label>
                                    <Select options={loction} className="form-control" placeholder="All Cities"/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="hero-search-action">
                        <Link to="#" className="btn full-width btn-primary">Search Result</Link>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <HowItsWork/>
        </section>

        <section className="bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Explore Recent properties</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                
                <GridPropertyOne border={false}/>
                
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                        <Link to="/listings-list-with-sidebar" className="btn btn-primary px-md-5 rounded ">Browse More Properties</Link>
                    </div>
                </div>
            </div>	
        </section>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Find Best Locations</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <BestLoctionOne/>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                        <Link to="/listings-list-with-sidebar" className="btn btn-primary px-md-5 rounded">Browse More Locations</Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="gray">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
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
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>See our packages</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                        </div>
                    </div>
                </div>
                <PricingOne/>
            </div>	
        </section>

        <FooterTop bg="theme-bg"/>
        <Footer/>
    </>
  )
}
