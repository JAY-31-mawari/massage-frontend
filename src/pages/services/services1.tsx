import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";
import Navbar from "../../components/navbar/navbar";
import ServiceMainComponent from "./components/main";
import { servicesData } from "../../data/servicesData";

interface LocationState {
  lat: number | null;
  lng: number | null;
}

interface ServiceData{
  title: string
  image: string
  url: string
  desc: string[]
}

export default function Service1() {
  // const [location, setLocation] = useState<LocationState>({ lat: 0, lng: 0 });
  // const [error, setError] = useState<string | null>(null);

//   const checkPermission = () => {
//   if (!navigator.permissions) {
//     toast.error("Permissions API not supported in this browser.");
//     return;
//   }

//   navigator.permissions.query({ name: "geolocation" }).then((status) => {
//     if (status.state === "granted") {
//       getLocation()
//       // You can directly call getLocation()
//     } else if (status.state === "prompt") {
//       getLocation()
//       // Next getLocation() will show prompt
//     } else if (status.state === "denied") {
//       console.log("permision denied go to browser url and change the location settings")
//       toast.success("please change the settings, go to url and under location tab, allow us to take you location to provide best services")
//       // Show UI: ask user to enable location in settings
//     }
//   });
// };


//   const getLocation = () => {
//     if (!navigator.geolocation) {
//       toast.error("Geolocation is not supported by your browser");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position: GeolocationPosition) => {
//         setLocation({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//         setError(null);
//       },
//       (err: GeolocationPositionError) => {
//         setError(err.message);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 10000,
//         maximumAge: 0,
//       }
//     );
//   };
//   useEffect(()=>{
//     checkPermission()
//   },[])

  const serviceName = "Physiotherapy"
  const [otherServicesData, setOtherServicesData] = useState<ServiceData[]>([])
  const [selectedService, setSelectedService] = useState<ServiceData>()

  useEffect(()=>{
    const data = servicesData.filter((service)=> service.title !== serviceName)
    const servicePage = servicesData.find((service)=> service.title === serviceName)
    setSelectedService(servicePage)
    setOtherServicesData(data)
  }, [])
  return (
    <>
      <Navbar transparent={false}/>
      <ServiceMainComponent serviceTitle={serviceName} serviceImage={selectedService?.image} serviceDescData={selectedService?.desc} otherServicesData={otherServicesData}/>
    </>
  );
}
