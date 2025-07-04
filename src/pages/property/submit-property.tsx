import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select';

import Navbar from '../../components/navbar/navbar'
import FooterTop from '../../components/footer-top';
import Footer from '../../components/footer';

export default function SubmitProperty() {
    const [file, setFile] = useState('')
    const [profilePicture, setProfilePicture] = useState('')
    const [governmentId, setGovernmentId] = useState('')
    const [qualification, setQualification] = useState('')
    const [treatmentSpace, setTreatmentSpace] = useState('')
    const [insurance, setInsurance] = useState('')
    const [show, setShow] = useState<boolean>(false)

    function handleChange(e: any) {
        const eventName = e.target.name

        if(eventName === "treatmentSpace"){
            setTreatmentSpace(e.target.files[0].name)
        }else if(eventName === "insurance"){
            setInsurance(e.target.files[0].name)
        }else if(eventName === "governmentId"){
            setGovernmentId(e.target.files[0].name)
        }else if(eventName === "qualification"){
            setQualification(e.target.files[0].name)
        }else{
            setProfilePicture(e.target.files[0].name)
        }
        console.log(e.target.files[0]);
    }

    const expertise = [
        { value: 'Physiotherapy', label: 'Physiotherapy' },
        { value: 'Chiropractic', label: 'Chiropractic' },
    ];
    const businessType = [
        { value: 'Individual Practitioner', label: 'Individual Practitioner' },
        { value: 'Clinic', label: 'Clinic' },
        { value: 'Company', label: 'Company' },
    ];
    return (
        <>
            <Navbar transparent={false} />

            <div className="page-title">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2 className="ipt-title">Submit Property</h2>
                            <span className="ipn-subtitle">Just Submit Your Property</span>
                        </div>
                    </div>
                </div>
            </div>

            <section className="gray-simple">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="alert bg-success text-light text-center" role="alert">
                                Hi Dear, Have you already an account? <Link to="#" className="text-warning" onClick={() => setShow(!show)}>Please Login</Link>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div id="login-frm" className={`collapse mb-5 ${show ? 'show' : ''}`}>
                                <div className="row">

                                    <div className="col-lg-5 col-md-4 col-sm-6">
                                        <div className="form-group">
                                            <div className="input-with-icons">
                                                <input type="text" className="form-control" placeholder="Username" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-4 col-sm-6">
                                        <div className="form-group">
                                            <div className="input-with-icons">
                                                <input type="text" className="form-control" placeholder="*******" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-2 col-md-4 col-sm-12">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary full-width">Submit</button>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="exclop-wrap d-flex align-items-center justify-content-between">
                                            <div className="exclop">
                                                <input id="a-1" className="form-check-input" name="a-1" type="checkbox" />
                                                <label htmlFor="a-1" className="form-check-label ms-2">Remember Me</label>
                                            </div>
                                            <div className="exclop-last">
                                                <Link to="#" className="fw-medium text-primary">Forget Password?</Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="submit-page">
                                <div className="form-submit">
                                    <h3>Basic Information</h3>
                                    <div className="submit-section">
                                        <div className="row">
                                            <div className="form-group col-md-12">
                                                <label className='mb-2'>Full Name/Business Name</label>
                                                <input type="text" className="form-control" placeholder='Full Name/Business Name' />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>Business Type</label>
                                                <Select options={businessType} className="form-control" placeholder="Business Type" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>Email Address</label>
                                                <input type="text" className="form-control" placeholder='Email Address' />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>Phone Number</label>
                                                <input type="text" className="form-control" placeholder="Phone No" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>Areas of Expertise</label>
                                                <Select options={expertise} className="form-control" placeholder="Areas of Expertise" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>License/Registration Number</label>
                                                <input type="text" className="form-control" />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>For mobile practitioners - Coverage Postal code</label>
                                                <input type="text" className="form-control" />
                                            </div>

                                            <div className="form-group col-md-12">
                                                <label className='mb-2'>Banking Details</label>
                                                <input type="text" className="form-control" placeholder='Banking Details' />

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-submit">
                                    <h3>Business Address</h3>
                                    <div className="submit-section">
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>Address</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>City</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>State</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>Zip Code</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-submit">
                                    <h3>Upload Documents</h3>
                                    <div className="form-group col-md-12 d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3">
                                        {/* Label on the left */}
                                        <label className="mb-0" style={{ minWidth: '150px' }}>
                                            Photos of Treatment Space
                                        </label>

                                        {/* Upload box on the right */}
                                        <div
                                            className="dropzone dz-clickable primary-dropzone flex-grow-1"
                                            style={{
                                                position: 'relative',
                                                height: '60px',
                                                minHeight: '60px',
                                                border: '2px dashed #ccc',
                                                borderRadius: '10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: '#f9f9f9',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <input
                                                type="file"
                                                name='treatmentSpace'
                                                onChange={handleChange}
                                                style={{
                                                    position: 'absolute',
                                                    width: '100%',
                                                    height: '100%',
                                                    opacity: 0,
                                                    cursor: 'pointer',
                                                    zIndex: 2
                                                }}
                                            />

                                            {treatmentSpace ? (
                                                <div className="dz-image" style={{ zIndex: 1 }}>
                                                    <img
                                                        src={treatmentSpace}
                                                        alt={treatmentSpace}
                                                        style={{ width: '100px', padding:'0px 10px',height: '100px', borderRadius: '10px', objectFit: 'cover' }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="dz-default dz-message text-center" style={{ display:"flex", alignItems:"baseline", zIndex: 1 }}>
                                                    <i className="fa-solid fa-images" style={{ fontSize: '24px', color: '#888', paddingRight:'10px' }}></i>
                                                    <p className="mb-0 mt-2">Click or Drag to Upload</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="form-group col-md-12 d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3">
                                        {/* Label on the left */}
                                        <label className="mb-0" style={{ minWidth: '150px' }}>
                                            Insurance
                                        </label>

                                        {/* Upload box on the right */}
                                        <div
                                            className="dropzone dz-clickable primary-dropzone flex-grow-1"
                                            style={{
                                                position: 'relative',
                                                height: '60px',
                                                minHeight: '60px',
                                                border: '2px dashed #ccc',
                                                borderRadius: '10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: '#f9f9f9'
                                            }}
                                        >
                                            <input
                                                type="file"
                                                name="insurance"
                                                onChange={handleChange}
                                                style={{
                                                    position: 'absolute',
                                                    width: '100%',
                                                    height: '100%',
                                                    opacity: 0,
                                                    cursor: 'pointer',
                                                    zIndex: 2
                                                }}
                                            />

                                            {insurance ? (
                                                <div className="dz-image" style={{ zIndex: 1 }}>
                                                    <img
                                                        src={insurance}
                                                        alt={insurance}
                                                        style={{ width: '100px',padding:'0px 10px', height: '100px', borderRadius: '10px', objectFit: 'cover' }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="dz-default dz-message text-center" style={{ display:"flex", alignItems:"baseline", zIndex: 1 }}>
                                                    <i className="fa-solid fa-images" style={{ fontSize: '24px', color: '#888', paddingRight:'10px' }}></i>
                                                    <p className="mb-0 mt-2">Click or Drag to Upload</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="form-group col-md-12 d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3">
                                        {/* Label on the left */}
                                        <label className="mb-0" style={{ minWidth: '150px' }}>
                                            Government issued ID
                                        </label>

                                        {/* Upload box on the right */}
                                        <div
                                            className="dropzone dz-clickable primary-dropzone flex-grow-1"
                                            style={{
                                                position: 'relative',
                                                height: '60px',
                                                minHeight: '60px',
                                                border: '2px dashed #ccc',
                                                borderRadius: '10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: '#f9f9f9'
                                            }}
                                        >
                                            <input
                                                type="file"
                                                name="governmentId"
                                                onChange={handleChange}
                                                style={{
                                                    position: 'absolute',
                                                    width: '100%',
                                                    height: '100%',
                                                    opacity: 0,
                                                    cursor: 'pointer',
                                                    zIndex: 2
                                                }}
                                            />

                                            {governmentId ? (
                                                <div className="dz-image" style={{ zIndex: 1 }}>
                                                    <img
                                                        src={governmentId}
                                                        alt={governmentId}
                                                        style={{ width: '100px',padding:'0px 10px', height: '100px', borderRadius: '10px', objectFit: 'cover' }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="dz-default dz-message text-center" style={{ display:"flex", alignItems:"baseline", zIndex: 1 }}>
                                                    <i className="fa-solid fa-images" style={{ fontSize: '24px', color: '#888', paddingRight:'10px' }}></i>
                                                    <p className="mb-0 mt-2">Click or Drag to Upload</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="form-group col-md-12 d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3">
                                        {/* Label on the left */}
                                        <label className="mb-0" style={{ minWidth: '150px' }}>
                                            Proof of Qualification 
                                        </label>

                                        {/* Upload box on the right */}
                                        <div
                                            className="dropzone dz-clickable primary-dropzone flex-grow-1"
                                            style={{
                                                position: 'relative',
                                                height: '60px',
                                                minHeight: '60px',
                                                border: '2px dashed #ccc',
                                                borderRadius: '10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: '#f9f9f9'
                                            }}
                                        >
                                            <input
                                                type="file"
                                                name="qualification"
                                                onChange={handleChange}
                                                style={{
                                                    position: 'absolute',
                                                    width: '100%',
                                                    height: '100%',
                                                    opacity: 0,
                                                    cursor: 'pointer',
                                                    zIndex: 2
                                                }}
                                            />

                                            {qualification ? (
                                                <div className="dz-image" style={{ zIndex: 1 }}>
                                                    <img
                                                        src={qualification}
                                                        alt={qualification}
                                                        style={{ width: '100px',padding:'0px 10px', height: '100px', borderRadius: '10px', objectFit: 'cover' }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="dz-default dz-message text-center" style={{ display:"flex", alignItems:"baseline", zIndex: 1 }}>
                                                    <i className="fa-solid fa-images" style={{ fontSize: '24px', color: '#888', paddingRight:'10px' }}></i>
                                                    <p className="mb-0 mt-2">Click or Drag to Upload</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="form-group col-md-12 d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3">
                                        {/* Label on the left */}
                                        <label className="mb-0" style={{ minWidth: '150px' }}>
                                            Logo or profile picture 
                                        </label>

                                        {/* Upload box on the right */}
                                        <div
                                            className="dropzone dz-clickable primary-dropzone flex-grow-1"
                                            style={{
                                                position: 'relative',
                                                height: '60px',
                                                minHeight: '60px',
                                                border: '2px dashed #ccc',
                                                borderRadius: '10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: '#f9f9f9'
                                            }}
                                        >
                                            <input
                                                type="file"
                                                name="profilePicture"
                                                onChange={handleChange}
                                                style={{
                                                    position: 'absolute',
                                                    width: '100%',
                                                    height: '100%',
                                                    opacity: 0,
                                                    cursor: 'pointer',
                                                    zIndex: 2
                                                }}
                                            />

                                            {profilePicture ? (
                                                <div className="dz-image" style={{ zIndex: 1 }}>
                                                    <img
                                                        src={profilePicture}
                                                        alt={profilePicture}
                                                        style={{ width: '100px',padding:'0px 10px', height: '100px', borderRadius: '10px', objectFit: 'cover' }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="dz-default dz-message text-center" style={{ display:"flex", alignItems:"baseline", zIndex: 1 }}>
                                                    <i className="fa-solid fa-images" style={{ fontSize: '24px', color: '#888', paddingRight:'10px' }}></i>
                                                    <p className="mb-0 mt-2">Click or Drag to Upload</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>




                                <div className="form-group col-lg-12 col-md-12">
                                    <button className="btn btn-primary fw-medium px-5" type="button">Submit & Preview</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterTop bg="theme-bg" />

            <Footer />
        </>
    )
}
