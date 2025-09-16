import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  _id: string
  fullName?: string
  email?: string
  phone?: string
  businessName?: string
  business_email?: string
  business_phone?: string
  serviceType?: string
  __v: number
}

interface UserStore {
  user: Partial<User> | null
  setUser: (data: Partial<User>) => void
  fullUpdate: (data: Partial<User>) => void
  updateUser: (data: Partial<User>) => void
  clearUser: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (data) => set({ user: data }),
      fullUpdate: (data) => 
        set({user: { ...data }}),
      updateUser: (data) =>
        set((state) => ({
          user: { ...state.user, ...data },
        })),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-data', // localStorage key
    }
  )
)
