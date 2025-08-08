import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import image1 from '../../assets/img/p-14.jpg'
import { deleteStorageItem, getStorageItem } from '../../utils/sessionStorage'
import axios from 'axios'

interface PaymentCard{
    id: string
    cardNumber: string
    cardHolderName: string
    expiryDate: string
    isDefault: boolean
    cardType: string
    isActive: boolean
    lastUsed: Date
    isExpired: boolean
}

export default function Payment() {
    let [open, setOpen] = useState<boolean>(true)
    let [open2, setOpen2] = useState<boolean>(false)
    let [open3, setOpen3] = useState<boolean>(true)
    let [open4, setOpen4] = useState<boolean>(false)
    const [paymentCard, setPaymentCard] = useState<PaymentCard>()
    const accessToken = getStorageItem("token")
    const navigate = useNavigate()

    useEffect(()=>{
        async function getPayment(){
            if(!accessToken) return;

            const payment = {
                method: 'GET',
                url: global.config.ROOTURL.prod + '/payment/default',
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                    "Content-type": "application/json"
                },

            }
            const paymentRes = await axios(payment).then((res)=>{
                setPaymentCard(res.data.data)
            }).catch((err)=>{
                if(err.response.status === 401){
                    console.log("UnAuthorized Access, getPayment")
                    deleteStorageItem('user-data')
                    deleteStorageItem('token')
                    setTimeout(() => {
                        navigate("/create-account");
                    }, 2000);  
                }
            })
        }
        getPayment()
    },[])
    return (
        <>
            <section className="gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 form-submit">
                            <div className="checkout-wrap">
                                <div className="checkout-head">
                                    <ul>
                                        <li className="active"><span><i className="fa-solid fa-check"></i></span>Customer Detail</li>
                                        <li><span>2</span>Payment Information</li>
                                        <li><span>3</span>Confirmation!</li>
                                    </ul>
                                </div>
                                <div className="checkout-body">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <h4 className="mb-3">Billing Detail</h4>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label>FullName<i className="req">*</i></label>
                                                <input type="text" className="form-control" value={ paymentCard?.cardHolderName || "Calvin"} />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label>Email<i className="req">*</i></label>
                                                <input type="email" className="form-control" value="resido@gmail.com" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input type="text" className="form-control" value="+12 4578 4667" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label>Country<i className="req">*</i></label>
                                                <select id="country" className="form-control">
                                                    <option value="">&nbsp;</option>
                                                    <option value="1">United State</option>
                                                    <option value="2">United kingdom</option>
                                                    <option value="3">India</option>
                                                    <option value="4">Canada</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label>City<i className="req">*</i></label>
                                                <select id="cities" className="form-control">
                                                    <option value="">&nbsp;</option>
                                                    <option value="1">Canada, USA</option>
                                                    <option value="2">California</option>
                                                    <option value="3">Newyork</option>
                                                    <option value="4">Liverpool</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label>Special Instruction</label>
                                                <textarea className="form-control"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <input id="a-2" className="form-check-input" name="a-2" type="checkbox" />
                                                <label htmlFor="a-2" className="form-check-label">Create An Account</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group text-center">
                                                <Link to="#" className="btn btn-primary rounded">Next Step</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="checkout-wrap">
                                <div className="checkout-head">
                                    <ul>
                                        <li><span><i className="fa-solid fa-check"></i></span>Customer Detail</li>
                                        <li className="active"><span>2</span>Payment Information</li>
                                        <li><span>3</span>Confirmation!</li>
                                    </ul>
                                </div>

                                <div className="checkout-body">
                                    <div className="row mb-5">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <h4 className="mb-3">Payment Information</h4>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="switchbtn paying">
                                                <input id="pay-2" className="switchbtn-checkbox" type="radio" value="2" name="pay-2" defaultChecked />
                                                <label className="switchbtn-label" htmlFor="pay-2">
                                                    Pay with Credit card
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="switchbtn paying">
                                                <input id="pay-3" className="switchbtn-checkbox" type="radio" value="2" name="pay-2" />
                                                <label className="switchbtn-label" htmlFor="pay-3">
                                                    Pay with PayPal
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label>Card Holder Name</label>
                                                <input type="text" className="form-control" value={paymentCard?.cardHolderName} />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label>Card Number</label>
                                                <input type="text" className="form-control" value={paymentCard?.cardNumber} />
                                            </div>
                                        </div>

                                        <div className="col-lg-5 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label>Expire Date</label>
                                                <input type="text" className="form-control" value={paymentCard?.expiryDate} />
                                            </div>
                                        </div>

                                        <div className="col-lg-2 col-md-2 col-sm-12">
                                            <div className="form-group">
                                                <label>Card Type</label>
                                                <input type="text" className="form-control" value={paymentCard?.cardType} />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <input id="a-2" className="form-check-input" name="a-2" type="checkbox" />
                                                <label htmlFor="a-2" className="form-check-label">By Continuing, you ar'e agree to conditions</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group text-center">
                                                <Link to="#" className="btn btn-primary rounded full-width">Confirm Booking</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="checkout-wrap">
                                <div className="checkout-head">
                                    <div className="success-message">
                                        <span className="thumb-check"><i className="fa-solid fa-check-double"></i></span>
                                        <h4>Thank You, Your Booking Order Confirmed!</h4>
                                        <p>A confirmation mail send to your email, Check your inbox.</p>
                                    </div>
                                </div>
                                <div className="checkout-body">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12">
                                            <ul className="booking-detail-list">
                                                <li>Booking ID/Num.<span>#BK1254872</span></li>
                                                <li>First Name<span>Calvin</span></li>
                                                <li>Last Name<span>Carlo</span></li>
                                                <li>Email<span>resido@gmail.com</span></li>
                                                <li>Phone<span>91 235 458 7458</span></li>
                                                <li>City<span>California</span></li>
                                                <li>Contry<span>United State</span></li>
                                                <li>Location<span>New Besil, Liverpool</span></li>
                                                <li>Zip<span>215467</span></li>
                                            </ul>
                                            <hr />
                                            <h4>Payment Detail</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-12">
                            <div className="checkout-side">
                                <div className="booking-short">
                                    <img src={image1} className="img-fluid" alt="" />
                                    <h4>Manali To Paris, London</h4>
                                    <span>Liverpool, London</span>
                                </div>

                                <div className="booking-short-side">
                                    <div className="accordion" id="accordionExample">
                                        <div className="card">
                                            <div className="card-header" id="bookinDet">
                                                <h2 className="mb-0">
                                                    <button className={`btn btn-link py-0 ${open ? '' : 'collapsed'}`} type="button" onClick={() => setOpen(!open)}>
                                                        Booking Detail
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="bookinSer" className={`collapse  ${open ? 'show' : ''}`}>
                                                <div className="card-body">
                                                    <ul className="booking-detail-list">
                                                        <li>10 May 2020- 20 May 2020</li>
                                                        <li>Tour Days<span>5 Days</span></li>
                                                        <li>Adults<span>4</span></li>
                                                        <li>Children<span>3</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="extraFeat">
                                                <h2 className="mb-0">
                                                    <button className={`btn btn-link py-0 ${open2 ? '' : 'collapsed'}`} type="button" onClick={() => setOpen2(!open2)}>
                                                        Extra Features
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="extraSer" className={`collapse  ${open2 ? 'show' : ''}`}>
                                                <div className="card-body">
                                                    <ul className="booking-detail-list">
                                                        <li>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="brks" />
                                                                <label className="form-check-label" htmlFor="brks">
                                                                    Breakfast
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="rsv" />
                                                                <label className="form-check-label" htmlFor="rsv">
                                                                    Rooms Service
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="wifis" />
                                                                <label className="form-check-label" htmlFor="wifis">
                                                                    Wifi Free
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="carser" />
                                                                <label className="form-check-label" htmlFor="carser">
                                                                    Car Driving
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="CouponCode">
                                                <h2 className="mb-0">
                                                    <button className={`btn btn-link h-auto py-0 ${open3 ? '' : 'collapsed'}`} type="button" onClick={() => setOpen3(!open3)}>
                                                        Coupon Code
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="couponcd" className={`collapse  ${open3 ? 'show' : ''}`}>
                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Code" />
                                                        <button type="button" className="btn btn-dark full-width mt-2">Apply</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="PayMents">
                                                <h2 className="mb-0">
                                                    <button className={`btn btn-link py-0 ${open4 ? '' : 'collapsed'}`} type="button" onClick={() => setOpen4(!open4)}>
                                                        Payment
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="payser" className={`collapse  ${open4 ? 'show' : ''}`}>
                                                <div className="card-body">
                                                    <ul className="booking-detail-list">
                                                        <li>Sub Total<span>$224</span></li>
                                                        <li>Extra Price<span>$70</span></li>
                                                        <li>Tax<span>$20</span></li>
                                                        <li><b>Pay Ammount</b><span>$314</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
