import React from 'react'
import { clientData } from '../data/data'

import TinySlider from "tiny-slider-react";
import '../../node_modules/tiny-slider/dist/tiny-slider.css'

interface Client{
    image: string;
    quote: string;
    desc: string;
    name: string;
    position: string;
}

const settings = {
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
        992: {
            items: 3
        },

        767: {
            items: 2
        },

        320: {
            items: 1
        },
    },
};

export default function ClientOne() {
  return (
        <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
                <div className="smart-textimonials smart-center" id="smart-textimonials">
                    <TinySlider settings={settings}>
                        {clientData.map((item:Client,index:number)=>{
                            return(
                                <div className="item" key={index}>
                                    <div className="item-box">
                                        <div className="smart-tes-author">
                                            <div className="st-author-box">
                                                <div className="st-author-thumb">
                                                    <div className={`quotes ${item.quote}`}><i className="fa-solid fa-quote-left"></i></div>
                                                    <img src={item.image} className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="smart-tes-content">
                                            <p>{item.desc}</p>
                                        </div>
                                        
                                        <div className="st-author-info">
                                            <h4 className="st-author-title">{item.name}</h4>
                                            <span className="st-author-subtitle">{item.position}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </TinySlider>
                </div>
            </div>
        </div>
  )
}
