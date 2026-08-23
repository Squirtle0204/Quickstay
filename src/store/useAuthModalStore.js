import { create } from "zustand";

export const useAuthModal = create((set) => ({
  isLoginOpen: false,
  isRegisterOpen: false,

  openLogin: () =>
    set({
      isLoginOpen: true,
      isRegisterOpen: false,
    }),

  closeLogin: () =>
    set({
      isLoginOpen: false,
    }),

  openRegister: () =>
    set({
      isLoginOpen: false,
      isRegisterOpen: true,
    }),

  closeRegister: () =>
    set({
      isRegisterOpen: false,
    }),

  closeAll: () =>
    set({
      isRegisterOpen: false,
      isLoginOpen: false,
    }),
}));
