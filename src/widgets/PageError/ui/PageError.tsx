import { Typography, Button } from "@mui/material";
import cls from "./PageError.module.scss";

export const PageError = () => {
  const handleReloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={cls.PageError}>
      <Typography>Unxpected error happened</Typography>
      <Button variant="contained" onClick={handleReloadPage}>
        Reload page
      </Button>
    </div>
  );
};
