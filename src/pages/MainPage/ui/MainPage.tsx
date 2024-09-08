import cls from "./MainPage.module.scss";

import { RDFValidateSHACLForm } from "../../../features/RDFValidateSHACL/ui/RDFValidateSHACLForm/RDFValidateSHACLForm";

const MainPage = () => {
  return (
    <div className={cls.mainPage}>
      <RDFValidateSHACLForm />
    </div>
  );
};

export default MainPage;
