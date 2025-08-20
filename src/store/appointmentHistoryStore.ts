import { create } from 'zustand'
import { AppointmentHistory } from '../components/interfaces' 

interface AppointmentHistoryStore {
    appointments: AppointmentHistory[]
    updateAppointments: (results: AppointmentHistory[]) => void
    clearAppointments: () => void
}

export const useAppointmentStore = create<AppointmentHistoryStore>()(
    (set) => ({
      appointments: [],
      updateAppointments: (data) =>
        set((state) => ({
          appointments: [...state.appointments, ...data ],
        })),
    clearAppointments: () => set({appointments:[]})
    })
  
)
