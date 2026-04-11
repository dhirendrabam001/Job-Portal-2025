import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    allCompanyJob: [],
    singleCompany: null,
  },
  reducers: {
    setAllCompanyJobs: (state, action) => {
      state.allCompanyJob = action.payload;
    },
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
  },
});

export const { setAllCompanyJobs, setSingleCompany, setMessage, clearMessage } =
  companySlice.actions;
export default companySlice.reducer;
