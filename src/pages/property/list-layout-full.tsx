import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Select from 'react-select';
import Slider from 'rc-slider';

import Navbar from '../../components/navbar/navbar'
import ListPropertyFour from '../../components/list-property-four'
import FooterTop from '../../components/footer-top';
import Footer from '../../components/footer';

import { propertyData } from '../../data/data'

export default function ListLayoutFull() {
  let [open, setOpen] =useState<boolean>(false)
  const [range, setRange] = useState<number[]>([20, 80]); 

  const handleRangeChange = (values: number | number[]) => {
      if (Array.isArray(values)) {
      setRange(values); 
      }
  };

  const shorty = [
    { value: '1', label: 'Low Price' },
    { value: '1', label: 'High Price' },
    { value: '1', label: 'Most Popular' },
]
  return (
    <>
      <Navbar transparent={false}/>

      <section className="bg-primary position-relative">
				<div className="position-absolute start-0 top-0 w-25 h-15 bg-light rounded-end-pill opacity-25 mt-4"></div>
				<div className="position-absolute start-0 bottom-0 w-15 h-20 bg-light rounded-top-pill opacity-25 ms-4"></div>
				<div className="position-absolute end-0 top-0 w-15 h-25 bg-light rounded-bottom-pill opacity-25 me-4"></div>
				<div className="position-absolute end-0 bottom-0 w-25 h-15 bg-light rounded-start-pill opacity-25 mb-4"></div>
				<div className="ht-30"></div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7 col-md-12">
							<div className="full-search-2 eclip-search italian-search hero-search-radius shadow-hard">
								<div className="hero-search-content">
									<div className="row">
										<div className="col-lg-10 col-md-9 col-sm-12">
											<div className="form-group">
												<div className="position-relative">
													<input type="text" className="form-control border-0 ps-5" placeholder="Search for a location"/>
													<div className="position-absolute top-50 start-0 translate-middle-y ms-2">
														<span className="svg-icon text-primary svg-icon-2hx">
															<svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="currentColor"/>
																<path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="currentColor"/>
															</svg>
														</span>
													</div>
												</div>
											</div>
										</div>
										
										<div className="col-lg-2 col-md-3 col-sm-12">
											<div className="form-group">
												<Link to="#" className="btn btn-dark full-width">Search</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="ht-30"></div>
			</section>

      <section className="bg-light">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-12 col-md-12">
							<div className="item-shorting-box">
								<div className="item-shorting clearfix">
									<div className="left-column pull-left"><h4 className="m-0 fs-6">Found 1-10 of 142 Results</h4></div>
								</div>
								<div className="item-shorting-box-right">
									<div className="shorting-by">
                    <Select options={shorty}  className="form-control" placeholder="Show All"/>
									</div>
									<ul className="shorting-list">
										<li>
											<Link to="/grid" className="w-12 h-12">
												<span className="svg-icon text-muted-2 svg-icon-2hx">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor"/>
														<rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor"/>
														<rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor"/>
														<rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor"/>
													</svg>
												</span>
											</Link>
										</li>
										<li>
											<Link to="/list-layout-full" className="active w-12 h-12">
												<span className="svg-icon text-seegreen svg-icon-2hx">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path opacity="0.3" d="M14 10V20C14 20.6 13.6 21 13 21H10C9.4 21 9 20.6 9 20V10C9 9.4 9.4 9 10 9H13C13.6 9 14 9.4 14 10ZM20 9H17C16.4 9 16 9.4 16 10V20C16 20.6 16.4 21 17 21H20C20.6 21 21 20.6 21 20V10C21 9.4 20.6 9 20 9Z" fill="currentColor"/>
														<path d="M7 10V20C7 20.6 6.6 21 6 21H3C2.4 21 2 20.6 2 20V10C2 9.4 2.4 9 3 9H6C6.6 9 7 9.4 7 10ZM21 6V3C21 2.4 20.6 2 20 2H3C2.4 2 2 2.4 2 3V6C2 6.6 2.4 7 3 7H20C20.6 7 21 6.6 21 6Z" fill="currentColor"/>
													</svg>
												</span>
											</Link>
										</li>
										<li>
											<Link to="#" className="w-12 h-12" onClick={()=>setOpen(!open)}>
												<span className="svg-icon text-primary svg-icon-2hx">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor"/>
														<path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor"/>
													</svg>
												</span>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 col-sm-12 list-layout">
							<div className="row">
                {propertyData.slice(0,8).map((item,index)=>{
                  return(
                    <div className="col-xl-6 col-lg-6 col-md-12" key={index}>
                      <ListPropertyFour item={item} border={false}/>
                    </div>
                  )
                })}
							</div>
							
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12">
									<ul className="pagination p-center">
										<li className="page-item">
										  <Link className="page-link" to="#" aria-label="Previous">
											<i className="fa-solid fa-arrow-left-long"></i>
											<span className="sr-only">Previous</span>
										  </Link>
										</li>
										<li className="page-item"><Link className="page-link" to="#">1</Link></li>
										<li className="page-item"><Link className="page-link" to="#">2</Link></li>
										<li className="page-item active"><Link className="page-link" to="#">3</Link></li>
										<li className="page-item"><Link className="page-link" to="#">...</Link></li>
										<li className="page-item"><Link className="page-link" to="#">18</Link></li>
										<li className="page-item">
										  <Link className="page-link" to="#" aria-label="Next">
											<i className="fa-solid fa-arrow-right-long"></i>
											<span className="sr-only">Next</span>
										  </Link>
										</li>
									</ul>
								</div>
							</div>
					
						</div>
						
					</div>
				</div>		
			</section>

      <FooterTop bg="theme-bg"/>
      <Footer/>
      {open && 
        <div className="modal fade bd-example-modal-lg show d-block" id="filter" style={{ backgroundColor:"#0000008a"}}>
          <div className="modal-dialog modal-lg filter_scroll" role="document">
            <div className="modal-content" id="sign-up">
              <span className="mod-close" onClick={()=>setOpen(!open)}><i className="fa-solid fa-xmark"></i></span>
              <div className="modal-body">
                <div className="filter_modal">
                  <div className="filter_modal_inner">
                    <div className="filter_modal_flex">
                    
                      <div className="adv_ft_title"><h5>Advance Filter</h5></div>
                      <div className="flt_single_item">
                        <div className="flt_item_lablel"><label>Price</label></div>
                        <div className="flt_item_content flcl">
                          <div className="rg-slider">
                          <Slider
                                range 
                                min={0}
                                max={100}
                                defaultValue={[20, 80]} 
                                value={range}
                                onChange={handleRangeChange} 
                                allowCross={false} 
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                <span>Min: {range[0]}</span>
                                <span>Max: {range[1]}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flt_single_item">
                        <div className="flt_item_lablel"><label>Bedrooms</label></div>
                        <div className="flt_item_content">
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="bd-1" className="switchbtn-checkbox" type="checkbox" value="bd1" name="bd-1"/>
                              <label className="switchbtn-label" htmlFor="bd-1">Studio</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="bd-2" className="switchbtn-checkbox" type="checkbox" value="bd2" name="bd-2"/>
                              <label className="switchbtn-label" htmlFor="bd-2">1</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="bd-3" className="switchbtn-checkbox" type="checkbox" value="bd3" name="bd-3"/>
                              <label className="switchbtn-label" htmlFor="bd-3">2</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="bd-4" className="switchbtn-checkbox" type="checkbox" value="bd4" name="bd-4"/>
                              <label className="switchbtn-label" htmlFor="bd-4">3</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="bd-5" className="switchbtn-checkbox" type="checkbox" value="bd5" name="bd-5"/>
                              <label className="switchbtn-label" htmlFor="bd-5">4+</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flt_single_item">
                        <div className="flt_item_lablel"><label>Bathrooms</label></div>
                        <div className="flt_item_content">
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="bt-1" className="switchbtn-checkbox" type="checkbox" value="bt1" name="bt-1"/>
                              <label className="switchbtn-label" htmlFor="bt-1">1</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="bt-2" className="switchbtn-checkbox" type="checkbox" value="bt2" name="bt-2"/>
                              <label className="switchbtn-label" htmlFor="bt-2">2</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="bt-3" className="switchbtn-checkbox" type="checkbox" value="bt3" name="bt-3"/>
                              <label className="switchbtn-label" htmlFor="bt-3">3</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="bt-4" className="switchbtn-checkbox" type="checkbox" value="bt4" name="bt-4"/>
                              <label className="switchbtn-label" htmlFor="bt-4">4</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="bt-5" className="switchbtn-checkbox" type="checkbox" value="bt5" name="bt-5"/>
                              <label className="switchbtn-label" htmlFor="bt-5">5+</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flt_single_item">
                        <div className="flt_item_lablel"><label>Hot Deals</label></div>
                        <div className="flt_item_content">
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="d-4" className="switchbtn-checkbox" type="checkbox" value="d" name="d-4"/>
                              <label className="switchbtn-label" htmlFor="d-4">Hot Deals</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flt_single_item">
                        <div className="flt_item_lablel"><label>Pets</label></div>
                        <div className="flt_item_content">
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="pet-4" className="switchbtn-checkbox" type="checkbox" value="pet" name="pet-4"/>
                              <label className="switchbtn-label" htmlFor="pet-4">Pet Friendly</label>
                            </div>
                          </div>
                        </div>
                      </div>
                  
                      <div className="flt_single_item">
                        <div className="flt_item_lablel"><label>Laundry</label></div>
                        <div className="flt_item_content">
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="ld-1" className="switchbtn-checkbox" type="checkbox" value="ld1" name="ld-1"/>
                              <label className="switchbtn-label" htmlFor="ld-1">Washer/Dryer In Unit</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="ld-2" className="switchbtn-checkbox" type="checkbox" value="ld2" name="ld-2"/>
                              <label className="switchbtn-label" htmlFor="ld-2">Washer/Dryer Connections</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="ld-3" className="switchbtn-checkbox" type="checkbox" value="ld3" name="ld-3"/>
                              <label className="switchbtn-label" htmlFor="ld-3">Laundry Facility</label>
                            </div>
                          </div>
                        </div>
                      </div>
                  
                      <div className="flt_single_item">
                        <div className="flt_item_lablel"><label>Amenities</label></div>
                        <div className="flt_item_content align_center">
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="am-1" className="switchbtn-checkbox" type="checkbox" value="am1" name="am-1"/>
                              <label className="switchbtn-label" htmlFor="am-1">Air Conditioning</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="am-2" className="switchbtn-checkbox" type="checkbox" value="am2" name="am-2"/>
                              <label className="switchbtn-label" htmlFor="am-2">Senior Living</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="am-3" className="switchbtn-checkbox" type="checkbox" value="am3" name="am-3"/>
                              <label className="switchbtn-label" htmlFor="am-3">Waterfront</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="am-4" className="switchbtn-checkbox" type="checkbox" value="am4" name="am-4"/>
                              <label className="switchbtn-label" htmlFor="am-4">Garage</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="am-5" className="switchbtn-checkbox" type="checkbox" value="am5" name="am-5"/>
                              <label className="switchbtn-label" htmlFor="am-5">Spa & Massage</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="am-6" className="switchbtn-checkbox" type="checkbox" value="am6" name="am-6"/>
                              <label className="switchbtn-label" htmlFor="am-6">Car Parking</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="am-7" className="switchbtn-checkbox" type="checkbox" value="am7" name="am-7"/>
                              <label className="switchbtn-label" htmlFor="am-7">Free WiFi</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="am-8" className="switchbtn-checkbox" type="checkbox" value="am8" name="am-8"/>
                              <label className="switchbtn-label" htmlFor="am-8">Pets Allow</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="am-9" className="switchbtn-checkbox" type="checkbox" value="am9" name="am-9"/>
                              <label className="switchbtn-label" htmlFor="am-9">Internet</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="am-10" className="switchbtn-checkbox" type="checkbox" value="am10" name="am-10"/>
                              <label className="switchbtn-label" htmlFor="am-10">Window Covering</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="am-11" className="switchbtn-checkbox" type="checkbox" value="am11" name="am-11"/>
                              <label className="switchbtn-label" htmlFor="am-11">Alarm</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="am-12" className="switchbtn-checkbox" type="checkbox" value="am12" name="am-12"/>
                              <label className="switchbtn-label" htmlFor="am-12">Gym</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="am-13" className="switchbtn-checkbox" type="checkbox" value="am13" name="am-13"/>
                              <label className="switchbtn-label" htmlFor="am-13">Luxury Community</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="am-14" className="switchbtn-checkbox" type="checkbox" value="am14" name="am-14"/>
                              <label className="switchbtn-label" htmlFor="am-14">Central Heating</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="am-15" className="switchbtn-checkbox" type="checkbox" value="am15" name="am-15"/>
                              <label className="switchbtn-label" htmlFor="am-15">Swimming Pool</label>
                            </div>
                          </div>
                        </div>
                      </div>
                  
                      <div className="flt_single_item">
                        <div className="flt_item_lablel"><label>Sort By</label></div>
                        <div className="flt_item_content">
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="st-1" className="switchbtn-checkbox" type="checkbox" value="st1" name="st-1"/>
                              <label className="switchbtn-label" htmlFor="st-1">Best Match</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="st-2" className="switchbtn-checkbox" type="checkbox" value="st2" name="st-2"/>
                              <label className="switchbtn-label" htmlFor="st-2">Price: Low to High</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="st-3" className="switchbtn-checkbox" type="checkbox" value="st3" name="st-3"/>
                              <label className="switchbtn-label" htmlFor="st-3">Price: High to Low</label>
                            </div>
                          </div>
                          <div className="switchbtn-wrap">
                            <div className="switchbtn">
                              <input id="st-4" className="switchbtn-checkbox" type="checkbox" value="st4" name="st-4"/>
                              <label className="switchbtn-label" htmlFor="st-4">Top Rated</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="elgio_filter">
                  <div className="elgio_ft_first">
                    <button className="btn btn-dark">
                      Reset<span className="reset_counter">10</span>
                    </button>
                  </div>
                  <div className="elgio_ft_last">
                    <button className="btn btn-gray mr-2">Cancel</button>
                    <button className="btn btn-primary mr-2">See 76 Properties</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

    </>
  )
}
