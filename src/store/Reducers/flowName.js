import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flowName: "Untitled flow_1",
};

const cardSlice = createSlice({
  initialState,
  name: "flowState",
  reducers: {
    SetFlowName: (state, action) => {
      if (action.payload === "") {
        state.flowName = "Untitled flow_1";
      } else state.flowName = action.payload;
    },
  },
});

export const { SetFlowName } = cardSlice.actions;

export default cardSlice.reducer;
