import { Typography } from "@mui/material";

import cls from "./ReportCard.module.scss";
import { ValidationReportItem } from "../../../entities/ValidationReport";

interface ReportCardProps {
  reportLine: ValidationReportItem;
}

export const ReportCard = (props: ReportCardProps) => {
  const { reportLine } = props;

  const severityColor = {
    Violation: { borderColor: "#ab231a", backgroundColor: "#fce1e1" },
    Warning: { borderColor: "#edb528", backgroundColor: "#ffedbf" },
    Info: { borderColor: "#4464AD", backgroundColor: "#c7dbff" },
  }[reportLine.resultSeverity as string] || {
    borderColor: "#ab231a",
    backgroundColor: "#fce1e1",
  };

  return (
    <div
      className={cls.reportCard}
      style={{
        borderColor: severityColor.borderColor,
        background: severityColor.backgroundColor,
      }}
    >
      <div className={cls.textLine}>
        <Typography fontSize={14} fontWeight={700}>
          Focus Node: &nbsp;
        </Typography>
        <Typography fontSize={14}>{reportLine.focusNode}</Typography>
      </div>

      <div className={cls.textLine}>
        <Typography fontSize={14} fontWeight={700}>
          Path: &nbsp;
        </Typography>
        <Typography fontSize={14}>{reportLine.resultPath}</Typography>
      </div>

      <div className={cls.textLine}>
        <Typography fontSize={14} fontWeight={700}>
          Message: &nbsp;
        </Typography>
        <Typography fontSize={14}>{reportLine.resultMessage}</Typography>
      </div>

      {reportLine.value && (
        <div className={cls.textLine}>
          <Typography fontSize={14} fontWeight={700}>
            Value: &nbsp;
          </Typography>
          <Typography fontSize={14}>{reportLine.value}</Typography>
        </div>
      )}

      <div className={cls.textLine}>
        <Typography fontSize={14} fontWeight={700}>
          Severity: &nbsp;
        </Typography>
        <Typography
          fontSize={14}
          fontWeight={700}
          style={{ color: severityColor.borderColor }}
        >
          {reportLine.resultSeverity}
        </Typography>
      </div>
    </div>
  );
};
