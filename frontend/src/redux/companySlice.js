import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    company: [],
    singleCompany: null,
    searchCompanyText: "",
  },
  reducers: {
    setCompany: (state, action) => {
      state.company = action.payload;
    },

    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setSearchCompanyText: (state, action) => {
      state.searchCompanyText = action.payload;
    },
  },
});

export const { setCompany, setSingleCompany, setSearchCompanyText } =
  companySlice.actions;
export default companySlice.reducer;
