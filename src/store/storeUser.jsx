import { create } from "zustand";

const useUserStore = create((set)=>({
    user: localStorage.getItem('user') || '',
    setUser: (user)=>{
        set({ user:user })
        localStorage.setItem('user',user);
    },
    clearUser:()=>{
        set({user:''})
        localStorage.removeItem('user')
    }
}));

export default useUserStore;