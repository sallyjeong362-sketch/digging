import { create } from 'zustand';

interface ToastState {
  message: string | null;
  show: (msg: string) => void;
  clear: () => void;
}

export const useToast = create<ToastState>((set) => ({
  message: null,
  show: (msg) => set({ message: msg }),
  clear: () => set({ message: null }),
}));
