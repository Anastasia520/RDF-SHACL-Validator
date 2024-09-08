import { StateSchema } from "../../../../../app/providers/StoreProvider";

export const getValidationReportData = (state: StateSchema) =>
  state.validationReport?.report || null;
