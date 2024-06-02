import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { inject } from "@vercel/analytics";

import { theme } from "./theme";
import { ContextProvider } from "./Context";
import { router } from "./router";

import "./index.css";

inject();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <ContextProvider>
                <RouterProvider router={router} />
            </ContextProvider>
        </ThemeProvider>
    </React.StrictMode>
);
