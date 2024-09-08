import { StateSchema } from "../../../../../app/providers/StoreProvider";

export const getValidationError = (state: StateSchema) =>
  state?.validationForm?.error || null;
