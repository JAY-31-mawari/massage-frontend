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
    merchantAddress: string
    merchantCity: string
    merchantState: string
    merchantZipCode: string
    practitioners: PractitionerDetails[]
    businessPhotos: string[]
  }