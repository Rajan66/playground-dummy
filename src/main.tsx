import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClocaleProvider } from "@clocale/react";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClocaleProvider
      type="client"
      locale="en"
      baseUrl={import.meta.env.VITE_CLOCALE_URL}
      isDev={import.meta.env.DEV}
    >
      <App />
    </ClocaleProvider>
  </StrictMode>,
);
