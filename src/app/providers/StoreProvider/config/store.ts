import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { createReducerManager } from "./reducerManager";
import { validationReportReducer } from "../../../../entities/ValidationReport";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    // required reducers only
    validationReport: validationReportReducer,
    ...asyncReducers,
  };

  const reducerManager = createReducerManager(rootReducer);
  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: true,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
