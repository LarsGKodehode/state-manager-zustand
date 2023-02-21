import { create } from 'zustand'

// const useBearStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// }))

export const useShoppingCart = create((set) => ({
  cart: [],
  addToCart: (id, amount) => set((state) => ({ cart: [...state.cart, [id, amount]] }))
}))