import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Navbar from '../../components/navbar/navbar'
import SellPropertyOne from '../../components/sell-property-one'
import TeamOne from '../../components/team-one'
import ClientOne from '../../components/client-one'
import FooterTop from '../../components/footer-top'
import Footer from '../../components/footer'

import bg from '../../assets/img/banner-6.png';
import oneImg from "../../assets/img/one.webp"
import twoImg from "../../assets/img/two.webp"
import threeImg from "../../assets/img/three.webp"
import reviewsImg from "../../assets/img/reviews.webp"
import { servicesData } from '../../data/servicesData'
import axios from 'axios'


export default function IndexSix() {
    const navigate = useNavigate()

    useEffect(()=>{
        async function getData(){
            const businessData = await axios.get(global.config.ROOTURL.prod + '/business')
            console.log("buysinmesdDatat", businessData.data.businesses)
        }
        getData()
    },[])
    return (
        <>
            <Navbar transparent={false} />

            <div className="image-cover hero-banner bg-primary" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat' }}>
                <div className="container">
                    <div className="simple-search-wrap">
                        <div className="hero-search-2">
                            <p className="lead-i text-light">Feel Better, Even on Your Busiest Days</p>
                            <h2 className="text-light mb-4">Last-Minute Appointments, First-Class Care</h2>
                            <div className="full-search-2 eclip-search italian-search hero-search-radius shadow-hard mt-5">
                                <div className="hero-search-content">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-9 col-sm-12 elio">
                                            <div className="form-group">
                                                <div className="position-relative">
                                                    <input type="text" className="form-control border-0 ps-5" placeholder="Search for a location" />
                                                    <div className="position-absolute top-50 start-0 translate-middle-y ms-2">
                                                        <span className="svg-icon text-primary svg-icon-2hx">
                                                            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="currentColor" />
                                                                <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="currentColor" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12">
                                            <div className="form-group">
                                                <button type="button" className="btn btn-dark full-width" onClick={()=>navigate("/mapbox")}>Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#f8fdfd] mt-5 mb-5 p-10 rounded-xl">
                {/* Main Title */}
                <h2 className="text-3xl font-bold text-center mb-3">Services We Provide</h2>

                <div className="flex flex-row md:flex-row items-center justify-between gap-10">
                    {/* Left Side - Horizontal Service Grid */}
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full md:w-3/5"
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        {servicesData.map((service, index) => (
                            <div
                                onClick={()=>navigate(`/service/${service.url}`)}
                                key={index}
                                className="bg-white rounded-lg p-4 shadow transition duration-300 ease-in-out hover:shadow-xl hover:brightness-110 text-center"
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="rounded mb-3 mx-auto object-cover transition duration-300 ease-in-out"
                                    style={{ width: "200px", height: "180px", objectFit: "cover" }}
                                />
                                <p className="font-semibold">{service.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className="bg-[#f8fdfd] py-16 px-4 md:px-16">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center">

                    {/* Left Text Section */}
                    <div className="md:w-1/2 flex flex-col items-center justify-center text-center">
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 leading-snug">
                            You’ll find the best professional<br />
                            <span className="font-bold">Massage Therapist and techniques</span><br />
                            for your needs
                        </h2>
                        <p className="text-gray-500 text-base leading-relaxed max-w-md">
                            You’ll have the largest directory of Massage Therapists at your
                            fingertips. Search by business or individual therapist name, massage
                            technique, location, or review rating. Find just what you need to soothe
                            what hurts, relax tense muscles, and bring you a sense of calm.
                        </p>
                    </div>

                    {/* Right Card + Testimonials Section */}
                    <div className="relative group md:w-1/2 flex justify-center">
                        <img
                            src={reviewsImg}
                            alt="reviews"
                            className="w-[280px] h-[320px] object-cover rounded-xl shadow-lg transition-all duration-300 ease-in-out transform group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_3px_rgba(86,97,246,0.4)] cursor-pointer"
                        />
                    </div>
                </div>
            </section>


            {/* <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-10 text-center">
                            <div className="sec-heading center mb-4">
                                <h2>Achievement</h2>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                            </div>
                        </div>
                    </div>
                    <Achievement />
                </div>
            </section> */}
            <div className="clearfix"></div>

            {/* <section className="pt-0 mb-3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-10 text-center">
                            <div className="sec-heading center">
                                <h2>Recent Property For Rent</h2>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                            </div>
                        </div>
                    </div>
                    <PropertySlider />
                </div>
            </section> */}

            <section className="bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-10 text-center">
                            <div className="sec-heading center">
                                <h2>Top-Rated Wellness Practitioners</h2>
                                <p>
                                    Meet our most trusted and highly rated experts in Physiotherapy, Chiropractic Care, Massage Therapy, and Acupuncture.
                                    These professionals are recognized for delivering exceptional care even when you're short on time.
                                </p>
                            </div>
                        </div>
                    </div>
                    <SellPropertyOne border={false} />
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-4">
                            <Link to="listings-list-with-sidebar" className="btn btn-primary px-lg-5 rounded">Browse More Properties</Link>
                        </div>
                    </div>
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
                    <TeamOne />
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
                            <Link to="/listings-list-with-sidebar" className="btn btn-primary px-lg-5 rounded">Explore More Agents</Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className="clearfix"></div>

            <section className="bg-[#f8fdfd] py-16 px-4 md:px-16">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                        You’re <span className="font-bold">3 easy steps</span> away from <br className="hidden md:block" />
                        a great massage experience
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10" style={{ display: "flex", justifyContent: "space-evenly" }}>
                    {[
                        {
                            number: 1,
                            title: "1. Find the right Massage Therapist for you",
                            desc: "Search by name, location, massage technique, or review score",
                            src: oneImg,
                            alt: "Find Therapist"
                        },
                        {
                            number: 2,
                            title: "2. Massage Prices & Availability",
                            desc: "No more phone tag trying to book an appointment",
                            src: twoImg,
                            alt: "Prices and Availability"
                        },
                        {
                            number: 3,
                            title: "3. Massage Online Booking",
                            desc: "You get an immediate confirmation and we'll send an appointment reminder the day before.",
                            src: threeImg,
                            alt: "Online Booking"
                        }
                    ].map(({ number, title, desc, src, alt }, index) => (
                        <div className="text-center flex flex-col items-center h-full" key={index}>
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-500 text-white text-lg font-bold mb-4">
                                {number}
                            </div>
                            <div className="flex flex-col flex-grow justify-between h-full max-w-xs">
                                <div className="px-2">
                                    <h3 className="text-xl font-bold text-gray-800 leading-snug min-h-[56px]">
                                        {title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-2 min-h-[40px]">
                                        {desc}
                                    </p>
                                </div>
                                <img
                                    src={src}
                                    alt={alt}
                                    className="mt-6 rounded-xl"
                                    style={{ width: "250px", height: "280px", objectFit: "cover" }}
                                />
                            </div>
                        </div>

                    ))}
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
                    <ClientOne />
                </div>
            </section>

            {/* <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-10 text-center">
                            <div className="sec-heading center">
                                <h2>See our packages</h2>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                            </div>
                        </div>
                    </div>
                    <PricingOne />
                </div>
            </section> */}

            <FooterTop bg="theme-bg" />

            <Footer />
        </>
    )
}
