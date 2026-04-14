import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    loading: null,
    allJobs: [],
    adminJobs: [],
    singleJob: null,
    searchJobByText: "",
    getAppliedJob: [],
  },
  reducers: {
    setAllJob: (state, action) => {
      state.allJobs = action.payload;
    },
    setAdminJobs: (state, action) => {
      state.adminJobs = action.payload;
    },
    getSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setSearchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
    setGetAppliedJob: (state, action) => {
      state.getAppliedJob = action.payload;
    },
  },
});

export const {
  setAllJob,
  setAdminJobs,
  getSingleJob,
  setSearchJobByText,
  setGetAppliedJob,
} = jobSlice.actions;
export default jobSlice.reducer;
