import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar/navbar'
import FooterTop from '../components/footer-top'
import Footer from '../components/footer'

import error from '../assets/img/404.png'
import ScrollToTop from '../components/scroll-to-top'

export default function Error() {
  return (
    <>
    <Navbar transparent={false}/>   

    <section className="error-wrap">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10">
                    <div className="text-center">
                        <img src={error} className="img-fluid" alt=""/>
                        <p>Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</p>
                        <Link className="btn btn-primary px-5" to="/">Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <FooterTop bg="theme-bg"/>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
