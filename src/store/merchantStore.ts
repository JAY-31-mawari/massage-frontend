import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Location{
  type: string
  coordinates: [Number, Number]
}

interface PractitionerDetails{
  practitionerName: string
  areaOfExpertise: string[]
  _id: string
}

interface Merchant {
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

interface MerchantStore {
  merchant: Partial<Merchant> | null
  setMerchant: (data: Partial<Merchant>) => void
  updateMerchant: (data: Partial<Merchant>) => void
  clearMerchant: () => void
}

export const useMerchantStore = create<MerchantStore>()(
  persist(
    (set) => ({
      merchant: null,
      setMerchant: (data) => set({ merchant: data }),
      updateMerchant: (data) =>
        set((state) => ({
          merchant: { ...state.merchant, ...data },
        })),
      clearMerchant: () => set({ merchant: null }),
    }),
    {
      name: 'merchant-data', // key for localStorage
    }
  )
)
