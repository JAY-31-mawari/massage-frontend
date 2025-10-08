import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import SideFilter from "../../components/side-filter";
import axios from "axios";
import ServiceCardLayout from "../../components/serviceCardLayout";
import { useSearchLocation } from "../../store/searchLocation";
import { getStorageItem, deleteStorageItem } from "../../utils/sessionStorage";
import { useServiceStore } from "../../store/serviceStore";
import { serviceTypes } from "../../data/servicesData";
import { useUserStore } from "../../store/userStore";
import toast from "react-hot-toast";
import { serviceNames } from "../../data/servicesData";
import { useUserChoiceStore } from "../../store/userStore";

export default function ClassicalProperty() {
  const search = useSearchLocation((state) => state.searchLocation);
  const updateLocation = useSearchLocation(
    (state) => state.updateSearchLocation
  );
  const [show, setShow] = useState(true);
  const user = useUserStore((state) => state.user);
  const servicesData = useServiceStore((state) => state.services);
  const userChoice = useUserChoiceStore((state) => state.userChoice);
  const setUserChoice = useUserChoiceStore((state) => state.setUserChoice);
  const updateUser = useUserStore((state) => state.updateUser);
  const updateSearch = useSearchLocation((state) => state.updateSearchLocation);
  const setservicesData = useServiceStore((state) => state.setServices);
  const [selectService, setSelectService] = useState(user?.serviceType || "");
  const [userSelectedService, setUserSelectedService] = useState("");
  const [selectServiceError, setSelectServiceError] = useState<string | null>(
    null
  );
  const [location, setLocation] = useState("");
  const liveLocation = useRef(false);
  const latitudeRef = useRef(0);
  const longitudeRef = useRef(0);
  const searchLocation = useRef("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const live = getStorageItem("live");
  const [radius, setRadius] = useState(10);

  const getCurrentLocation = () => {
    setIsLoadingLocation(true);

    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by this browser.");
      setIsLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        latitudeRef.current = latitude;
        longitudeRef.current = longitude;
        liveLocation.current = true;
        updateSearch({
          latitude,
          longitude,
          liveLocation: liveLocation.current,
        });
        getSearchBusinesses();
        // getLiveLocationData(latitude, longitude)
        try {
          // Reverse geocoding using OpenStreetMap Nominatim API
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
          );
          const data = await response.json();

          if (data.display_name) {
            // Extract city and state from the full address
            const addressParts = data.display_name.split(", ");
            const city = addressParts[1] || addressParts[0];
            const state = addressParts[2] || "";
            const locationString = `${city}, ${state}`.trim();
            setLocation(locationString);
            updateSearch({ location: locationString });
          } else {
            setLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
            updateSearch({
              location: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
            });
          }
        } catch (error) {
          console.error("Error reverse geocoding:", error);
          setLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
          updateSearch({
            location: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
          });
        }
        setIsLoadingLocation(false);
      },
      (error) => {
        console.error("Error getting location:", error);
        let errorMessage = "Unable to get your location";

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage =
              "Click the 🔒 icon in the URL → Reset Permissions → Reload";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out.";
            break;
          default:
            errorMessage = "An unknown error occurred.";
            break;
        }

        toast.success(errorMessage, {
          duration: 5000,
        });
        setIsLoadingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  async function getSearchBusinesses() {
    if (userSelectedService === "") {
      setSelectServiceError(
        "Please enter a service to find clinics and services"
      );
      return;
    }
    const searchBusinessData = await axios.get(
      process.env.REACT_APP_PROD +
        `/business/search?q=${searchLocation.current}&latitude=${latitudeRef.current}&longitude=${longitudeRef.current}&radius=${radius}&liveLocation=${liveLocation.current}&service=${userSelectedService}`
    );
    setservicesData(searchBusinessData.data.businesses);
    updateSearch({
      location: searchLocation.current,
      liveLocation: liveLocation.current,
      radius: 10,
    });
  }

  const handleSelectService = (data: string) => {
    setSelectService(data);
    updateUser({ serviceType: data });
  };

  async function getDefaultBusinesses() {
    const businessData = await axios.get(
      process.env.REACT_APP_PROD + "/business"
    );
    setservicesData(businessData.data.businesses);
  }

  useEffect(() => {
    if (selectServiceError) {
      const timer = setTimeout(() => {
        setSelectServiceError(null);
      }, 3000); // 3000ms = 3 seconds
      return () => clearTimeout(timer); // cleanup if errorMessage changes before timeout ends
    }
  }, [selectServiceError]);

  useEffect(() => {
    searchLocation.current = location;
  }, [location]);

  useEffect(() => {
    if (live) {
      deleteStorageItem("live");
      getCurrentLocation();
    } else if (searchQuery) {
      setLocation(searchQuery);
      searchLocation.current = searchQuery;
      updateLocation({ location: searchQuery });
      liveLocation.current = false;
      getSearchBusinesses();
    }
  }, [searchQuery]);

  useEffect(() => {
    if (search?.location && !searchQuery) {
      searchLocation.current = search.location;
      setLocation(search.location);
      getSearchBusinesses();
    }
  }, []);

  useEffect(() => {
    if (servicesData.length === 0) {
      getDefaultBusinesses();
    }
  }, []);

  return (
    <>
      <div className="w-full p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Sidebar (Fixed/Sticky) */}
          <div className="lg:col-span-3 col-span-12">
            <div className="sticky top-6 space-y-6">
              {/* Search Feature Block */}
              <div className="flex flex-col gap-4 bg-white border border-gray-200 rounded-xl shadow-sm p-3">
                {/* Location Input */}
                <div className="relative w-full">
                  <input
                    type="text"
                    className="w-full border border-blue-300 rounded-lg pl-10 pr-12 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    placeholder="Enter city, state or zipcode"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />

                  {/* Left Icon */}
                  <div className="absolute top-1/2 left-3 -translate-y-1/2 text-blue-600">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>

                  {/* Live Location Button */}
                  <button
                    type="button"
                    className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-300 transition disabled:opacity-50"
                    onClick={getCurrentLocation}
                    disabled={isLoadingLocation}
                    title="Use my current location"
                  >
                    {isLoadingLocation ? (
                      <svg
                        className="animate-spin h-4 w-4 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Service Select */}
                <div className="w-full">
                  <select
                    className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-[#d4a373] outline-none"
                    onChange={(e) => {
                      setUserSelectedService(e.target.value);
                      setUserChoice({ selectedService: e.target.value });
                    }}
                  >
                    <option value="">Select Service</option>
                    {serviceNames.map((name, index) => (
                      <option key={index} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Search Button */}
                <div className="w-full">
                  <button
                    type="button"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition font-medium"
                    onClick={() => {
                      liveLocation.current = false;
                      getSearchBusinesses();
                    }}
                  >
                    Search
                  </button>
                </div>
                {selectServiceError && (
                  <div className="text-red-600 text-sm p-2 border-1 border-red-700 ">
                    {selectServiceError}
                  </div>
                )}
              </div>

              {/* Side Filter */}
              <div>
                <SideFilter
                  show={show}
                  setShow={setShow}
                  userSelectedService={userSelectedService}
                  selectService={selectService}
                  setSelectService={handleSelectService}
                  serviceTypes={serviceTypes}
                />
              </div>
            </div>
          </div>

          {/* Services + Pagination (Scrollable) */}
          <div className="lg:col-span-9 col-span-12">
            <div className="pl-10">
              <p className="font-semibold text-gray-950 text-xl">
                Search Results
              </p>
            </div>

            {/* Services List */}
            <div className="grid gap-6 relative z-0">
              {(() => {
                if (servicesData.length === 0) {
                  // Case 1: servicesData is empty
                  return (
                    <div className="flex flex-col items-center justify-center text-gray-600 bg-gray-50 py-12 rounded-xl mx-10 my-6">
                      <svg
                        className="w-12 h-12 text-gray-400 mb-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 17v-2a4 4 0 014-4h6M9 13h.01M9 9h.01M9 5h.01"
                        />
                      </svg>
                      <p className="text-lg font-medium">
                        No services available
                      </p>
                      <p>
                        Please enter correct city, state or zipcode for better
                        results.
                      </p>
                    </div>
                  );
                }

                // Case 2: servicesData is not empty, but filtering results in no items
                const filteredData = servicesData.filter(
                  (item) =>
                    (selectService === "" ||
                      item.businessType === selectService) &&
                    (userSelectedService === "" ||
                      item.services?.includes(userSelectedService))
                );

                if (filteredData.length === 0) {
                  return (
                    <div className="flex flex-col items-center justify-center text-gray-600 bg-gray-50 py-12 rounded-xl mx-10 my-6">
                      <svg
                        className="w-12 h-12 text-gray-400 mb-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 17v-2a4 4 0 014-4h6M9 13h.01M9 9h.01M9 5h.01"
                        />
                      </svg>
                      <p className="text-lg font-medium">
                        No services match your filters
                      </p>
                      <p>
                        Please enter correct city, state or zipcode for better
                        results.
                      </p>
                      <p className="text-sm text-gray-500">
                        Try adjusting your filters or search again.
                      </p>
                    </div>
                  );
                }

                // Case 3: filteredData has results → display them
                return filteredData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl hover:shadow-md transition mx-10 my-2"
                  >
                    <ServiceCardLayout item={item} />
                  </div>
                ));
              })()}
            </div>

            {/* Pagination
            <div className="flex justify-center mt-10">
              <ul className="flex items-center space-x-2 text-sm">
                <li>
                  <Link
                    to="#"
                    aria-label="Previous"
                    className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                  >
                    <i className="fa-solid fa-arrow-left-long"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                    to="#"
                  >
                    1
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                    to="#"
                  >
                    2
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-3 py-2 rounded-lg bg-blue-600 text-white"
                    to="#"
                  >
                    3
                  </Link>
                </li>
                <li>
                  <span className="px-3 py-2 text-gray-500">...</span>
                </li>
                <li>
                  <Link
                    className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                    to="#"
                  >
                    18
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    aria-label="Next"
                    className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                  >
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
