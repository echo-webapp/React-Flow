import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardState: {
    activeCardId: null,
  },
};

const cardSlice = createSlice({
  initialState,
  name: "cardState",
  reducers: {
    SetActiveCard: (state, action) => {
      state.cardState.activeCardId = action.payload;
    },
  },
});

export const { SetActiveCard } = cardSlice.actions;

export default cardSlice.reducer;
