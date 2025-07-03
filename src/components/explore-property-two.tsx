import React from 'react'
import { explorePlace } from '../data/data'
import { Link } from 'react-router-dom';

interface Place {
    image: string;
    loction: string;
    property: string;
}

export default function ExplorePropertyTwo() {
  return (
        <div className="row justify-content-center g-4">
            {explorePlace.slice(0,8).map((item:Place,index:number)=>{
                return(
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
                        <div className="card border-0 rounded-4 h-100 position-relative">
                            <Link to="/place-search">
                                <div className="abx-thumb" data-overlay="3">
                                    <img src={item.image} className="img-fluid" alt=""/>
                                </div>
                            </Link>
                            <div className="position-absolute top-0 left-0 mt-3 ms-3 z-1">
                                <div className="d-inline-flex align-items-center justify-content-start">
                                    <div className="flex-shrink-0">
                                        <div className="square--50 circle"><img src={item.image} className="img-fluid h-100 object-fit circle" alt=""/></div>
                                    </div>
                                    <div className="explo-caption ps-3">
                                        <div className="label d-inline-flex bg-primary text-light mb-1">{item.loction}</div>
                                        <div className="text-light fw-medium">{item.property}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
  )
}
