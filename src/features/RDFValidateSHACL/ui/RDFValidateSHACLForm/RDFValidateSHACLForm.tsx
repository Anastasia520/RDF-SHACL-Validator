import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Typography } from "@mui/material";

import cls from "./RDFValidateSHACLForm.module.scss";
import { FileInputForm } from "../FileInputForm/FileInputForm";
import { ReportForm } from "../ReportForm/ReportForm";
import {
  StatusCard,
  Statuses,
} from "../../../../shared/ui/StatusCard/StatusCard";

import {
  DynamicModuleLoader,
  ReducersList,
} from "../../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { validationRDFtoSHACL } from "../../model/services/validationRDFtoSHACL/validationRDFtoSHACL";
import { getValidationError } from "../../model/selectors/getValidationError/getValidationError";
import { getValidationLoading } from "../../model/selectors/getValidationLoading/getValidationLoading";
import { getValidationReportData } from "../../../../entities/ValidationReport";
import { validationReducer } from "../../model/slice/validationSlice";


const initialReducers: ReducersList = {
  validationForm: validationReducer,
};

export const RDFValidateSHACLForm = () => {
  const dispatch = useDispatch();

  const [rdfData, setRdfData] = useState<string>("");
  const [shaclData, setShaclData] = useState<string>("");

  const error = useSelector(getValidationError);
  const isLoading = useSelector(getValidationLoading);

  const report = useSelector(getValidationReportData);

  const handleSHACLUpload = useCallback((data: string) => {
    setShaclData(data);
  }, []);

  const handleRDFUpload = useCallback((data: string) => {
    setRdfData(data);
  }, []);

  const handleValidation = useCallback(() => {
    dispatch(validationRDFtoSHACL({ rdfData, shaclData }));
  }, [dispatch, rdfData, shaclData]);

  useEffect(() => {
    if (error) {
      document
        .getElementById("error-validation")
        ?.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [error]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={cls.RDFValidateSHACLFormContainer}>
        <div className={cls.RDFValidateSHACLForm}>
          <div className={cls.container}>
            <FileInputForm
              label="Choose the RDF file or type it manually. Validator supports .ttl file format only."
              handleUpload={handleRDFUpload}
              value={rdfData}
            />
          </div>

          <div className={cls.container}>
            <FileInputForm
              label="Choose the SHACL shape or type it manually. Validator supports .ttl file format only."
              handleUpload={handleSHACLUpload}
              value={shaclData}
            />
          </div>
        </div>

        <div className={cls.validateBtnContainer}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleValidation}
            disabled={!rdfData || !shaclData || isLoading}
          >
            {isLoading ? (
              <Typography>Loading...</Typography>
            ) : (
              <Typography>Validate</Typography>
            )}
          </Button>
        </div>

        {error && (
          <div id="error-validation">
            <StatusCard status={Statuses.error}>
              <Typography>{error}</Typography>
            </StatusCard>
          </div>
        )}

        {report && <ReportForm report={report} />}
      </div>
    </DynamicModuleLoader>
  );
};
