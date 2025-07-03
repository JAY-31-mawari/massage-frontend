import React from 'react'
import { Link } from 'react-router-dom'

import { categoriesData } from '../data/data'

export default function Categories() {
  return (
            <div className="row justify-content-center gx-3 gy-3">
                {categoriesData.map((item,index)=>{
                    return(
                        <div className="col-xl-2 col-lg-3 col-md-3 col-6 mt-5" key={index}>
                            <div className="classical-cats-wrap">
                                <Link to="#" className="classical-cats-boxs">
                                    <div className={`classical-cats-icon px-4 py-4 rounded fs-2 ${item.bg}`}>
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="classical-cats-wrap-content">
                                        <h4>{item.title}</h4>
                                        <p>{item.subTitle}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
  )
}
