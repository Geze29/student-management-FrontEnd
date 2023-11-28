import create from 'zustand';

const useAuthStore = create((set) => ({
  token: localStorage.getItem('token') || '', // Initialize token from localStorage
  setToken: (newToken) => {
    set({ token: newToken });
    localStorage.setItem('token', newToken); // Persist token in localStorage
  },
  clearToken: () => {
    set({ token: '' });
    localStorage.removeItem('token'); // Remove token from localStorage
  },
}));


export default useAuthStore;