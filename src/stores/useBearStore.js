// import { create } from 'zustand'

// const useBearStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// }))

import { create } from 'zustand'

export const useBearStore = create(
  (set) => {
    // The return is just a plain JavaScript object
    return {
      // first field is the stat we want to store
      bears: 0,
      // Second is a function for mutating the state
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 }))
    }
  }
)