import { createSlice } from "@reduxjs/toolkit";

// Başlangıç durumu
const initialState = {
  user:  false,
  token: false,
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    updateTeacher: (state, action) => {
      state.teacher = action.payload;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { updateToken, updateTeacher } = teacherSlice.actions;

export default teacherSlice.reducer;