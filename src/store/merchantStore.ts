import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Service } from '../components/interfaces'

interface MerchantStore {
  merchant: Partial<Service> | null
  setMerchant: (data: Partial<Service>) => void
  updateMerchant: (data: Partial<Service>) => void
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
