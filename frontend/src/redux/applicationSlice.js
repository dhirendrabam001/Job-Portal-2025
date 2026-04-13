import { createSlice } from "@reduxjs/toolkit";
import {} from "react-redux";

const applicationSlice = createSlice({
  name: "application",
  initialState: {
    allApplicant: [],
  },
  reducers: {
    setAllApplicant: (state, action) => {
      state.allApplicant = action.payload;
    },
  },
});
export const { setAllApplicant } = applicationSlice.actions;
export default applicationSlice.reducer;
