import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    loading: null,
    allJobs: [],
  },
  reducers: {
    setAllJob: (state, action) => {
      state.allJobs = action.payload;
    },
  },
});

export const { setAllJob } = jobSlice.actions;
export default jobSlice.reducer;
