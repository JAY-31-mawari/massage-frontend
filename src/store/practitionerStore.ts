import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Practitioner {
  _id: string
  practitionerName: string
  license: string
  treatmentSpace: string
  insurance: string
  governmentId: string
  qualification: string
  profilePicture: string
  businessId: string
  areaOfExpertise: string[]
  active: boolean
  createdAt: string
  updatedAt: string
  __v: number
}

interface PractitionerStore {
  practitioners: Practitioner[]
  setPractitioners: (data: Practitioner[]) => void
  addPractitioner: (data: Practitioner) => void
  updatePractitioner: (_id: string, data: Partial<Practitioner>) => void
  clearPractitioners: () => void
}

export const usePractitionerStore = create<PractitionerStore>()(
  persist(
    (set) => ({
      practitioners: [],

      // Replace all practitioners with new data
      setPractitioners: (data: Practitioner[]) => set({ practitioners: data }),

      // Add a single practitioner to the array
      addPractitioner: (data: Practitioner) =>
        set((state) => ({
          practitioners: [...state.practitioners, data],
        })),

      // Update a practitioner by _id
      updatePractitioner: (_id: string, data: Partial<Practitioner>) =>
        set((state) => ({
          practitioners: state.practitioners.map((p) =>
            p._id === _id ? { ...p, ...data } : p
          ),
        })),

      // Clear all practitioners
      clearPractitioners: () => set({ practitioners: [] }),
    }),
    {
      name: 'practitioner-data', // key used in localStorage
      // optional: customize storage or serialize/deserialize
      // storage: createJSONStorage(() => sessionStorage), // example to use sessionStorage
      // version: 1, // versioning if you want migrations later
    }
  )
)
