import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  person: [
    { name: "Alan", age: 22, id: 1 },
    { name: "John", age: 25, id: 2 },
  ],
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (state, action) => {
      const newId =
        state.person.length > 0
          ? state.person[state.person.length - 1].id + 1
          : 1;
      state.person.push({
        ...action.payload,
        id: newId,
      });
    },
    removePerson: (state, action) => {
      state.person = state.person.filter(
        (person) => person.id !== action.payload
      );
    },
  },
});

export const { addPerson, removePerson } = personSlice.actions;

export default personSlice.reducer;
