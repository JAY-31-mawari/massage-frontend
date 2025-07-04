import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select';

import Navbar from '../../components/navbar/navbar'
import FooterTop from '../../components/footer-top';
import Footer from '../../components/footer';

export default function SubmitProperty() {
    const [profilePicture, setProfilePicture] = useState('')
    const [governmentId, setGovernmentId] = useState('')
    const [qualification, setQualification] = useState('')
    const [treatmentSpace, setTreatmentSpace] = useState('')
    const [insurance, setInsurance] = useState('')
    const [show, setShow] = useState<boolean>(false)
    const [businessName, setBusinessName] = useState('')
    const [businessType, setBusinessType] = useState<string | undefined>('')
    const [areaOfExpertise, setAreaOfExpertise] = useState<string | undefined>('')
    const [license, setLicense] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [bankingDetails, setBankingDetails] = useState('')
    const [merchantAddress, setMerchantAddress] = useState('')
    const [merchantCity, setMerchantCity] = useState('')
    const [merchantState, setMerchantState] = useState('')
    const [merchantZipCode, setMerchantZipCode] = useState('')
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneNoError, setphoneNoError] = useState('')

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const validatePhone = (phone: string) => {
        const regex = /^[1-9]\d{9}$/;
        return regex.test(phone);
    };

    const handleEmailChange = (e: any) => {
        const value = e.target.value
        setEmail(value)

        if (value === '') {
            setEmailError('Email is required')
        } else if (!validateEmail(value)) {
            setEmailError('Please enter a valid email address')
        } else {
            setEmailError('')
        }
    }

    const handlePhoneNoChange = (e: any) => {
        const value = e.target.value;
        setPhone(value);

        if (value === '') {
            setphoneNoError('Phone number is required');
        } else if (!validatePhone(value)) {
            setphoneNoError('Please enter a valid 10-digit phone number');
        } else {
            setphoneNoError('');
        }
    };

    function handleFileChange(e: any) {
        const eventName = e.target.name

        if (eventName === "treatmentSpace") {
            setTreatmentSpace(e.target.files[0].name)
        } else if (eventName === "insurance") {
            setInsurance(e.target.files[0].name)
        } else if (eventName === "governmentId") {
            setGovernmentId(e.target.files[0].name)
        } else if (eventName === "qualification") {
            setQualification(e.target.files[0].name)
        } else {
            setProfilePicture(e.target.files[0].name)
        }
        console.log(e.target.files[0]);
    }

    const expertiseList = [
        { value: 'Physiotherapy', label: 'Physiotherapy' },
        { value: 'Chiropractic', label: 'Chiropractic' },
    ];
    const businessTypeList = [
        { value: 'Individual Practitioner', label: 'Individual Practitioner' },
        { value: 'Clinic', label: 'Clinic' },
        { value: 'Company', label: 'Company' },
    ];

    const handleMerchantFormSubmit = () => {
        setBusinessName('')
        setBusinessType('')
        setEmail('')
        setPhone('')
        setAreaOfExpertise('')
        setLicense('')
        setPostalCode('')
        setBankingDetails('')
        setMerchantAddress('')
        setMerchantCity('')
        setMerchantState('')
        setMerchantZipCode('')
    }
    
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
                                                <input type="text" className="form-control" placeholder='Full Name/Business Name' value={businessName} onChange={(e) => setBusinessName(e.target.value)}/>
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>Business Type</label>
                                                <Select options={businessTypeList} className='form-control' classNamePrefix="react-select" placeholder="Business Type" value={businessTypeList.find((option)=> option.value === businessType)} onChange={(selectedOption)=>setBusinessType(selectedOption?.value)} />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>Email Address</label>
                                                <input type="text" className={`form-control ${emailError ? 'is-invalid' : ''}`} placeholder='Email Address' value={email} onChange={handleEmailChange} />
                                                {emailError && <div className="invalid-feedback">{emailError}</div>}
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>Phone Number</label>
                                                <input type="text" className={`form-control ${phoneNoError ? 'is-invalid' : ''}`} placeholder="Phone No" value={phone} onChange={handlePhoneNoChange} />
                                                {phoneNoError && <div className="invalid-feedback">{phoneNoError}</div>}

                                            </div>

                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>Areas of Expertise</label>
                                                <Select options={expertiseList} className="form-control" classNamePrefix="react-select" placeholder="Areas of Expertise" value={expertiseList.find((option) => option.value === areaOfExpertise)} onChange={(selectedOption) => setAreaOfExpertise(selectedOption?.value)} />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>License/Registration Number</label>
                                                <input type="text" className="form-control" value={license} onChange={(e)=>setLicense(e.target.value)} />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>For mobile practitioners - Coverage Postal code</label>
                                                <input type="text" className="form-control" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)}/>
                                            </div>

                                            <div className="form-group col-md-12">
                                                <label className='mb-2'>Banking Details</label>
                                                <input type="text" className="form-control" placeholder='Banking Details' value={bankingDetails} onChange={(e)=>setBankingDetails(e.target.value)}/>

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
                                                <input type="text" className="form-control" value={merchantAddress} onChange={(e)=>setMerchantAddress(e.target.value)}/>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>City</label>
                                                <input type="text" className="form-control" value={merchantCity} onChange={(e)=>setMerchantCity(e.target.value)}/>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>State</label>
                                                <input type="text" className="form-control" value={merchantState} onChange={(e)=>setMerchantState(e.target.value)}/>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>Zip Code</label>
                                                <input type="text" className="form-control" value={merchantZipCode} onChange={(e)=>setMerchantZipCode(e.target.value)}/>
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
                                                onChange={handleFileChange}
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
                                                        style={{ width: '100px', padding: '0px 10px', height: '100px', borderRadius: '10px', objectFit: 'cover' }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="dz-default dz-message text-center" style={{ display: "flex", alignItems: "baseline", zIndex: 1 }}>
                                                    <i className="fa-solid fa-images" style={{ fontSize: '24px', color: '#888', paddingRight: '10px' }}></i>
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
                                                onChange={handleFileChange}
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
                                                        style={{ width: '100px', padding: '0px 10px', height: '100px', borderRadius: '10px', objectFit: 'cover' }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="dz-default dz-message text-center" style={{ display: "flex", alignItems: "baseline", zIndex: 1 }}>
                                                    <i className="fa-solid fa-images" style={{ fontSize: '24px', color: '#888', paddingRight: '10px' }}></i>
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
                                                onChange={handleFileChange}
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
                                                        style={{ width: '100px', padding: '0px 10px', height: '100px', borderRadius: '10px', objectFit: 'cover' }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="dz-default dz-message text-center" style={{ display: "flex", alignItems: "baseline", zIndex: 1 }}>
                                                    <i className="fa-solid fa-images" style={{ fontSize: '24px', color: '#888', paddingRight: '10px' }}></i>
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
                                                onChange={handleFileChange}
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
                                                        style={{ width: '100px', padding: '0px 10px', height: '100px', borderRadius: '10px', objectFit: 'cover' }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="dz-default dz-message text-center" style={{ display: "flex", alignItems: "baseline", zIndex: 1 }}>
                                                    <i className="fa-solid fa-images" style={{ fontSize: '24px', color: '#888', paddingRight: '10px' }}></i>
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
                                                onChange={handleFileChange}
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
                                                        style={{ width: '100px', padding: '0px 10px', height: '100px', borderRadius: '10px', objectFit: 'cover' }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="dz-default dz-message text-center" style={{ display: "flex", alignItems: "baseline", zIndex: 1 }}>
                                                    <i className="fa-solid fa-images" style={{ fontSize: '24px', color: '#888', paddingRight: '10px' }}></i>
                                                    <p className="mb-0 mt-2">Click or Drag to Upload</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>




                                <div className="form-group col-lg-12 col-md-12">
                                    <button className="btn btn-primary fw-medium px-5" type="button"onClick={handleMerchantFormSubmit}>Submit & Preview</button>
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
