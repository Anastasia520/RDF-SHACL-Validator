export interface ValidationReportItem {
  focusNode: string;
  resultMessage?: string;
  resultPath?: string;
  resultSeverity?: string;
  value?: string;
}

export interface ValidationReportSchema {
  report?: Array<ValidationReportItem> | null;
}
