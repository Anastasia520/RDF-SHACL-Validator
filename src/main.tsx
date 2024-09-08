import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app/App.tsx";
import "./index.css";

import { ErrorBoundary } from "./app/providers/ErrorBoundary";
import { StoreProvider } from "./app/providers/StoreProvider/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StoreProvider>
  </StrictMode>
);
