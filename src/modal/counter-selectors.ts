import {RootState} from "../app/store.ts";

export const selectCount = (state: RootState) => state.counter.value;
export const selectMaxValue = (state: RootState) => state.counter.maxValue;
export const selectMinValue = (state: RootState) => state.counter.minValue;