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

    RemoveActiveCard: (state, action) => {
      state.cardState.activeCardId = null;
    },
  },
});

export const { SetActiveCard, RemoveActiveCard } = cardSlice.actions;

export default cardSlice.reducer;
