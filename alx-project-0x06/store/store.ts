import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

interface initialStructure {
  value: number;
}

const initialState: initialStructure = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value > 0 ? state.value - 1 : 0;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});


export const { increment, decrement } = counterSlice.actions;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
