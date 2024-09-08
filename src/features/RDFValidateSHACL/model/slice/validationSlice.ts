import { createSlice } from "@reduxjs/toolkit";
import type { ValidationSchema } from "../types/validationSchema";
import { validationRDFtoSHACL } from "../services/validationRDFtoSHACL/validationRDFtoSHACL";

const initialState: ValidationSchema = {
  isLoading: false,
  rdfData: "",
  shaclData: "",
};

export const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    // for required reducers only
  },
  extraReducers: (builder) => {
    builder
      .addCase(validationRDFtoSHACL.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(validationRDFtoSHACL.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
      })
      .addCase(validationRDFtoSHACL.rejected, (state, action) => {
        state.isLoading = false;
        state.error = String(action.payload);
      });
  },
});

export const { actions: validationActions } = validationSlice;
export const { reducer: validationReducer } = validationSlice;
