import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ValidationReportItem,
  ValidationReportSchema,
} from "../types/validationReport";

const initialState: ValidationReportSchema = {};

export const validationReportSlice = createSlice({
  name: "validationReport",
  initialState,
  reducers: {
    setValidationReportData: (
      state,
      action: PayloadAction<Array<ValidationReportItem> | null>
    ) => {
      state.report = action.payload;
    },
  },
});

export const { actions: validationReportActions } = validationReportSlice;
export const { reducer: validationReportReducer } = validationReportSlice;
