import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Select from 'react-select';

import Navbar from '../../components/navbar/navbar'
import FooterTop from '../../components/footer-top';
import Footer from '../../components/footer';
import { UploadButton } from '../../utils/uploadthing';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';

interface PractitionerData {
    practitionerName: string;
    license: string;
    areaOfExpertise: string[];
    treatmentSpace: string;
    insurance: string;
    governmentId: string;
    qualification: string;
    profilePicture: string;
}

export default function SubmitProperty() {
    const navigate = useNavigate()
    const [show, setShow] = useState<boolean>(false)
    const [businessName, setBusinessName] = useState('')
    const [businessType, setBusinessType] = useState<string | undefined>('')
    // const [areaOfExpertise, setAreaOfExpertise] = useState<string | undefined>('')
    // const [license, setLicense] = useState('')
    const [bankingDetails, setBankingDetails] = useState('')
    const [merchantAddress, setMerchantAddress] = useState('')
    const [merchantCity, setMerchantCity] = useState('')
    const [merchantState, setMerchantState] = useState('')
    const [merchantZipCode, setMerchantZipCode] = useState('')
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneNoError, setphoneNoError] = useState('')
    const [description, setDescription] = useState('')
    const [tabs, setTabs] = useState([{ id: 1 }]);
    const [activeTab, setActiveTab] = useState(1);

    // Optional: Store data per tab if needed later
    const [tabData, setTabData] = useState<{ [key: number]: any }>({
        1: {
            practitionerName: '',
            areaOfExpertise: [],
            license: '',
            treatmentSpace: '',
            insurance: '',
            governmentId: '',
            qualification: '',
            profilePicture: '',
        }
    });

    const [currentStep, setCurrentStep] = useState(1);

    // validations AFTER all state is declared
    const isBasicInfoValid =
        businessName &&
        businessType &&
        email &&
        !emailError &&
        phone &&
        !phoneNoError &&
        bankingDetails &&
        (businessType !== "Other" || description);

    const isBusinessAddressValid =
        merchantAddress && merchantCity && merchantState && merchantZipCode;

    const isPractitionerDetailsValid =
        tabData[activeTab]?.practitionerName &&
        tabData[activeTab]?.areaOfExpertise?.length > 0 &&
        tabData[activeTab]?.license;

    const expertiseList = [
        { value: 'Physiotherapy', label: 'Physiotherapy' },
        { value: 'Chiropractic Care', label: 'Chiropractic Care' },
        { value: 'Massage Therapy', label: 'Massage Therapy' },
        { value: 'Acupuncture', label: 'Acupuncture' }
    ];
    const businessTypeList = [
        { value: 'Clinic-Based Practice', label: 'Clinic-Based Practice' },
        { value: 'Home-Based Practice', label: 'Home-Based Practice' },
        { value: 'Mobile Practitioner', label: 'Mobile Practitioner' },
        { value: 'Other', label: 'Other' }
    ];

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

    const addTab = () => {
        const nextId = tabs.length + 1;
        setTabs([...tabs, { id: nextId }]);
        setTabData((prev) => ({
            ...prev,
            [nextId]: {
                practitionerName: '',
                areaOfExpertise: [],
                license: '',
                treatmentSpace: '',
                insurance: '',
                governmentId: '',
                qualification: '',
                profilePicture: '',
            },
        }));
        setActiveTab(nextId);
    };


    // function handleFileChange(e: any) {
    //     const eventName = e.target.name

    //     if (eventName === "treatmentSpace") {
    //         setTreatmentSpace(e.target.files[0].name)
    //     } else if (eventName === "insurance") {
    //         setInsurance(e.target.files[0].name)
    //     } else if (eventName === "governmentId") {
    //         setGovernmentId(e.target.files[0].name)
    //     } else if (eventName === "qualification") {
    //         setQualification(e.target.files[0].name)
    //     } else {
    //         setProfilePicture(e.target.files[0].name)
    //     }
    //     console.log(e.target.files[0]);
    // }

    // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     const field = e.target.name as keyof PractitionerData;
    //     const file = e.target.files?.[0];
    //     if (!file) return;

    //     const fileUrl = URL.createObjectURL(file);
    //     setTabData((prev) => ({
    //         ...prev,
    //         [activeTab]: {
    //             ...prev[activeTab],
    //             [field]: fileUrl,
    //         },
    //     }));
    // };

    const handleTabInputChange = (field: keyof PractitionerData, value: string | string[]) => {
        setTabData((prev) => ({
            ...prev,
            [activeTab]: {
                ...prev[activeTab],
                [field]: value,
            },
        }));
    };



    const handleMerchantFormSubmit = async () => {
        try {
            const businessPayload = {
                businessName,
                businessType,
                business_email: email,
                business_phone: phone,
                bankingDetails,
                merchantAddress,
                merchantCity,
                merchantState,
                merchantZipCode
            }

            const businessResponse = await axios.post(global.config.ROOTURL.prod + '/business', businessPayload);
            if (businessResponse.status === 201 || businessResponse.status === 200) {
                console.log('Data submitted successfully:', businessResponse.data);

                for (const key of Object.keys(tabData)) {
                    const practitioner = tabData[Number(key)];

                    const response = await axios.post(global.config.ROOTURL.prod + "/practitioner", { ...practitioner, businessId: businessResponse?.data?.data?._id });
                    console.log(`Practitioner ${key} submitted:`, response.data);
                }
                setBusinessName("")
                setBusinessType("")
                setEmail("")
                setPhone("")
                setBankingDetails("")
                setMerchantAddress("")
                setMerchantCity("")
                setMerchantState("")
                setMerchantZipCode("")
                setTabData({
                    1: {
                        practitionerName: '',
                        areaOfExpertise: [],
                        license: '',
                        treatmentSpace: '',
                        insurance: '',
                        governmentId: '',
                        qualification: '',
                        profilePicture: '',
                    }
                })
                setActiveTab(1)
                navigate("/")
            } else {
                console.error('Unexpected status:', businessResponse.status);
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
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
                                <motion.div layout>
                                    <AnimatePresence mode="wait">
                                        {currentStep === 1 && (
                                            <motion.div
                                                key="step1"
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 50 }}
                                                transition={{ duration: 0.4 }}
                                                layout
                                            >
                                                <div className="form-submit">
                                                    <h3>Basic Information</h3>
                                                    <div className="submit-section">
                                                        <div className="row">
                                                            <div className="form-group col-md-12">
                                                                <label className='mb-2'>Business Name</label>
                                                                <input type="text" className="form-control" placeholder='Full Name/Business Name' value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                                                            </div>

                                                            <div className="form-group col-md-12">
                                                                <label className='mb-2'>Business Type</label>
                                                                <Select options={businessTypeList} className='form-control' classNamePrefix="react-select" placeholder="Business Type" value={businessTypeList.find((option) => option.value === businessType)} onChange={(selectedOption) => setBusinessType(selectedOption?.value)} />
                                                            </div>


                                                            {businessType === 'Other' && <div className="form-group col-md-12">
                                                                <label className="mb-7">Description</label>
                                                                <textarea
                                                                    className="form-control h-20"
                                                                    placeholder="Enter a short description (max 40 characters)"
                                                                    rows={4}
                                                                    maxLength={40}
                                                                    value={description}
                                                                    onChange={(e) => setDescription(e.target.value)}
                                                                ></textarea>
                                                            </div>}

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

                                                            {/* <div className="form-group col-md-6">
                                                <label className='mb-2'>Areas of Expertise</label>
                                                <Select options={expertiseList} className="form-control" classNamePrefix="react-select" placeholder="Areas of Expertise" value={expertiseList.find((option) => option.value === areaOfExpertise)} onChange={(selectedOption) => setAreaOfExpertise(selectedOption?.value)} />
                                            </div> */}

                                                            {/* <div className="form-group col-md-6">
                                                <label className='mb-2'>License/Registration Number</label>
                                                <input type="text" className="form-control" value={license} onChange={(e)=>setLicense(e.target.value)} />
                                            </div>

                                            <div className="form-group col-md-6">
                                                <label className='mb-2'>For mobile practitioners - Coverage Postal code</label>
                                                <input type="text" className="form-control" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)}/>
                                            </div> */}

                                                            <div className="form-group col-md-12">
                                                                <label className='mb-2'>Banking Details</label>
                                                                <input type="text" className="form-control" placeholder='Banking Details' value={bankingDetails} onChange={(e) => setBankingDetails(e.target.value)} />

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-lg-12 mt-3">
                                                        <button
                                                            className="btn btn-primary fw-medium px-5"
                                                            type="button"
                                                            disabled={!isBasicInfoValid}
                                                            onClick={() => setCurrentStep(2)}
                                                        >
                                                            Next
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {currentStep === 2 && (
                                            <motion.div
                                                key="step2"
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 50 }}
                                                transition={{ duration: 0.4 }}
                                                layout
                                            >
                                                <div className="form-submit">
                                                    <h3>Business Address</h3>
                                                    <div className="submit-section">
                                                        <div className="row">
                                                            <div className="form-group col-md-6">
                                                                <label className='mb-2'>Street Address</label>
                                                                <input type="text" className="form-control" value={merchantAddress} onChange={(e) => setMerchantAddress(e.target.value)} />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label className='mb-2'>City</label>
                                                                <input type="text" className="form-control" value={merchantCity} onChange={(e) => setMerchantCity(e.target.value)} />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label className='mb-2'>Province/State</label>
                                                                <input type="text" className="form-control" value={merchantState} onChange={(e) => setMerchantState(e.target.value)} />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label className='mb-2'>Postal Code / Zip Code (For mobile practitioners, this is their main location or office)</label>
                                                                <input type="text" className="form-control" value={merchantZipCode} onChange={(e) => setMerchantZipCode(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-lg-12 mt-3 d-flex justify-content-between">
                                                        <button className="btn btn-outline-secondary" onClick={() => setCurrentStep(1)}>Back</button>
                                                        <button
                                                            className="btn btn-primary fw-medium px-5"
                                                            type="button"
                                                            disabled={!isBusinessAddressValid}
                                                            onClick={() => setCurrentStep(3)}
                                                        >
                                                            Next
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {currentStep === 3 && (
                                            <motion.div
                                                key="step3"
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 50 }}
                                                transition={{ duration: 0.4 }}
                                                layout
                                            >
                                                <div className="form-submit">
                                                    <h3>Practitioner Details & Specializations</h3>
                                                    {(businessType !== 'Home-Based Practice' && businessType !== "Mobile Practitioner") && <div className="form-group col-md-12 d-flex justify-content-between align-items-center mb-3">
                                                        <ul className="nav nav-tabs">
                                                            {tabs.map((tab) => (
                                                                <li key={tab.id} className="nav-item">
                                                                    <button
                                                                        className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                                                                        onClick={() => setActiveTab(tab.id)}
                                                                    >
                                                                        Practitioner {tab.id}
                                                                    </button>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-outline-primary"
                                                            onClick={addTab}
                                                        >
                                                            + Add Practitioner
                                                        </button>
                                                    </div>}

                                                    <div>
                                                        <div className="form-group col-md-12">
                                                            <label className='mb-2'>Practitioner Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder='Practitioner Name'
                                                                value={tabData[activeTab]?.practitionerName || ''}
                                                                onChange={(e) => handleTabInputChange('practitionerName', e.target.value)}
                                                            />
                                                            <div className='row'>
                                                                <div className="form-group col-md-6">
                                                                    <label className='mb-2'>Areas of Expertise</label>
                                                                    <Select
                                                                        isMulti
                                                                        options={expertiseList}
                                                                        className="form-control"
                                                                        classNamePrefix="react-select"
                                                                        placeholder="Areas of Expertise"
                                                                        value={expertiseList.filter(option =>
                                                                            tabData[activeTab]?.areaOfExpertise?.includes(option.value)
                                                                        )}
                                                                        onChange={(selectedOptions) =>
                                                                            handleTabInputChange(
                                                                                'areaOfExpertise',
                                                                                selectedOptions ? selectedOptions.map(option => option.value) : []
                                                                            )
                                                                        }
                                                                    />

                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <label className='mb-2'>License/Registration Number</label>
                                                                    <input type="text" className="form-control" placeholder='License No' value={tabData[activeTab]?.license || ''} onChange={(e) => handleTabInputChange('license', e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {(['treatmentSpace', 'insurance', 'governmentId', 'qualification', 'profilePicture'] as (keyof PractitionerData)[]).map((field) => (
                                                            <div
                                                                key={field}
                                                                className="form-group col-md-12 d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3"
                                                            >
                                                                <label className="mb-0" style={{ minWidth: '180px', textTransform: 'capitalize' }}>
                                                                    {field === 'profilePicture'
                                                                        ? 'Profile Picture'
                                                                        : field === 'governmentId'
                                                                            ? 'Government ID'
                                                                            : field === 'treatmentSpace'
                                                                                ? 'Photos of Treatment Space'
                                                                                : field === 'qualification'
                                                                                    ? 'Proof of Qualification'
                                                                                    : field}
                                                                </label>

                                                                <div
                                                                    className="dropzone dz-clickable primary-dropzone flex-grow-1"
                                                                    style={{
                                                                        position: 'relative',
                                                                        padding: '20px',
                                                                        border: '2px dashed #d0d5dd',
                                                                        borderRadius: '12px',
                                                                        backgroundColor: '#fafafa',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        minHeight: '120px',
                                                                        transition: 'all 0.3s ease-in-out',
                                                                    }}
                                                                >
                                                                    <UploadButton
                                                                        endpoint="practitionerMedia"
                                                                        onClientUploadComplete={(res) => {
                                                                            const uploadedUrl = res?.[0]?.ufsUrl;
                                                                            if (uploadedUrl) {
                                                                                setTabData((prev) => ({
                                                                                    ...prev,
                                                                                    [activeTab]: {
                                                                                        ...prev[activeTab],
                                                                                        [field]: uploadedUrl,
                                                                                    },
                                                                                }));
                                                                            }
                                                                        }}
                                                                        onUploadError={(error) => console.error("Upload failed", error)}
                                                                    />

                                                                    {tabData[activeTab]?.[field] ? (
                                                                        <div style={{ zIndex: 1, textAlign: 'center' }}>
                                                                            <img
                                                                                src={tabData[activeTab][field]}
                                                                                alt={field}
                                                                                style={{
                                                                                    width: '100px',
                                                                                    height: '100px',
                                                                                    borderRadius: '8px',
                                                                                    objectFit: 'cover',
                                                                                    marginBottom: '8px',
                                                                                }}
                                                                            />
                                                                            <p style={{ fontSize: '14px', color: '#475467', margin: 0 }}>
                                                                                Uploaded
                                                                            </p>
                                                                        </div>
                                                                    ) : (
                                                                        <div
                                                                            className="dz-message"
                                                                            style={{
                                                                                display: 'flex',
                                                                                flexDirection: 'column',
                                                                                alignItems: 'center',
                                                                                zIndex: 1,
                                                                                color: '#667085',
                                                                            }}
                                                                        >
                                                                            <i
                                                                                className="fa-solid fa-image"
                                                                                style={{ fontSize: '32px', marginBottom: '8px', color: '#9ca3af' }}
                                                                            ></i>
                                                                            <p style={{ margin: 0, fontWeight: 500 }}>
                                                                                Click or Drag to Upload
                                                                            </p>
                                                                            <span style={{ fontSize: '12px', color: '#98a2b3' }}>
                                                                                Image (max 4MB)
                                                                            </span>
                                                                        </div>
                                                                    )}
                                                                </div>

                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="form-group col-lg-12 mt-3 d-flex justify-content-between">
                                                        <button className="btn btn-outline-secondary" onClick={() => setCurrentStep(2)}>Back</button>
                                                        <button
                                                            className="btn btn-primary fw-medium px-5"
                                                            type="button"
                                                            disabled={!isPractitionerDetailsValid}
                                                            onClick={handleMerchantFormSubmit}
                                                        >
                                                            Submit & Preview
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* <div className="form-group col-lg-12 col-md-12">
                                    <button className="btn btn-primary fw-medium px-5" type="button" onClick={handleMerchantFormSubmit}>Submit & Preview</button>
                                </div> */}
                                    </AnimatePresence>
                                </motion.div>
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
