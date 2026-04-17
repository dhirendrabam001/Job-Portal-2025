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

    searchQueryText: {
      title: "",
      location: "",
    },
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
    setSearchQueryText: (state, action) => {
      state.searchQueryText = action.payload;
    },
  },
});

export const {
  setAllJob,
  setAdminJobs,
  getSingleJob,
  setSearchJobByText,
  setGetAppliedJob,
  setSearchQueryText,
} = jobSlice.actions;
export default jobSlice.reducer;
