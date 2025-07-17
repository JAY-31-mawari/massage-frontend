import React, { useState, useEffect } from 'react'
import GridProperty from './grid-property';
import axios from 'axios';

interface Business{
    bankingDetails: string,
    businessName: string,
    businessType: string,
    business_email: string,
    business_phone: string,
    merchantAddress: string,
    merchantCity: string,
    merchantState: string,
    merchantZipCode: string,
    practitioners: Practitioner[]
}

interface Practitioner{
    treatmentSpace: string,
    insurance: string,
    governmentId: string,
    qualification: string,
    profilePicture: string,
    areaOfExpertise: string[]
}

export default function GridPropertyOne({border}:{border:any}) {

    const [services, setServices] = useState([])

    const getAllMessagesServices = async () => {
        try {
            const services = await axios.get(global.config.ROOTURL.prod + '/business')
            console.log(services.data.businesses)
            setServices(services.data.businesses)
        } catch (error) {
            console.error('Error in getAllMEssagesServices:', error);
        }
    }

    useEffect(()=>{
        getAllMessagesServices()
    }, [])

  return (
    <div className="row justify-content-center g-4">
        {services.slice(0,6).map((item:Business , index:number)=>{
            return(
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                    <GridProperty item={item} border={border} />
                </div>
            )
        })}
    </div>
  )
}
