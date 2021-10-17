import { createSlice } from "@reduxjs/toolkit";
import { addEdge } from "react-flow-renderer";

const initialState = {
  message: [],
  edges: [],
};

const messageSlice = createSlice({
  initialState,
  name: "messages",
  reducers: {
    AddMessage: (state, action) => {
      const temp = [...state.message];
      temp.push(action.payload);
      state.message = temp;
      console.log(state.message);
    },
    AddEdge: (state, action) => {
      console.log(action.payload);
      const new_edge = {
        source: action.payload.source,
        target: action.payload.target,
      };
      if (state.edges === undefined) state.edges = [];
      state.edges.push(new_edge);
      state.message = addEdge(action.payload, state.message);
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
    AddOption: (state, action) => {
      const temp = [...state.message];
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].id === action.payload) {
          if (temp[i].data.options === undefined) {
            temp[i].data.options = [];
            temp[i].data.options.push("");
          } else temp[i].data.options.push("");
        }
      }
      state.message = temp;
    },
    AddOptionData: (state, action) => {
      const temp = [...state.message];
      const ind = action.payload.index;
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].id === action.payload.id) {
          temp[i].data.options[ind] = action.payload.text;
        }
      }
      state.message = temp;
    },
    AddRightSideDescription: (state, action) => {
      const temp = [...state.message];
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].id === action.payload.id) {
          temp[i].data.messageDescription = action.payload.description;
        }
      }
      state.message = temp;
    },
    DeleteRightSideDescription: (state, action) => {
      const temp = [...state.message];
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].id === action.payload.id) {
          temp[i].data.messageDescription = undefined;
        }
      }
      state.message = temp;
    },
  },
});

export const {
  AddMessage,
  AddDescription,
  AddPicture,
  AddOption,
  AddOptionData,
  AddEdge,
  AddRightSideDescription,
  DeleteRightSideDescription,
} = messageSlice.actions;

export default messageSlice.reducer;
