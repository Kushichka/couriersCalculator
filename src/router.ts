import { createBrowserRouter } from "react-router-dom";

import { Root } from "./Root";
import { CouriersInfo } from "./pages/CouriersInfo";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: "/",
                Component: Home,
            },
            {
                path: "info",
                Component: CouriersInfo,
            },
        ],
    },
]);
