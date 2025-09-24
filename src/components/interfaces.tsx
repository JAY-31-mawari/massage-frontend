interface Location{
  type: string
  coordinates: [Number, Number]
}

interface TimeSlot{
  startTime: string,
  endTime: string
}

interface Availability{
  id: string,
  date: string,
  practitionerId: string
  slots: TimeSlot[]
}

interface PractitionerDetails{
  id: string
  Availability: Availability[]
  practitionerName: string
  profilePicture: string
  areaOfExpertise: string[]
  slots:[TimeSlot]
}

export interface Service {
    id: string
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
    availabilities: Availability[]
  }

  interface BusinessData {
    businessName: string
    businessPhotos: string[]
    business_phone: string
    merchantAddress: string
}

interface PractitionerData {
    practitionerName: string
    areaOfExpertise: string[]
}

export interface AppointmentHistory {
    active: boolean
    appointmentDate: string
    businessId: string
    practitionerId: string
    business: BusinessData
    practitioner: PractitionerData
    duration: number
    price: number
    reminderSent: boolean
    serviceName: string
    serviceType: string
    userId: string
    id: string
}


export interface Booking {
  active: boolean;
  appointmentDate: Date;
  startTime:Date,
  endTime: Date,
  businessId: string;
  duration: number;
  paymentStatus: string;
  practitionerId: string;
  price: number;
  reminderSent: false;
  serviceName: string;
  serviceType: string;
  status: string;
  id: string;
}

export interface PaymentCard {
  id: string;
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  isDefault: boolean;
  cardType: string;
  isActive: boolean;
  lastUsed: Date;
  isExpired: boolean;
}