import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    singleJob: {
      application: [],
      createdAt: null,
    },
    isApplied: false,
  },

  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setIsApplied: (state, action) => {
      state.isApplied = action.payload;
    },
  },
});

export const { setAllJobs, setSingleJob, setIsApplied } = jobSlice.actions;
export default jobSlice.reducer;
