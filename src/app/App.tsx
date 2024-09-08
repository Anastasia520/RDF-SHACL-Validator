import { Suspense } from "react";
import { MainPage } from "../pages/MainPage";
import { Header } from "../widgets/Header";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Suspense fallback="">
        <Header />
        <div className="content-page">
          <div className="page-wrapper">
            <MainPage />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
