import { useEffect } from "react";

import { Typography } from "@mui/material";

import { ValidationReportItem } from "../../../../entities/ValidationReport";
import { ReportCard } from "../../../../shared/ui/ReportCard/ReportCard";

import {
  StatusCard,
  Statuses,
} from "../../../../shared/ui/StatusCard/StatusCard";

interface ReportFormProps {
  report: Array<ValidationReportItem>;
}

export const ReportForm = (props: ReportFormProps) => {
  const { report } = props;

  useEffect(() => {
    if (report) {
      document
        .getElementById("report")
        ?.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [report]);

  return (
    <>
      <Typography id="report" fontSize={24}>
        REPORT
      </Typography>

      <div>
        {report?.length ? (
          report?.map((line, index) => (
            <ReportCard key={index} reportLine={line} />
          ))
        ) : (
          <StatusCard status={Statuses.success}>
            <Typography> Validation is successfully proceed!</Typography>
          </StatusCard>
        )}
      </div>
    </>
  );
};
