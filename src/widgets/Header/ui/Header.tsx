import { Typography } from "@mui/material";
import cls from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={cls.header}>
      <Typography fontSize={32}>RDF SHACL Validator</Typography>
    </div>
  );
};
