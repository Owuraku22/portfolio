import { create } from "zustand";
// import { createJSONStorage, persist } from 'zustand/middleware';

interface ActiveTabTypes {
  activeTab: string;
  setActiveTab: (state: string) => void;
}

export const useActiveTab = create<ActiveTabTypes>((set) => ({
  activeTab: "home",
  setActiveTab: (state: any) => set(() => ({ activeTab: state })),
}));
