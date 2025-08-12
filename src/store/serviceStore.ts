// stores/searchStore.ts
import { create } from 'zustand';
import { Service } from '../components/interfaces';

interface ServiceStore {
  services: Service[];
  setServices: (results: Service[]) => void;
}

export const useServiceStore = create<ServiceStore>((set) => ({
  services: [],
  setServices: (results) => set({ services: results }),
}));
