interface Location{
  type: string
  coordinates: [Number, Number]
}

interface PractitionerDetails{
  practitionerName: string
  profilePicture: string
  areaOfExpertise: string[]
  _id: string
}

export interface Service {
    _id: string
    location: Location
    businessName: string
    businessType: string
    business_email: string
    business_phone: string
    bankingDetails: string
    services?: string[]
    merchantAddress: string
    merchantCity: string
    merchantState: string
    merchantZipCode: string
    practitioners: PractitionerDetails[]
    businessPhotos: string[]
  }

  interface BusinessData {
    businessName: string
    businessPhotos: string[]
    business_phone: string
    merchantAddress: string
    _id: string
}

interface PractitionerData {
    _id: string
    practitionerName: string
    areaOfExpertise: string[]
}

export interface AppointmentHistory {
    active: boolean
    appointmentDate: string
    businessId: BusinessData
    practitionerId: PractitionerData
    duration: number
    price: number
    reminderSend: boolean
    serviceName: string
    serviceType: string
    userId: string
    _id: string
}