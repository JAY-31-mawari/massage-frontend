import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ServiceBookingDetail from "../../components/serviceBookingDetail";
import { useMerchantStore } from "../../store/merchantStore";
import { serviceNames } from "../../data/servicesData";
import axios from "axios";

export default function SinglePropertyOne() {
  let params = useParams();
  let id: any = params.id;
  const [merchant, setMerchant] = useState<any>();
  const [userSelectedService, setUserSelectedService] = useState("");
  const [userSelectedPractitionerId, setUserSelectedPractitionerId] =
    useState("");
  const [userSelectedTimeDuration, setUserSelectedTimeDuration] = useState(15);
  const selectedServiceData = useMerchantStore((state) => state.merchant);
  const [selectedImage, setSelectedImage] = useState("");
  const timeDuration = [15, 30, 45, 60];

  const getSpecificBusinessById = async () => {
    const payload = {
      method: "GET",
      url: global.config.ROOTURL.prod + `/business/${id}`,
    };

    await axios(payload)
      .then((res) => {
        setMerchant(res.data);
        if (res.data?.businessPhotos) {
          setSelectedImage(res.data.businessPhotos[0]);
        }
      })
      .catch((err) => {
        console.error("Error Fetching Data: getSpecificBusinessById", err);
      });
  };

  useEffect(() => {
    if (id) {
      getSpecificBusinessById();
    } else {
      setMerchant(selectedServiceData);
      if (selectedServiceData?.businessPhotos) {
        setSelectedImage(selectedServiceData.businessPhotos[0]);
      }
    }
  }, [id]);

  useEffect(() => {
    if (selectedServiceData?.practitioners?.length) {
      setUserSelectedPractitionerId(selectedServiceData.practitioners[0]._id);
    }
  }, [selectedServiceData]);

  return (
    <>
      <div className="min-h-screen bg-[#f6f6f6] p-4 md:p-8 flex flex-col lg:flex-row gap-6">
        {/* Left - Side (Sticky) */}
        <div className="w-full lg:w-[40%] relative mx-auto px-4">
          <div className="sticky top-30">
            {/* Main Image */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={selectedImage}
                alt="Service"
                className="w-full h-64 sm:h-80 md:h-72 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4 flex-wrap justify-center sm:justify-start">
              {merchant?.businessPhotos.map((img: string, idx: number) => (
                <div key={idx} className="group">
                  <img
                    src={img}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105 border-2 ${
                      selectedImage === img
                        ? "border-[#d4a373]"
                        : "border-transparent"
                    } group-hover:opacity-80`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*  Right - Side */}
        <div className="flex-1 bg-white rounded-2xl p-6 flex flex-col gap-5">
          {/* Business Info */}
          <div>
            <h1 className="text-2xl font-bold text-[#3d2b1f]">
              {merchant?.businessName}
            </h1>
            <p className="text-[#6b4f3f] mb-0">{merchant?.merchantAddress}</p>
          </div>

          {/* Service Selection */}
          <div>
            <label className="block mb-2 font-medium text-[#3d2b1f]">
              Choose Service
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#d4a373] outline-none"
              onChange={(e) => setUserSelectedService(e.target.value)}
            >
              <option value="">Select Service</option>
              {serviceNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium text-[#3d2b1f]">
              Choose Duration
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#d4a373] outline-none"
              value={userSelectedTimeDuration}
              onChange={(e) =>
                setUserSelectedTimeDuration(parseInt(e.target.value, 10))
              }
            >
              {timeDuration.map((time, index) => (
                <option key={index} value={time}>
                  {time} minutes
                </option>
              ))}
            </select>
          </div>

          {/* Practitioner Selection */}
          <div>
            <p className="mb-2 font-medium text-[#3d2b1f]">Select Provider</p>
            <div className="flex gap-4">
              {userSelectedService === ""
                ? merchant?.practitioners?.map(
                    (practitioner: any, index: number) => (
                      <div
                        key={index}
                        onClick={() =>
                          setUserSelectedPractitionerId(practitioner._id)
                        }
                        className={`flex flex-col items-center cursor-pointer group ${
                          userSelectedPractitionerId === practitioner._id
                            ? "scale-105"
                            : ""
                        }`}
                      >
                        <img
                          src={practitioner?.profilePicture}
                          alt={practitioner.practitionerName}
                          className={`w-16 h-16 object-cover rounded-full border-2 transition-all duration-300 ${
                            userSelectedPractitionerId === practitioner._id
                              ? "border-[#d4a373]"
                              : "border-transparent"
                          }`}
                        />
                        <span className="mt-1 text-sm text-[#3d2b1f]">
                          {practitioner.practitionerName}
                        </span>
                      </div>
                    )
                  )
                : merchant?.practitioners
                    ?.filter((practitioner: any) =>
                      practitioner?.areaOfExpertise.includes(
                        userSelectedService
                      )
                    )
                    .map((practitioner: any, index: number) => (
                      <div
                        key={index}
                        onClick={() =>
                          setUserSelectedPractitionerId(practitioner._id)
                        }
                        className={`flex flex-col items-center cursor-pointer group ${
                          userSelectedPractitionerId === practitioner._id
                            ? "scale-105"
                            : ""
                        }`}
                      >
                        <img
                          src={practitioner?.profilePicture}
                          alt={practitioner.practitionerName}
                          className={`w-16 h-16 object-cover rounded-full border-2 transition-all duration-300 ${
                            userSelectedPractitionerId === practitioner._id
                              ? "border-[#d4a373]"
                              : "border-transparent"
                          }`}
                        />
                        <span className="mt-1 text-sm text-[#3d2b1f]">
                          {practitioner.practitionerName}
                        </span>
                      </div>
                    ))}
            </div>
          </div>

          <ServiceBookingDetail
            serviceName={userSelectedService}
            practitionerId={userSelectedPractitionerId}
            duration={userSelectedTimeDuration}
            setDuration={setUserSelectedTimeDuration}
          />
        </div>
      </div>
    </>
  );
}
