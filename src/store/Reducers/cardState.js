import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardState: {
    activeCardId: null,
    activeEdgeId: null,
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

    SetActiveEdge: (state, action) => {
      state.cardState.activeEdgeId = action.payload;
    },

    RemoveActiveEdge: (state, action) => {
      state.cardState.activeEdgeId = null;
    },
  },
});

export const {
  SetActiveCard,
  RemoveActiveCard,
  SetActiveEdge,
  RemoveActiveEdge,
} = cardSlice.actions;

export default cardSlice.reducer;
