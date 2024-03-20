import { create } from 'zustand'


const initialHandyHubberUser = JSON.parse(localStorage.getItem('handyHubberUser')) || null

// Define store
export const useAuthStore = create((set) => ({
  activeTab: 1,
  setActiveTab: (tab) => set({ activeTab: tab }),

  isAuthenticated: false,
  setIsAuthenticated: (auth) => set({ isAuthenticated: auth }),

  user: null,
  setUser: (user) => set({ user }),

  handyHubberUser: initialHandyHubberUser,
  setHandyHubberUser: (user) => set({ handyHubberUser: user }),
}))