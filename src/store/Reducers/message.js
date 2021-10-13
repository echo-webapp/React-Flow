import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: [],
};

const messageSlice = createSlice({
  initialState,
  name: "messages",
  reducers: {
    AddMessage: (state, action) => {
      const temp = [...state.message];
      temp.push(action.payload);
      state.message = temp;
    },
    AddDescription: (state, action) => {
      const temp = [...state.message];
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].id === action.payload.id) {
          temp[i].data.description = action.payload.description;
        }
      }
      state.message = temp;
    },
    AddPicture: (state, action) => {
      const temp = [...state.message];
      const sar = Object.assign(action.payload[0].pics[0]);
      let data = {};
      data.picCount = action.payload[0].picCount;
      data.pics = sar;
      console.log(data);
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].id === action.payload[1]) {
          temp[i].data.picture = data;
        }
      }
      state.message = temp;
    },
  },
});

export const { AddMessage, AddDescription, AddPicture } = messageSlice.actions;

export default messageSlice.reducer;
