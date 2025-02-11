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
    updatePersonSlice: (state, action) => {
      const index = state.person.findIndex(
        (ppl) => ppl.id === action.payload.id
      );
      if (index !== -1) {
        state.person[index] = action.payload; // Atualiza a pessoa no array
      }
    },
  },
});

export const { addPerson, removePerson, updatePersonSlice } =
  personSlice.actions;

export default personSlice.reducer;
