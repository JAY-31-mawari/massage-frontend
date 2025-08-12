// stores/searchStore.ts
import { create } from 'zustand';

interface Location {
    type: string
    coordinates: [Number, Number]
}

interface PractitionerDetails{
  practitionerName: string
  areaOfExpertise: string[]
  _id: string
}

interface Service {
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
  

interface ServiceStore {
  services: Service[];
  setServices: (results: Service[]) => void;
}

export const useServiceStore = create<ServiceStore>((set) => ({
  services: [],
  setServices: (results) => set({ services: results }),
}));
