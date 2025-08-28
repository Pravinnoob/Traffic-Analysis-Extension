import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import MyContext from "./context/apiContext.jsx";
import { BrowserRouter } from "react-router-dom";

// Mount React App
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Global Context Provider (API Data) */}
    <MyContext>
      {/* React Router for Navigation */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyContext>
  </StrictMode>
);
