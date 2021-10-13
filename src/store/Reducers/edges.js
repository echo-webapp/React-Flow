import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  edges: [],
};

const EdgeSlice = createSlice({
  initialState,
  name: "edges",
  reducers: {
    AddEdge: (state, action) => {
      console.log(action.payload);
      const new_edge = {
        source: action.payload.source,
        target: action.payload.target,
      };
      state.edges.push(new_edge);
    },
  },
});

export const { AddEdge } = EdgeSlice.actions;

export default EdgeSlice.reducer;
