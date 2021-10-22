import { createSlice, current } from "@reduxjs/toolkit";
import { addEdge } from "react-flow-renderer";

const initialState = {
  message: [],
};

const messageSlice = createSlice({
  initialState,
  name: "messages",
  reducers: {
    AddMessage: (state, action) => {
      state.message.push(action.payload);
    },

    ChangeCardPosition: (state, action) => {
      const arr = [...state.message];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === action.payload.id) {
          arr[i].position = action.payload.position;
        }
      }
      state.message = arr;
    },
    removeMessage: (state, action) => {
      const filtered_nodes = [];

      let node_index = null;
      let edge_index = [];
      for (let i = 0; i < state.message.length; i++) {
        if (state.message[i].id == action.payload) {
          node_index = i;
        }
      }
      if (node_index != null) {
        state.message.splice(node_index, 1);
      }

      for (let i = 0; i < state.message.length; i++) {
        if (
          action.payload == state.message[i].source ||
          action.payload == state.message[i].target
        ) {
        } else {
          edge_index.push(i);
        }
      }
      const all_messages = [];
      if (edge_index.length > 0) {
        for (let i = 0; i < edge_index.length; i++) {
          all_messages.push(state.message[edge_index[i]]);
        }
      }
      state.message = all_messages;
    },

    AddEdge: (state, action) => {
      state.message = addEdge(action.payload, state.message);
    },

    RemoveEdge: (state, action) => {
      let index = null;
      for (let i = 0; i < state.message.length; i++) {
        if (state.message[i].id == action.payload.id) {
          index = i;
        }
      }
      state.message.splice(index, 1);
    },

    AddDescription: (state, action) => {
      const arr = [...state.message];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === action.payload.id) {
          arr[i].data.description = action.payload.data.value;
        }
      }

      state.message = arr;
    },

    AddPicture: (state, action) => {
      for (let i = 0; i < state.message.length; i++) {
        if (state.message[i].id === action.payload.id) {
          console.log(action.payload.binary);
          state.message[i].data.image = action.payload.binary;
        }
      }
    },

    removePicture: (state, action) => {
      for (let i = 0; i < state.message.length; i++) {
        if (state.message[i].id === action.payload) {
          state.message[i].data.image = null;
        }
      }
    },

    AddOption: (state, action) => {
      const temp = [...state.message];
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].id === action.payload) {
          temp[i].data.options.push("");
        }
      }
      state.message = temp;
    },

    AddOptionData: (state, action) => {
      const nodes = state.message;
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id == action.payload.id) {
          nodes[i].data.options[action.payload.index] = action.payload.text;
        }
      }
      state.message = nodes;
    },

    DeleteOption: (state, action) => {
      const nodes = state.message;
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id == action.payload.id) {
          nodes[i].data.options.splice(action.payload.index, 1);
        }
      }
      state.message = nodes;
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
    ChangeTitle: (state, action) => {
      for (let i = 0; i < state.message.length; i++) {
        if (state.message[i].id == action.payload.id) {
          state.message[i].data.title = action.payload.value;
        }
      }
    },
    SetColorTag: (state, action) => {
      for (let i = 0; i < state.message.length; i++) {
        if (state.message[i].id == action.payload.id) {
          state.message[i].tag = action.payload.tag;
        }
      }
    },
    DeleteColorTag: (state, action) => {
      for (let i = 0; i < state.message.length; i++) {
        if (state.message[i].id == action.payload.id) {
          state.message[i].tag = undefined;
        }
      }
    },
    AddEdgeLabel: (state, action) => {
      console.log(action.payload);
      let index = null;
      let all_nodes = [];
      for (let i = 0; i < state.message.length; i++) {
        if (state.message[i].id == action.payload.id) {
          index = i;
        }
        all_nodes.push(state.message[i]);
      }
      all_nodes[index].label = action.payload.value;
      state.message = all_nodes;
      console.log(state.message);
    },
  },
});

export const {
  AddMessage,
  AddDescription,
  AddPicture,
  AddOption,
  AddOptionData,
  DeleteOption,
  AddEdge,
  RemoveEdge,
  AddRightSideDescription,
  DeleteRightSideDescription,
  removeMessage,
  ChangeTitle,
  SetColorTag,
  DeleteColorTag,
  ChangeCardPosition,
  removePicture,
  AddEdgeLabel,
} = messageSlice.actions;

export default messageSlice.reducer;
