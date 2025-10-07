import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { UploadButton } from "../../utils/uploadthing";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import ProgressSidebar from "../../components/progress-sidebar";
import { X } from "lucide-react";
import { setStorageItem } from "../../utils/sessionStorage";

interface LocationState {
  lat: number | null;
  lng: number | null;
}

interface PractitionerData {
  practitionerName: string;
  practitionerEmail: string;
  license: string;
  license_expiry: string;
  preferred_gender: string;
  association: string;
  customAssociation: string;
  areaOfExpertise: string[];
  insurance: string;
  governmentId: string;
  qualification: string;
  criminal: string;
  profilePicture: string;
}

export default function SubmitProperty() {
  const navigate = useNavigate();
  const [businessName, setBusinessName] = useState("");
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [businessType, setBusinessType] = useState<string | undefined>("");
  const [confirmationMode, setConfirmationMode] = useState("business_email");
  const [appointmentApprovalType, setAppointmentApprovalType] =
    useState("AUTO");
  const [bankName, setBankName] = useState("");
  const [bankTransitNumber, setBankTransitNumber] = useState(0);
  const [bankInstitutionNumber, setBankInstitutionNumber] = useState(0);
  const [bankAccountNumber, setBankAccountNumber] = useState(0);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [businessDesc, setBusinessDesc] = useState("");
  const [merchantAddress, setMerchantAddress] = useState("");
  const [merchantCity, setMerchantCity] = useState("");
  const [merchantState, setMerchantState] = useState("");
  const [merchantZipCode, setMerchantZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneNoError, setphoneNoError] = useState("");
  const [description, setDescription] = useState("");
  const [tabs, setTabs] = useState([{ id: 1 }]);
  const [activeTab, setActiveTab] = useState(1);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Optional: Store data per tab if needed later
  const [tabData, setTabData] = useState<{ [key: number]: any }>({
    1: {
      practitionerName: "",
      association: "",
      customAssociation: "",
      practitionerEmail: "",
      preferred_gender: "",
      license_expiry: "",
      areaOfExpertise: [],
      insurance: "",
      governmentId: "",
      qualification: "",
      criminal: "",
      profilePicture: "",
    },
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [businessPhotos, setBusinessPhotos] = useState<string[]>([]);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

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

  const expertiseListBase = [
    { value: "Physiotherapy", label: "Physiotherapy" },
    { value: "Chiropractic Care", label: "Chiropractic Care" },
    { value: "Acupuncture", label: "Acupuncture" },
  ];

  const expertiseListWithMassage = [
    ...expertiseListBase,
    { value: "Massage Therapy", label: "Massage Therapy" },
  ];

  const businessTypeList = [
    { value: "Clinic-Based Practice", label: "Clinic-Based Practice" },
    { value: "Home-Based Practice", label: "Home-Based Practice" },
    { value: "Mobile Practitioner", label: "Mobile Practitioner" },
  ];

  const genderList = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const associationList = [
    {
      value: "Certified Registered Massage Therapist Association (CRMTA)",
      label: "Certified Registered Massage Therapist Association (CRMTA)",
    },
    {
      value: "Massage Therapist Association of Alberta (MTAA)",
      label: "Massage Therapist Association of Alberta (MTAA)",
    },
    {
      value: "Natural Health Practitioners of Canada (NHPC)",
      label: "Natural Health Practitioners of Canada (NHPC)",
    },
    {
      value: "Chinese Medicine and Acupuncture Association of Canada (CMAAC)",
      label: "Chinese Medicine and Acupuncture Association of Canada (CMAAC)",
    },
    {
      value: "College of Alberta Physiotherapists (CAP)",
      label: "College of Alberta Physiotherapists (CAP)",
    },
    {
      value: "Alberta College and Association of Chiropractors (ACAC)",
      label: "Alberta College and Association of Chiropractors (ACAC)",
    },
    {
      value: "Massage Therapists Association of BC (MTABC)",
      label: "Massage Therapists Association of BC (MTABC)",
    },
    {
      value:
        "British Columbia Association of Traditional Chinese Medicine & Acupuncture",
      label:
        "British Columbia Association of Traditional Chinese Medicine & Acupuncture",
    },
    {
      value: "College of Physical Therapists of British Columbia (CPTBC)",
      label: "College of Physical Therapists of British Columbia (CPTBC)",
    },
    {
      value: "College of Chiropractors of British Columbia (CCBC)",
      label: "College of Chiropractors of British Columbia (CCBC)",
    },
    {
      value: "Massage Therapist Association of Saskatchewan (MTAS)",
      label: "Massage Therapist Association of Saskatchewan (MTAS)",
    },
    {
      value: "Saskatchewan Acupuncture Association (SAA)",
      label: "Saskatchewan Acupuncture Association (SAA)",
    },
    {
      value: "Saskatchewan College of Physical Therapy (SCPT)",
      label: "Saskatchewan College of Physical Therapy (SCPT)",
    },
    {
      value: "Chiropractors’ Association of Saskatchewan",
      label: "Chiropractors’ Association of Saskatchewan",
    },
    {
      value: "Manitoba Massage Therapy Association",
      label: "Manitoba Massage Therapy Association",
    },
    {
      value: "Manitoba branch or chapter of CMAAC",
      label: "Manitoba branch or chapter of CMAAC",
    },
    {
      value: "College of Physical Therapists of Manitoba",
      label: "College of Physical Therapists of Manitoba",
    },
    {
      value: "Manitoba Chiropractors’ Association",
      label: "Manitoba Chiropractors’ Association",
    },
    {
      value: "College of Massage Therapists of Ontario (CMTO)",
      label: "College of Massage Therapists of Ontario (CMTO)",
    },
    {
      value:
        "Traditional Chinese Medicine practitioners’ associations—CMAAC or provincial",
      label:
        "Traditional Chinese Medicine practitioners’ associations—CMAAC or provincial",
    },
    {
      value:
        "College of Physiotherapists of Ontario (CPO) / Ontario Physiotherapy Association",
      label:
        "College of Physiotherapists of Ontario (CPO) / Ontario Physiotherapy Association",
    },
    {
      value: "College of Chiropractors of Ontario (CCO)",
      label: "College of Chiropractors of Ontario (CCO)",
    },
    { value: "Other", label: "Other" },
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

  const handleConfirmEmailChange = (e: any) => {
    const value = e.target.value;
    setConfirmEmail(value);

    if (value !== email) {
      setConfirmEmailError("Email doesn't match");
    } else {
      setConfirmEmailError("");
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

  const handleToggle = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const addTab = () => {
    const nextId = tabs.length + 1;
    setTabs([...tabs, { id: nextId }]);
    setTabData((prev) => ({
      ...prev,
      [nextId]: {
        practitionerName: "",
        association: "",
        customAssociation: "",
        practitionerEmail: "",
        preferred_gender: "",
        license_expiry: "",
        areaOfExpertise: [],
        license: "",
        insurance: "",
        governmentId: "",
        qualification: "",
        profilePicture: "",
        criminal: "",
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
        confirmationMode,
        approval_type: appointmentApprovalType,
        working_days: selectedDays,
        working_hours_start: startTime,
        working_hours_end: endTime,
        business_desc: businessDesc,
        bankName,
        bankAccountNumber,
        bankTransitNumber,
        bankInstitutionNumber,
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
        setStorageItem("business_id", businessResponse?.data?.data?.id);
        setStorageItem("business_email", email);
        setStorageItem("business_name", businessName);
        setStorageItem("business_address", merchantAddress);
        setStorageItem("business_state", merchantState);
        setStorageItem("business_city", merchantCity);
        setStorageItem("business_zipcode", merchantZipCode);
        setStorageItem("business_type", businessType);

        setBusinessName("");
        setBusinessType("");
        setEmail("");
        setPhone("");
        setConfirmationMode("business_email");
        setAppointmentApprovalType("AUTO");
        setStartTime("");
        setEndTime("");
        setBusinessDesc("");
        setBankName("");
        setBankAccountNumber(0);
        setBankTransitNumber(0);
        setBankInstitutionNumber(0);
        setMerchantAddress("");
        setMerchantCity("");
        setMerchantState("");
        setMerchantZipCode("");
        setBusinessPhotos([]);
        setTabData({
          1: {
            practitionerName: "",
            association: "",
            customAssociation: "",
            practitionerEmail: "",
            preferred_gender: "",
            license: "",
            license_expiry: "",
            areaOfExpertise: [],
            insurance: "",
            governmentId: "",
            qualification: "",
            profilePicture: "",
            criminal: "",
          },
        });
        setActiveTab(1);
        setCurrentStep(1);
        navigate("/contractor-agreement");
      } else {
        console.error("Unexpected status:", businessResponse.status);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 30, behavior: "smooth" });
  }, [currentStep]);

  return (
    <>
      {/* Main Section */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-0 md:px-4 space-y-0">
          {/* Progress Section */}
          <div className="hidden md:block w-full">
            <ProgressSidebar
              currentStep={currentStep}
              setCurrentStep={(index) => setCurrentStep(index)}
            />
          </div>

          {/* Main Content */}
          <div className="w-full max-w-5xl mx-auto">
            <div className="submit-page p-4">
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
                      <div className="mb-8 p-4 md:p-6 space-y-6 md:space-y-10 rounded-xl border border-gray-200 bg-white shadow-sm md:mt-4">
                        <h3 className="text-xl font-bold mb-6 text-gray-800">
                          Basic Information
                        </h3>

                        {/* Business Name (full width) */}
                        <div className="col-span-3">
                          <label className="block text-base font-medium mb-2">
                            Business Name
                          </label>
                          <input
                            type="text"
                            placeholder="Business Name"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Business Type */}
                          <div>
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

                          {/* Email */}
                          <div>
                            <label className="block text-base font-medium mb-2">
                              Email Address
                            </label>
                            <input
                              type="text"
                              placeholder="Email Address"
                              value={email}
                              onChange={handleEmailChange}
                              className={`w-full rounded-md border px-3 py-2 text-gray-900 focus:ring-1 focus:outline-none ${
                                emailError
                                  ? "border-red-500 focus:ring-red-500"
                                  : "border-gray-300 focus:ring-indigo-500"
                              }`}
                            />
                            {emailError && (
                              <p className="mt-1 text-sm text-red-600">
                                {emailError}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-base font-medium mb-2">
                              Confirm Email Address
                            </label>
                            <input
                              type="text"
                              placeholder="Email Address"
                              value={confirmEmail}
                              onChange={handleConfirmEmailChange}
                              className={`w-full rounded-md border px-3 py-2 text-gray-900 focus:ring-1 focus:outline-none ${
                                emailError
                                  ? "border-red-500 focus:ring-red-500"
                                  : "border-gray-300 focus:ring-indigo-500"
                              }`}
                            />
                            {confirmEmailError && (
                              <p className="mt-1 text-sm text-red-600">
                                {confirmEmailError}
                              </p>
                            )}
                          </div>

                          {/* Phone Number */}
                          <div>
                            <label className="block text-base font-medium mb-2">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              placeholder="Phone No"
                              value={phone}
                              onChange={handlePhoneNoChange}
                              className={`w-full rounded-md border px-3 py-2 text-gray-900 focus:ring-1 focus:outline-none ${
                                phoneNoError
                                  ? "border-red-500 focus:ring-red-500"
                                  : "border-gray-300 focus:ring-indigo-500"
                              }`}
                            />
                            {phoneNoError && (
                              <p className="mt-1 text-sm text-red-600">
                                {phoneNoError}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                          {/* Appointment Confirmation + Duplicate */}
                          <div>
                            <label className="block text-base font-medium mb-2">
                              How would you like to receive appointment
                              confirmation?
                            </label>
                            <div className="flex gap-4">
                              <label
                                className={`flex items-center gap-2 px-4 py-2 rounded-md border cursor-pointer transition ${
                                  confirmationMode === "business_email"
                                    ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                                    : "border-gray-300 text-gray-600 hover:bg-gray-50"
                                }`}
                                onClick={() =>
                                  setConfirmationMode("business_email")
                                }
                              >
                                <input
                                  type="radio"
                                  name={`confirmation-business_email`}
                                  checked={
                                    confirmationMode === "business_email"
                                  }
                                  onChange={() =>
                                    setConfirmationMode("business_email")
                                  }
                                />
                                Email
                              </label>

                              <label
                                className={`flex items-center gap-2 px-4 py-2 rounded-md border cursor-pointer transition ${
                                  confirmationMode === "business_phone"
                                    ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                                    : "border-gray-300 text-gray-600 hover:bg-gray-50"
                                }`}
                                onClick={() =>
                                  setConfirmationMode("business_phone")
                                }
                              >
                                <input
                                  type="radio"
                                  name={`confirmation-business_phone`}
                                  checked={
                                    confirmationMode === "business_phone"
                                  }
                                  onChange={() =>
                                    setConfirmationMode("business_phone")
                                  }
                                />
                                Phone
                              </label>
                            </div>
                          </div>

                          {/* Appointment Approval Type */}
                          <div>
                            <label className="block text-base font-medium mb-2">
                              Appointment Approval Type?
                            </label>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                              {/* AUTO APPROVAL OPTION */}
                              <div className="flex items-start sm:items-center gap-2 relative">
                                <label
                                  className={`flex items-center gap-2 px-4 py-2 rounded-md border cursor-pointer transition w-full sm:w-auto ${
                                    appointmentApprovalType === "AUTO"
                                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                                      : "border-gray-300 text-gray-600 hover:bg-gray-50"
                                  }`}
                                  onClick={() =>
                                    setAppointmentApprovalType("AUTO")
                                  }
                                >
                                  <input
                                    type="radio"
                                    name="confirmation"
                                    checked={appointmentApprovalType === "AUTO"}
                                    onChange={() =>
                                      setAppointmentApprovalType("AUTO")
                                    }
                                  />
                                  <span className="text-sm sm:text-base">
                                    Auto-Approval
                                  </span>
                                </label>

                                {/* Info Button + Tooltip */}
                                <div className="relative group">
                                  <button
                                    type="button"
                                    className="w-5 h-5 flex items-center justify-center rounded-full border text-xs font-bold text-gray-600 border-gray-400 hover:bg-gray-200"
                                  >
                                    i
                                  </button>
                                  <span
                                    className="absolute sm:left-1/2 sm:-translate-x-1/2 right-0 sm:right-auto top-7 
                   w-60 sm:w-72 px-3 py-2 text-xs text-white bg-gray-800 
                   rounded-md opacity-0 group-hover:opacity-100 
                   transition-opacity duration-200 z-10 
                   whitespace-normal text-center leading-snug shadow-lg"
                                  >
                                    Requests are auto-approved instantly based
                                    on the schedule you provide.
                                  </span>
                                </div>
                              </div>

                              {/* MANUAL APPROVAL OPTION */}
                              <div className="flex items-start sm:items-center gap-2 relative">
                                <label
                                  className={`flex items-center gap-2 px-4 py-2 rounded-md border cursor-pointer transition w-full sm:w-auto ${
                                    appointmentApprovalType === "MANUAL"
                                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                                      : "border-gray-300 text-gray-600 hover:bg-gray-50"
                                  }`}
                                  onClick={() =>
                                    setAppointmentApprovalType("MANUAL")
                                  }
                                >
                                  <input
                                    type="radio"
                                    name="confirmation"
                                    checked={
                                      appointmentApprovalType === "MANUAL"
                                    }
                                    onChange={() =>
                                      setAppointmentApprovalType("MANUAL")
                                    }
                                  />
                                  <span className="text-sm sm:text-base">
                                    Manually
                                  </span>
                                </label>

                                {/* Info Button + Tooltip */}
                                <div className="relative group">
                                  <button
                                    type="button"
                                    className="w-5 h-5 flex items-center justify-center rounded-full border text-xs font-bold text-gray-600 border-gray-400 hover:bg-gray-200"
                                  >
                                    i
                                  </button>
                                  <span
                                    className="absolute sm:left-1/2 sm:-translate-x-1/2 right-0 sm:right-auto top-7 
                   w-60 sm:w-72 px-3 py-2 text-xs text-white bg-gray-800 
                   rounded-md opacity-0 group-hover:opacity-100 
                   transition-opacity duration-200 z-10 
                   whitespace-normal text-center leading-snug shadow-lg"
                                  >
                                    You’ll review and approve each request
                                    manually. Please respond within 20 minutes
                                    during business hours or by the first
                                    business hour if received after hours.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* working days */}
                        <div>
                          <label className="block text-base font-medium mb-2">
                            Working Days
                          </label>
                          <div className="flex gap-4 flex-wrap">
                            {days.map((day) => (
                              <label
                                key={day}
                                className="flex items-center gap-2 cursor-pointer select-none"
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedDays.includes(day)}
                                  onChange={() => handleToggle(day)}
                                  className="w-4 h-4 accent-blue-600 rounded"
                                />
                                <span className="text-gray-700 font-medium">
                                  {day}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Working Hours */}
                        <div>
                          <label className="block text-base font-medium mb-2">
                            Working Hours
                          </label>
                          <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-700">Start</span>
                              <input
                                type="time"
                                className="border rounded-md px-3 py-2 cursor-pointer focus:ring-1 focus:ring-indigo-500"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-gray-700">End</span>
                              <input
                                type="time"
                                className="border rounded-md px-3 py-2 cursor-pointer focus:ring-1 focus:ring-indigo-500"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-span-3">
                          <label className="block text-base font-medium mb-2">
                            Business Description
                          </label>
                          <textarea
                            placeholder="Write a clear and engaging description of your business. Customers will see this."
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                            rows={5}
                            value={businessDesc}
                            onChange={(e) => {
                              const words = e.target.value.trim().split(/\s+/);
                              if (words.length <= 500) {
                                setBusinessDesc(e.target.value);
                              }
                            }}
                          />
                          <p className="text-sm text-gray-500 mt-1 text-right">
                            {businessDesc.trim() === ""
                              ? 0
                              : businessDesc.trim().split(/\s+/).length}{" "}
                            / 500 words
                          </p>
                        </div>
                      </div>

                      {/* Business Address */}
                      <div className="mb-8 p-4 space-y-8 rounded-xl border border-gray-200">
                        <h3 className="text-xl font-semibold mb-4">
                          Business Address
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-base font-medium mb-2">
                              Street Address
                            </label>
                            <input
                              type="text"
                              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                              value={merchantAddress}
                              onChange={(e) =>
                                setMerchantAddress(e.target.value)
                              }
                            />
                          </div>

                          <div>
                            <label className="block text-base font-medium mb-2">
                              City
                            </label>
                            <input
                              type="text"
                              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                              value={merchantCity}
                              onChange={(e) => setMerchantCity(e.target.value)}
                            />
                          </div>

                          <div>
                            <label className="block text-base font-medium mb-2">
                              Province/State
                            </label>
                            <input
                              type="text"
                              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                              value={merchantState}
                              onChange={(e) => setMerchantState(e.target.value)}
                            />
                          </div>

                          <div>
                            <label className="block text-base font-medium mb-2">
                              Postal Code / Zip Code
                            </label>
                            <input
                              type="text"
                              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                              value={merchantZipCode}
                              onChange={(e) =>
                                setMerchantZipCode(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="p-4 space-y-8 rounded-xl border border-gray-200">
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
                          <div className="w-full min-h-[200px] rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 flex items-center justify-center p-10">
                            <style>
                              {`
                                input[type="file"] {
                                  display: none !important;
                                }
                              `}
                            </style>

                            <UploadButton
                              endpoint="practitionerMedia"
                              onClientUploadComplete={(res) => {
                                const uploadedUrl = res?.[0]?.ufsUrl;
                                if (uploadedUrl && businessPhotos.length < 3) {
                                  setBusinessPhotos((prev) => [
                                    ...prev,
                                    uploadedUrl,
                                  ]);
                                }
                              }}
                              onUploadError={(error) =>
                                console.error("Upload failed", error)
                              }
                              appearance={{
                                button:
                                  "bg-blue-600 text-black px-4 py-2 rounded-lg cursor-pointer",
                                allowedContent: "hidden",
                                container: "space-y-3",
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

                  {(currentStep === 2 || currentStep === 4) && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.4 }}
                      layout
                    >
                      <div className="p-4 space-y-8 rounded-xl border border-gray-200 mt-4">
                        <h3 className="text-xl font-semibold mb-6">
                          Practitioner Details
                        </h3>

                        {/* Tabs Section */}
                        {businessType === "Clinic-Based Practice" && (
                          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-3">
                            <ul className="flex border-b border-gray-200 overflow-x-auto no-scrollbar">
                              {tabs.map((tab) => (
                                <li
                                  key={tab.id}
                                  className="relative flex-shrink-0 w-[150px]"
                                >
                                  <button
                                    className={`px-4 py-2 text-base font-medium border-b-2 transition text-center truncate ${
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
                            <style>
                              {`
                                /* Works on Chrome, Edge, Safari */
                                .no-scrollbar::-webkit-scrollbar {
                                  height: 3px;       /* horizontal scrollbar thickness */
                                }

                                .no-scrollbar::-webkit-scrollbar-track {
                                  background: transparent;   /* or use a light gray if you want */
                                }

                                .no-scrollbar::-webkit-scrollbar-thumb {
                                  background-color: #cbd5e0; /* Tailwind's gray-400 */
                                  border-radius: 9999px;     /* fully rounded */
                                }

                                /* Works on Firefox */
                                .no-scrollbar {
                                  scrollbar-width: thin;        /* makes it thinner */
                                  scrollbar-color: #cbd5e0 transparent;
                                }
                              `}
                            </style>
                          </div>
                        )}

                        {/* Practitioner Name + Expertise + License */}
                        <div className="mb-6">
                          {/* Practitioner Name */}
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
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                          />

                          {/* Email + Gender side by side */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
                            <div>
                              <label className="block text-base font-medium mb-2">
                                Email
                              </label>
                              <input
                                type="text"
                                placeholder="Practitioner Email"
                                value={
                                  tabData[activeTab]?.practitionerEmail || ""
                                }
                                onChange={(e) =>
                                  handleTabInputChange(
                                    "practitionerEmail",
                                    e.target.value
                                  )
                                }
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-base font-medium mb-2">
                                Gender
                              </label>
                              <Select
                                options={genderList}
                                className="w-full"
                                classNamePrefix="react-select"
                                placeholder="Select Gender"
                                value={genderList.find(
                                  (option) =>
                                    tabData[activeTab]?.gender === option.value
                                )}
                                onChange={(selectedOption) =>
                                  handleTabInputChange(
                                    "preferred_gender",
                                    selectedOption?.value || ""
                                  )
                                }
                              />
                            </div>
                          </div>

                          {/* Association + Expertise side by side */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
                            <div>
                              <label className="block text-base font-medium mb-2">
                                Association Affiliated To
                              </label>
                              <Select
                                options={associationList}
                                className="w-full"
                                classNamePrefix="react-select"
                                placeholder="Select association"
                                value={associationList.find(
                                  (option) =>
                                    tabData[activeTab]?.association ===
                                    option.value
                                )}
                                onChange={(selectedOption) =>
                                  handleTabInputChange(
                                    "association",
                                    selectedOption?.value || ""
                                  )
                                }
                              />
                            </div>
                            <div>
                              <label className="block text-base font-medium mb-2">
                                Areas of Expertise
                              </label>
                              <Select
                                isMulti
                                options={
                                  businessType !== "Clinic-Based Practice"
                                    ? expertiseListWithMassage
                                    : expertiseListBase
                                }
                                className="w-full"
                                classNamePrefix="react-select"
                                placeholder="Areas of Expertise"
                                value={
                                  businessType === ""
                                    ? []
                                    : (businessType === "wellness"
                                        ? expertiseListWithMassage
                                        : expertiseListBase
                                      ).filter((option: any) =>
                                        tabData[
                                          activeTab
                                        ]?.areaOfExpertise?.includes(
                                          option.value
                                        )
                                      )
                                }
                                onChange={(selectedOptions) =>
                                  handleTabInputChange(
                                    "areaOfExpertise",
                                    selectedOptions
                                      ? selectedOptions.map((o: any) => o.value)
                                      : []
                                  )
                                }
                              />
                            </div>
                          </div>

                          {/* Custom association if "Other" */}
                          {tabData[activeTab]?.association === "Other" && (
                            <div className="col-span-2 mt-3">
                              <label className="block text-base font-medium mb-2">
                                Please mention association name (Other)
                              </label>
                              <input
                                type="text"
                                placeholder="Enter other association name"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                                value={tabData[activeTab]?.customAssociation}
                                onChange={(e) =>
                                  handleTabInputChange(
                                    "customAssociation",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          )}

                          {/* License + Expiry date side by side */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
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
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-base font-medium mb-2">
                                License/Registration Number Expiry date (if
                                applicable)
                              </label>
                              <input
                                type="date"
                                placeholder="Expire date"
                                value={tabData[activeTab]?.license_expiry || ""}
                                onChange={(e) =>
                                  handleTabInputChange(
                                    "license_expiry",
                                    e.target.value
                                  )
                                }
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Upload Sections */}
                        {(
                          [
                            "profilePicture",
                            "insurance",
                            "governmentId",
                            "qualification",
                            "criminal",
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
                                : field === "qualification"
                                ? "Proof of Qualification"
                                : field === "criminal"
                                ? "Criminal background check (not older than 1 year)"
                                : field}
                            </label>

                            {/* Dropzone */}
                            <div className="w-full min-h-[200px] rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center transition hover:bg-gray-100 cursor-pointer p-10">
                              <style>
                                {`
                                input[type="file"] {
                                  display: none !important;
                                }
                              `}
                              </style>

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
                                appearance={{
                                  button:
                                    "bg-blue-600 text-black px-4 py-2 rounded-lg cursor-pointer",
                                  allowedContent: "hidden",
                                  container: "space-y-3",
                                }}
                              />
                            </div>

                            <>
                              {tabData[activeTab]?.[field] && (
                                <div className="text-center z-10">
                                  <div className="w-[160px] h-[160px] rounded-xl border border-gray-300 overflow-hidden flex items-center justify-center">
                                    <img
                                      src={tabData[activeTab][field]}
                                      alt={field}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <p className="text-base text-gray-600 mt-2">
                                    Uploaded
                                  </p>
                                </div>
                              )}
                            </>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {(currentStep === 3 || currentStep === 4) && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.4 }}
                      layout
                    >
                      <div className="mb-8 p-4 space-y-8 rounded-xl border border-gray-200 mt-4">
                        <h3 className="text-xl font-bold mb-4">
                          Basic Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Banking Details */}
                          <div className="col-span-2 md:col-span-1">
                            <label className="block text-base font-medium mb-2">
                              Bank Name
                            </label>
                            <input
                              type="text"
                              placeholder="Bank name"
                              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                              value={bankName}
                              onChange={(e) => setBankName(e.target.value)}
                            />
                          </div>

                          <div className="col-span-2 md:col-span-1">
                            <label className="block text-base font-medium mb-2">
                              Branch Transit Number (5 digits)
                            </label>
                            <input
                              type="number"
                              placeholder="Bank transit number"
                              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                              value={bankTransitNumber}
                              onChange={(e) =>
                                setBankTransitNumber(
                                  parseInt(e.target.value, 10)
                                )
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
                              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                              value={bankInstitutionNumber}
                              onChange={(e) =>
                                setBankInstitutionNumber(
                                  parseInt(e.target.value, 10)
                                )
                              }
                            />
                          </div>

                          <div className="col-span-2 md:col-span-1">
                            <label className="block text-base font-medium mb-2">
                              Account Number (7–12 digits, depending on the
                              bank)
                            </label>
                            <input
                              type="number"
                              placeholder="Account number(7-12) digits"
                              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                              value={bankAccountNumber}
                              onChange={(e) =>
                                setBankAccountNumber(
                                  parseInt(e.target.value, 10)
                                )
                              }
                            />
                          </div>
                        </div>
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
                    onClick={() => {
                      setCurrentStep((prev) => Math.max(prev - 1, 1));
                    }}
                  >
                    Previous
                  </button>

                  <button
                    type="button"
                    className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    onClick={() => {
                      currentStep === 4
                        ? handleMerchantFormSubmit()
                        : setCurrentStep(currentStep + 1);
                    }}
                  >
                    {currentStep === 4 ? "Preview & Submit" : "Next"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showPaymentModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background overlay */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPaymentModal(false)}
            />

            {/* Modal box */}
            <motion.div
              className="relative bg-white w-full max-w-sm rounded-2xl shadow-lg p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h2 className="text-lg font-semibold text-gray-800">
                Your Business Details has been Saved
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Pay the one time non-refundable $31.95 + 5% Tax fee to start
                your background Police verification check. After your payment is
                processed, you’ll receive an email with a secure link to
                complete your background check.
              </p>

              <div className="mt-6 flex gap-3 justify-center">
                <button
                  onClick={() => navigate("/payment")}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                >
                  Continue to Pay
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>
    </>
  );
}
