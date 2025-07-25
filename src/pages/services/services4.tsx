import {useEffect, useState} from "react";
import Navbar from "../../components/navbar/navbar";
import ServiceMainComponent from "./components/main";
import { servicesData } from "../../data/servicesData";

interface ServiceData{
  title: string
  image: string
  url: string
  desc: string[]
}

export default function Service4() {
  const serviceName = "Acupuncture"
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
