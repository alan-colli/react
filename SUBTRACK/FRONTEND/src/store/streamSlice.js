import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  streams: [],
  loading: false,
  error: null,
};

const streamSlice = createSlice({
  name: "streams",
  initialState,
  reducers: {
    setStreams: (state, action) => {
      state.streams = action.payload;
      state.loading = false;
      state.error = null;
    },
    addStream: (state, action) => {
      state.streams.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    removeStream: (state, action) => {
      state.streams = state.streams.filter(
        (stream) => stream.id !== action.payload
      );
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setStreams, addStream, removeStream, setLoading, setError } =
  streamSlice.actions;

export default streamSlice.reducer;
