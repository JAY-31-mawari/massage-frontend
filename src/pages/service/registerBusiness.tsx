import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { UploadButton } from "../../utils/uploadthing";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import ProgressSidebar from "../../components/progress-sidebar";
import { X } from "lucide-react";

interface LocationState {
  lat: number | null;
  lng: number | null;
}

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
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);
  const [businessName, setBusinessName] = useState("");
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [businessType, setBusinessType] = useState<string | undefined>("");
  const [gender, setGender] = useState("both")
  const [association, setAssociation] = useState<string | undefined>("")
  const [customAssociation, setCustomAssociation] = useState("")
  const [bankName, setBankName] = useState("");
  const [bankTransitNumber, setBankTransitNumber] = useState(0)
  const [bankInstitutionNumber, setBankInstitutionNumber] = useState(0)
  const [bankAccountNumber, setBankAccountNumber] = useState(0)
  const [merchantAddress, setMerchantAddress] = useState("");
  const [merchantCity, setMerchantCity] = useState("");
  const [merchantState, setMerchantState] = useState("");
  const [merchantZipCode, setMerchantZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneNoError, setphoneNoError] = useState("");
  const [description, setDescription] = useState("");
  const [tabs, setTabs] = useState([{ id: 1 }]);
  const [activeTab, setActiveTab] = useState(1);

  // Optional: Store data per tab if needed later
  const [tabData, setTabData] = useState<{ [key: number]: any }>({
    1: {
      practitionerName: "",
      areaOfExpertise: [],
      license: "",
      treatmentSpace: "",
      insurance: "",
      governmentId: "",
      qualification: "",
      profilePicture: "",
    },
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [businessPhotos, setBusinessPhotos] = useState<string[]>([]);

  // validations AFTER all state is declared
  const isBasicInfoValid =
    businessName &&
    businessType &&
    email &&
    !emailError &&
    phone &&
    !phoneNoError &&
    bankName &&
    (businessType !== "Other" || description);

  const isBusinessAddressValid =
    merchantAddress && merchantCity && merchantState && merchantZipCode;

  const isBusinessPhotosValid = businessPhotos.length > 0;

  const isPractitionerDetailsValid =
    tabData[activeTab]?.practitionerName &&
    tabData[activeTab]?.areaOfExpertise?.length > 0 &&
    tabData[activeTab]?.license;

  const expertiseList = [
    { value: "Physiotherapy", label: "Physiotherapy" },
    { value: "Chiropractic Care", label: "Chiropractic Care" },
    { value: "Massage Therapy", label: "Massage Therapy" },
    { value: "Acupuncture", label: "Acupuncture" },
  ];
  const businessTypeList = [
    { value: "Clinic-Based Practice", label: "Clinic-Based Practice" },
    { value: "Home-Based Practice", label: "Home-Based Practice" },
    { value: "Mobile Practitioner", label: "Mobile Practitioner" },
    { value: "Other", label: "Other" },
  ];

  const genderList = [
    {value: "male", label: "Male"},
    {value: "female", label: "Female"},
    {value: "both", label: "Both"}
  ]

  const associationList = [
  { value: "Certified Registered Massage Therapist Association (CRMTA)", label: "Certified Registered Massage Therapist Association (CRMTA)" },
  { value: "Massage Therapist Association of Alberta (MTAA)", label: "Massage Therapist Association of Alberta (MTAA)" },
  { value: "Natural Health Practitioners of Canada (NHPC)", label: "Natural Health Practitioners of Canada (NHPC)" },
  { value: "Chinese Medicine and Acupuncture Association of Canada (CMAAC)", label: "Chinese Medicine and Acupuncture Association of Canada (CMAAC)" },
  { value: "College of Alberta Physiotherapists (CAP)", label: "College of Alberta Physiotherapists (CAP)" },
  { value: "Alberta College and Association of Chiropractors (ACAC)", label: "Alberta College and Association of Chiropractors (ACAC)" },
  { value: "Massage Therapists Association of BC (MTABC)", label: "Massage Therapists Association of BC (MTABC)" },
  { value: "British Columbia Association of Traditional Chinese Medicine & Acupuncture", label: "British Columbia Association of Traditional Chinese Medicine & Acupuncture" },
  { value: "College of Physical Therapists of British Columbia (CPTBC)", label: "College of Physical Therapists of British Columbia (CPTBC)" },
  { value: "College of Chiropractors of British Columbia (CCBC)", label: "College of Chiropractors of British Columbia (CCBC)" },
  { value: "Massage Therapist Association of Saskatchewan (MTAS)", label: "Massage Therapist Association of Saskatchewan (MTAS)" },
  { value: "Saskatchewan Acupuncture Association (SAA)", label: "Saskatchewan Acupuncture Association (SAA)" },
  { value: "Saskatchewan College of Physical Therapy (SCPT)", label: "Saskatchewan College of Physical Therapy (SCPT)" },
  { value: "Chiropractors’ Association of Saskatchewan", label: "Chiropractors’ Association of Saskatchewan" },
  { value: "Manitoba Massage Therapy Association", label: "Manitoba Massage Therapy Association" },
  { value: "Manitoba branch or chapter of CMAAC", label: "Manitoba branch or chapter of CMAAC" },
  { value: "College of Physical Therapists of Manitoba", label: "College of Physical Therapists of Manitoba" },
  { value: "Manitoba Chiropractors’ Association", label: "Manitoba Chiropractors’ Association" },
  { value: "College of Massage Therapists of Ontario (CMTO)", label: "College of Massage Therapists of Ontario (CMTO)" },
  { value: "Traditional Chinese Medicine practitioners’ associations—CMAAC or provincial", label: "Traditional Chinese Medicine practitioners’ associations—CMAAC or provincial" },
  { value: "College of Physiotherapists of Ontario (CPO) / Ontario Physiotherapy Association", label: "College of Physiotherapists of Ontario (CPO) / Ontario Physiotherapy Association" },
  { value: "College of Chiropractors of Ontario (CCO)", label: "College of Chiropractors of Ontario (CCO)" },
  { value: "Other", label: "Other" }
];



  const [location, setLocation] = useState<LocationState>({ lat: 0, lng: 0 });
  const [error, setError] = useState<string | null>(null);

  const checkPermission = () => {
    if (!navigator.permissions) {
      toast.error("Permissions API not supported in this browser.");
      return;
    }

    navigator.permissions.query({ name: "geolocation" }).then((status) => {
      if (status.state === "granted") {
        getLocation();
        // You can directly call getLocation()
      } else if (status.state === "prompt") {
        getLocation();
        // Next getLocation() will show prompt
      } else if (status.state === "denied") {
        toast.success(
                "Allow location access to help customers find your service location easily. Click the 🔒 icon in the URL → Reset Permissions → Reload"
        );
      }
    });
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords;

        if (latitude && longitude) {
          setLocation({
            lat: latitude,
            lng: longitude,
          });
          setError(null);
        }
      },
      (err: GeolocationPositionError) => {
        setError(err.message);
        toast.error(err.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  // useEffect(() => {
  //   toast.success(
  //     "Allow location access to help customers find your service location easily",
  //     {
  //       duration: 6000,
  //     }
  //   );
  //   checkPermission();
  // }, []);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string) => {
    const regex = /^[1-9]\d{9}$/;
    return regex.test(phone);
  };

  const handleEmailChange = (e: any) => {
    const value = e.target.value;
    setEmail(value);

    if (value === "") {
      setEmailError("Email is required");
    } else if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneNoChange = (e: any) => {
    const value = e.target.value;
    setPhone(value);

    if (value === "") {
      setphoneNoError("Phone number is required");
    } else if (!validatePhone(value)) {
      setphoneNoError("Please enter a valid 10-digit phone number");
    } else {
      setphoneNoError("");
    }
  };

  const addTab = () => {
    const nextId = tabs.length + 1;
    setTabs([...tabs, { id: nextId }]);
    setTabData((prev) => ({
      ...prev,
      [nextId]: {
        practitionerName: "",
        areaOfExpertise: [],
        license: "",
        treatmentSpace: "",
        insurance: "",
        governmentId: "",
        qualification: "",
        profilePicture: "",
      },
    }));
    setActiveTab(nextId);
  };

  const removeTab = (id: number) => {
    setTabs((prevTabs) => {
      // 1. Remove the target tab
      const filteredTabs = prevTabs.filter((tab) => tab.id !== id);

      // 2. Keep the old data of remaining tabs
      const oldData = { ...tabData };

      // 3. Renumber the remaining tabs (1,2,3...)
      const renumberedTabs = filteredTabs.map((tab, index) => ({
        ...tab,
        id: index + 1,
      }));

      // 4. Rebuild tabData with correct mapping
      const newData: { [key: number]: any } = {};
      renumberedTabs.forEach((tab, index) => {
        const oldTab = filteredTabs[index]; // original tab object before renumber
        newData[index + 1] = oldData[oldTab.id]; // map old ID data to new ID
      });

      setTabData(newData);

      // 5. Handle active tab
      if (activeTab === id) {
        if (renumberedTabs.length > 0) {
          setActiveTab(
            renumberedTabs[Math.min(id - 1, renumberedTabs.length - 1)].id
          );
        } else {
          setActiveTab(1);
        }
      }

      return renumberedTabs;
    });
  };

  const handleTabInputChange = (
    field: keyof PractitionerData,
    value: string | string[]
  ) => {
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
      const businessPayload: any = {
        businessName,
        businessType,
        business_email: email,
        business_phone: phone,
        bankingDetails:bankName,
        timeZone: userTimeZone,
        merchantAddress,
        merchantCity,
        merchantState,
        merchantZipCode,
        businessPhotos,
      };

      if (location.lat && location.lng) {
        businessPayload.location = location;
      }

      const businessResponse = await axios.post(
        global.config.ROOTURL.prod + "/business",
        businessPayload
      );
      if (businessResponse.status === 201 || businessResponse.status === 200) {
        console.log("Data submitted successfully:", businessResponse.data);

        for (const key of Object.keys(tabData)) {
          const practitioner = tabData[Number(key)];

          const response = await axios.post(
            global.config.ROOTURL.prod + "/practitioner",
            { ...practitioner, businessId: businessResponse?.data?.data?.id }
          );
        }
        setBusinessName("");
        setBusinessType("");
        setEmail("");
        setPhone("");
        setBankName("");
        setMerchantAddress("");
        setMerchantCity("");
        setMerchantState("");
        setMerchantZipCode("");
        setBusinessPhotos([]);
        setTabData({
          1: {
            practitionerName: "",
            areaOfExpertise: [],
            license: "",
            treatmentSpace: "",
            insurance: "",
            governmentId: "",
            qualification: "",
            profilePicture: "",
          },
        });
        setActiveTab(1);
        navigate("/");
      } else {
        console.error("Unexpected status:", businessResponse.status);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
      {/* Header Section */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center text-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Become a Practitioner
              </h2>
              <span className="block mt-2 text-lg text-gray-600">
                Just Submit Your Service Details
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="hidden lg:block md:w-1/4">
              <ProgressSidebar
                currentStep={currentStep}
                setCurrentStep={(index) => setCurrentStep(index)}
              />
            </div>

            {/* Main Content */}
            <div className="w-full md:w-3/4 mx-auto">
              <div className="submit-page">
                <motion.div layout>
                  <AnimatePresence mode="wait">
                    {(currentStep === 1 || currentStep === 4) && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.4 }}
                        layout
                      >
                        {/* Basic Information */}
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4">
                            Basic Information
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Business Name */}
                            <div className="col-span-2">
                              <label className="block text-base font-medium mb-2">
                                Business Name
                              </label>
                              <input
                                type="text"
                                placeholder="Full Name/Business Name"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                value={businessName}
                                onChange={(e) =>
                                  setBusinessName(e.target.value)
                                }
                              />
                            </div>

                            {/* Business Type */}
                            <div className="col-span-2 md:col-span-1">
                              <label className="block text-base font-medium mb-2">
                                Business Type
                              </label>
                              <Select
                                options={businessTypeList}
                                className="w-full"
                                classNamePrefix="react-select"
                                placeholder="Business Type"
                                value={businessTypeList.find(
                                  (option) => option.value === businessType
                                )}
                                onChange={(selectedOption) =>
                                  setBusinessType(selectedOption?.value)
                                }
                              />
                            </div>

                            <div className="col-span-2 md:col-span-1">
                              <label className="block text-base font-medium mb-2">
                                Gender
                              </label>
                              <Select
                                options={genderList}
                                className="w-full"
                                classNamePrefix="react-select"
                                placeholder="Business Type"
                                value={genderList.find(
                                  (option) => option.value === gender
                                )}
                                onChange={(selectedOption) =>
                                  setBusinessType(selectedOption?.value)
                                }
                              />
                            </div>

                            {/* Description (if Other) */}
                            {businessType === "Other" && (
                              <div className="col-span-2">
                                <label className="block text-base font-medium mb-2">
                                  Description
                                </label>
                                <textarea
                                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none h-20"
                                  placeholder="Enter a short description (max 40 characters)"
                                  rows={4}
                                  maxLength={40}
                                  value={description}
                                  onChange={(e) =>
                                    setDescription(e.target.value)
                                  }
                                />
                              </div>
                            )}

                            {/* Email */}
                            <div className="col-span-2 md:col-span-1">
                              <label className="block text-base font-medium mb-2">
                                Email Address
                              </label>
                              <input
                                type="text"
                                placeholder="Email Address"
                                value={email}
                                onChange={handleEmailChange}
                                className={`w-full rounded-md border px-3 py-2 text-gray-900 focus:ring-2 focus:outline-none ${
                                  emailError
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-indigo-500"
                                }`}
                              />
                              {emailError && (
                                <p className="mt-1 text-base text-red-600">
                                  {emailError}
                                </p>
                              )}
                            </div>

                            {/* Phone Number */}
                            <div className="col-span-2 md:col-span-1">
                              <label className="block text-base font-medium mb-2">
                                Phone Number
                              </label>
                              <input
                                type="text"
                                placeholder="Phone No"
                                value={phone}
                                onChange={handlePhoneNoChange}
                                className={`w-full rounded-md border px-3 py-2 text-gray-900 focus:ring-2 focus:outline-none ${
                                  phoneNoError
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-indigo-500"
                                }`}
                              />
                              {phoneNoError && (
                                <p className="mt-1 text-base text-red-600">
                                  {phoneNoError}
                                </p>
                              )}
                            </div>

                            <div className="col-span-2">
                              <label className="block text-base font-medium mb-2">
                                Association Affiliated To
                              </label>
                              <Select
                                options={associationList}
                                className="w-full"
                                classNamePrefix="react-select"
                                placeholder="Business Type"
                                value={associationList.find(
                                  (option) => option.value === association
                                )}
                                onChange={(selectedOption) =>
                                  setAssociation(selectedOption?.value)
                                }
                              />
                            </div>
                              
                            {association === "Other" && <div className="col-span-2">
                              <label className="block text-base font-medium mb-2">
                                Please mention association name(other)
                              </label>
                              <input
                                type="text"
                                placeholder="Enter other association name"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                value={customAssociation}
                                onChange={(e) =>
                                  setCustomAssociation(e.target.value)
                                }
                              />
                            </div>}

                            {/* Banking Details */}
                            <div className="col-span-2 md:col-span-1">
                              <label className="block text-base font-medium mb-2">
                                Bank Name
                              </label>
                              <input
                                type="text"
                                placeholder="Bank name"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                value={bankName}
                                onChange={(e) =>
                                  setBankName(e.target.value)
                                }
                              />
                            </div>

                            <div className="col-span-2 md:col-span-1">
                              <label className="block text-base font-medium mb-2">
                                Branch Transit Number (5 digits)
                              </label>
                              <input
                                type="number"
                                placeholder="Bank transit number"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                value={bankTransitNumber}
                                onChange={(e) =>
                                  setBankTransitNumber(parseInt(e.target.value,10))
                                }
                              />
                            </div>

                            <div className="col-span-2 md:col-span-1">
                              <label className="block text-base font-medium mb-2">
                                Institution Number (3 digits)
                              </label>
                              <input
                                type="number"
                                placeholder="Bank institution number"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                value={bankInstitutionNumber}
                                onChange={(e) =>
                                  setBankInstitutionNumber(parseInt(e.target.value,10))
                                }
                              />
                            </div>

                            <div className="col-span-2 md:col-span-1">
                              <label className="block text-base font-medium mb-2">
                                Account Number (7–12 digits, depending on the bank)
                              </label>
                              <input
                                type="number"
                                placeholder="Account number(7-12) digits"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                value={bankAccountNumber}
                                onChange={(e) =>
                                  setBankAccountNumber(parseInt(e.target.value,10))
                                }
                              />
                            </div>
                          </div>
                        </div>

                        {/* Business Address */}
                        {businessType !== "Home-Based Practice" && <div className="mb-8">
                          <h3 className="text-xl font-semibold mb-4">
                            Business Address
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Street Address */}
                            <div>
                              <label className="block text-base font-medium mb-2">
                                Street Address
                              </label>
                              <input
                                type="text"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                value={merchantAddress}
                                onChange={(e) =>
                                  setMerchantAddress(e.target.value)
                                }
                              />
                            </div>

                            {/* City */}
                            <div>
                              <label className="block text-base font-medium mb-2">
                                City
                              </label>
                              <input
                                type="text"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                value={merchantCity}
                                onChange={(e) =>
                                  setMerchantCity(e.target.value)
                                }
                              />
                            </div>

                            {/* State */}
                            <div>
                              <label className="block text-base font-medium mb-2">
                                Province/State
                              </label>
                              <input
                                type="text"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                value={merchantState}
                                onChange={(e) =>
                                  setMerchantState(e.target.value)
                                }
                              />
                            </div>

                            {/* Zip Code */}
                            <div>
                              <label className="block text-base font-medium mb-2">
                                Postal Code / Zip Code
                              </label>
                              <input
                                type="text"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                value={merchantZipCode}
                                onChange={(e) =>
                                  setMerchantZipCode(e.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>}
                      </motion.div>
                    )}

                    {(currentStep === 2 || currentStep === 4) && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.4 }}
                        layout
                      >
                        <div>
                          <h3 className="mb-3 text-xl font-semibold text-gray-800">
                            Business Photos
                          </h3>

                          {/* Upload Section */}
                          <div className="mb-6">
                            <label className="block mb-2 font-medium text-gray-600">
                              Upload Business Photos{" "}
                              <span className="text-base text-gray-400">
                                (Maximum 3)
                              </span>
                            </label>

                            {/* Dropzone */}
                            <div className="w-full min-h-[200px] rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center transition hover:bg-gray-100 cursor-pointer p-10">
                              <UploadButton
                                endpoint="practitionerMedia"
                                onClientUploadComplete={(res) => {
                                  const uploadedUrl = res?.[0]?.ufsUrl;
                                  if (
                                    uploadedUrl &&
                                    businessPhotos.length < 3
                                  ) {
                                    setBusinessPhotos((prev) => [
                                      ...prev,
                                      uploadedUrl,
                                    ]);
                                  }
                                }}
                                onUploadError={(error) =>
                                  console.error("Upload failed", error)
                                }
                                content={{
                                  button: (
                                    <div className="w-full flex items-center justify-center cursor-pointer">
                                      {businessPhotos.length === 0 ? (
                                        <p className="text-gray-600 font-semibold text-base">
                                          Click or Drag to Upload Business
                                          Photos
                                        </p>
                                      ) : (
                                        <p className="text-gray-600 font-medium">
                                          Click to Upload More Photos
                                        </p>
                                      )}
                                    </div>
                                  ),
                                }}
                              />
                            </div>
                          </div>

                          {/* Preview Section */}
                          {businessPhotos.length > 0 && (
                            <div className="w-full mt-6">
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {businessPhotos.map((photo, index) => (
                                  <div
                                    key={index}
                                    className="relative rounded-lg shadow-md overflow-hidden"
                                  >
                                    <img
                                      src={photo}
                                      alt={`Business Photo ${index + 1}`}
                                      className="w-full h-44 object-cover"
                                    />
                                    <button
                                      type="button"
                                      className="absolute top-2 right-2 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center shadow-md hover:bg-red-600"
                                      onClick={() =>
                                        setBusinessPhotos((prev) =>
                                          prev.filter((_, i) => i !== index)
                                        )
                                      }
                                    >
                                      ✕
                                    </button>
                                  </div>
                                ))}
                              </div>

                              {/* Remaining uploads */}
                              {businessPhotos.length < 3 && (
                                <div className="text-center mt-4">
                                  <p className="text-base text-gray-500">
                                    You can upload{" "}
                                    <strong>{3 - businessPhotos.length}</strong>{" "}
                                    more photo
                                    {businessPhotos.length < 2 ? "" : "s"}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {(currentStep === 3 || currentStep === 4) && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.4 }}
                        layout
                      >
                        <div>
                          <h3 className="text-xl font-semibold mb-4">
                            Practitioner Details
                          </h3>

                          {/* Tabs Section */}
                          {businessType !== "Home-Based Practice" &&
                            businessType !== "Mobile Practitioner" && (
                              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-3">
                                <ul className="flex border-b border-gray-200">
                                  {tabs.map((tab) => (
                                    <li key={tab.id} className="relative">
                                      <button
                                        className={`px-4 py-2 text-base font-medium border-b-2 transition ${
                                          activeTab === tab.id
                                            ? "border-indigo-500 text-indigo-600"
                                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                        }`}
                                        onClick={() => setActiveTab(tab.id)}
                                      >
                                        Practitioner {tab.id}
                                      </button>

                                      {/* Cross Button */}
                                      {tabs.length > 1 && (
                                        <button
                                          onClick={() => removeTab(tab.id)}
                                          className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
                                        >
                                          <X className="w-3 h-3 text-gray-600" />
                                        </button>
                                      )}
                                    </li>
                                  ))}
                                </ul>

                                <button
                                  type="button"
                                  className="px-3 py-1 text-base rounded-md border border-indigo-500 text-indigo-600 hover:bg-indigo-50"
                                  onClick={addTab}
                                >
                                  + Add Practitioner
                                </button>
                              </div>
                            )}

                          {/* Practitioner Name + Expertise + License */}
                          <div className="mb-6">
                            <label className="block text-base font-medium mb-2">
                              Practitioner Name
                            </label>
                            <input
                              type="text"
                              placeholder="Practitioner Name"
                              value={tabData[activeTab]?.practitionerName || ""}
                              onChange={(e) =>
                                handleTabInputChange(
                                  "practitionerName",
                                  e.target.value
                                )
                              }
                              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                              <div>
                                <label className="block text-base font-medium mb-2">
                                  Areas of Expertise
                                </label>
                                <Select
                                  isMulti
                                  options={expertiseList}
                                  className="w-full"
                                  classNamePrefix="react-select"
                                  placeholder="Areas of Expertise"
                                  value={expertiseList.filter((option) =>
                                    tabData[
                                      activeTab
                                    ]?.areaOfExpertise?.includes(option.value)
                                  )}
                                  onChange={(selectedOptions) =>
                                    handleTabInputChange(
                                      "areaOfExpertise",
                                      selectedOptions
                                        ? selectedOptions.map(
                                            (option) => option.value
                                          )
                                        : []
                                    )
                                  }
                                />
                              </div>
                              <div>
                                <label className="block text-base font-medium mb-2">
                                  License/Registration Number
                                </label>
                                <input
                                  type="text"
                                  placeholder="License No"
                                  value={tabData[activeTab]?.license || ""}
                                  onChange={(e) =>
                                    handleTabInputChange(
                                      "license",
                                      e.target.value
                                    )
                                  }
                                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Upload Sections */}
                          {(
                            [
                              "treatmentSpace",
                              "insurance",
                              "governmentId",
                              "qualification",
                              "profilePicture",
                            ] as (keyof PractitionerData)[]
                          ).map((field) => (
                            <div
                              key={field}
                              className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6"
                            >
                              {/* Label */}
                              <label className="text-base font-medium text-gray-700 min-w-[180px] capitalize">
                                {field === "profilePicture"
                                  ? "Profile Picture"
                                  : field === "governmentId"
                                  ? "Government ID"
                                  : field === "treatmentSpace"
                                  ? "Photos of Treatment Space"
                                  : field === "qualification"
                                  ? "Proof of Qualification"
                                  : field}
                              </label>

                              {/* Dropzone */}
                              <div className="w-full min-h-[200px] rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center transition hover:bg-gray-100 cursor-pointer p-10">
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
                                  onUploadError={(error) =>
                                    console.error("Upload failed", error)
                                  }
                                />

                                {/* {tabData[activeTab]?.[field] ? (
                                  <div className="text-center z-10">
                                    <img
                                      src={tabData[activeTab][field]}
                                      alt={field}
                                      className="w-24 h-24 rounded-md object-cover mb-2"
                                    />
                                    <p className="text-base text-gray-600">
                                      Uploaded
                                    </p>
                                  </div>
                                ) : (
                                  <div className="flex flex-col items-center text-gray-500 z-10">
                                    <i className="fa-solid fa-image text-3xl text-gray-400 mb-2"></i>
                                    <p className="font-medium">
                                      Click or Drag to Upload
                                    </p>
                                    <span className="text-xs text-gray-400">
                                      Image (max 4MB)
                                    </span>
                                  </div>
                                )} */}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Navigation Buttons */}
                <div>
                  <div className="flex justify-between items-center mt-3 w-full">
                    <button
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                      disabled={currentStep === 1}
                      onClick={() =>
                        currentStep - 1 > 0
                          ? setCurrentStep(currentStep - 1)
                          : null
                      }
                    >
                      Previous
                    </button>

                    <button
                      type="button"
                      className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50"
                      onClick={() =>
                        currentStep === 4
                          ? handleMerchantFormSubmit()
                          : setCurrentStep(currentStep + 1)
                      }
                    >
                      {currentStep === 4 ? "Preview & Submit" : "Next"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
