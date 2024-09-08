import { StateSchema } from "../../../../../app/providers/StoreProvider";

export const getValidationLoading = (state: StateSchema) =>
  state?.validationForm?.isLoading || false;
