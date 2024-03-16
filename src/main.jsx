import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { inject } from "@vercel/analytics";

import { theme } from "./theme.js";
import App from "./App.jsx";
import { ContextProvider } from "./Context.jsx";

import "./index.css";

inject();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <ContextProvider>
                <App />
            </ContextProvider>
        </ThemeProvider>
    </React.StrictMode>
);
