import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    loading: null,
    allJobs: [],
    singleJob: null,
  },
  reducers: {
    setAllJob: (state, action) => {
      state.allJobs = action.payload;
    },
    getSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
  },
});

export const { setAllJob, getSingleJob } = jobSlice.actions;
export default jobSlice.reducer;
