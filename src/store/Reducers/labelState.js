import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  label1: "Urgent",
  label2: "Pending",
  label3: "Inprogress",
  label4: "Done",
  label5: "Approved",
};

const cardSlice = createSlice({
  initialState,
  name: "labelState",
  reducers: {
    SetLabelList: (state, action) => {
      let temp = { ...state, ...action.payload };
      console.log(temp);
      state = { ...temp };
    },
  },
});

export const { SetLabelList } = cardSlice.actions;

export default cardSlice.reducer;
