import React from 'react'

import partner1 from '../assets/img/partners/booking.png'
import partner2 from '../assets/img/partners/columbia.png'
import partner3 from '../assets/img/partners/Payoneer.png'
import partner4 from '../assets/img/partners/Paypal.png'
import partner5 from '../assets/img/partners/razorpay.png'
import partner6 from '../assets/img/partners/microsoft.png'
import partner7 from '../assets/img/partners/trivago.png'
import partner8 from '../assets/img/partners/visa.png'
import partner9 from '../assets/img/partners/columbia.png'

const images = [partner1,partner2,partner3,partner4,partner5,partner6,partner6,partner7,partner8,partner9]

export default function SubScribe() {
  return (
    <section className="bg-light">
        <div className="container">
            <div className="row align-items-center justify-content-center gx-5 gy-5">
                {images.map((item:any,index:number)=>{
                    return(
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
                            <div className="explor-thumb">
                                <img src={item} className="img-fluid" alt=""/>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-7 col-lg-11">
                    <div className="call-to-act-wrap text-center">
                        <div className="call-to-act-head mb-2">
                            <h2 className="fs-1 mb-3 lh-sm">Subscribe &<br/>get special discount</h2>
                            <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos molestias excepturi.</span>
                        </div>
                    </div>
                    <div className="call-to-act-form">
                        <form className="newsletter-boxes p-2">
                            <div className="row m-0 g-0">
                                <div className="col-xl-10 col-9">
                                    <input type="text" className="form-control border-0" placeholder="Subscribe Your Email..."/>
                                </div>
                                <div className="col-xl-2 col-3">
                                    <button type="submit" className="btn btn-primary rounded-pill full-width">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
