import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Merchant {
  _id: string
  businessName: string
  businessType: string
  business_email: string
  business_phone: string
  bankingDetails: string
  merchantAddress: string
  merchantCity: string
  merchantState: string
  merchantZipCode: string
  active: boolean
  practitioners: any[]
  createdAt: string
  updatedAt: string
  __v: number
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
