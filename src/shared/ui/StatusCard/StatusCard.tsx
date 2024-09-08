import cls from "./StatusCard.module.scss";
import { ReactNode } from "react";

export enum Statuses {
  success = "success",
  error = "error",
  info = "info",
}

interface ReportCardProps {
  children?: ReactNode;
  status: Statuses;
}

export const StatusCard = (props: ReportCardProps) => {
  const { children, status } = props;

  return (
    <div
      className={
        status === Statuses.success
          ? cls.successMessage
          : status === Statuses.error
          ? cls.errorMessage
          : cls.infoMessage
      }
    >
      {children}
    </div>
  );
};
