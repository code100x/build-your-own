import create from 'zustand'

interface IBook {
    amount: number
    updateAmount: (newAmount: number) => void
}

export const useBookStore = create<IBook>( (set, get) => ({
    amount: 40,
    updateAmount: (newAmount: number ) => {

        const amountState = get().amount

        set({ amount: newAmount + amountState })
    },
}));