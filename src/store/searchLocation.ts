import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SearchLoaction {
  latitude: number
  longitude: number
  location: string
  radius: number
  liveLocation: boolean
}

interface SearchLocationStore {
  searchLocation: Partial<SearchLoaction> | null
  updateSearchLocation: (data: Partial<SearchLoaction>) => void
}

export const useSearchLocation = create<SearchLocationStore>()(
    (set) => ({
      searchLocation: null,
      updateSearchLocation: (data) => set((state)=>({
        searchLocation: {...state.searchLocation, ...data}
      })),
    }),

)
