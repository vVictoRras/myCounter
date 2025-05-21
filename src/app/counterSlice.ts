import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
    value: number,
    minValue: number,
    maxValue: number
}

const initialState: CounterState = {value: 0, minValue: 0, maxValue: 5}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            if (state.value < state.maxValue) {
                state.value++
            }
        },
        decrement: (state) => {
            if (state.value > state.minValue) {
                state.value--
            }
        },
        reset: (state) => {
            state.value = 0
        },
        setMinValue: (state, action: PayloadAction<number>) => {
            state.minValue = action.payload;
            if (state.value < action.payload) {
                state.value = action.payload
            }
        },
        setMaxValue: (state, action: PayloadAction<number>) => {
            state.maxValue = action.payload;
        }
    }
})

export const {increment, decrement, reset, setMaxValue, setMinValue} = counterSlice.actions
export default counterSlice.reducer