import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Base64 } from "js-base64";

import {
  validationReportActions,
  ValidationReportItem,
} from "../../../../../entities/ValidationReport";
import { JSONLDtoJSONReport } from "../../../lib/JSONLDtoJSONReport/JSONLDtoJSONReport";
import { turtleToJsonLD } from "../../../lib/turtleToJsonLD/turtleToJsonLD";

interface validationRDFtoSHACLProps {
  rdfData: string;
  shaclData: string;
}

const URL = `${import.meta.env.VITE_BACK_URL}`

export const validationRDFtoSHACL = createAsyncThunk<
  Array<ValidationReportItem>,
  validationRDFtoSHACLProps
>("validation/validationRDFtoSHACL", async (validationData, thunkAPI) => {
  const formData = new FormData();

  formData.append("datafile", Base64.encode(validationData.rdfData));
  formData.append("shapesfile", Base64.encode(validationData.shaclData));

  try {
    thunkAPI.dispatch(
        validationReportActions.setValidationReportData(null)
      );

    const response = await axios(`${URL}/validate`, {
      method: "post",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: false,
    });

    if (!response.data) {
      throw new Error();
    }

    if (response.data?.output.includes("ERROR")) {
      throw new Error(response.data?.output);
    }

    const jsonldData = await turtleToJsonLD(response.data?.output);
    const validationResults = await JSONLDtoJSONReport(jsonldData);

    thunkAPI.dispatch(
      validationReportActions.setValidationReportData(validationResults)
    );
    return validationResults;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
