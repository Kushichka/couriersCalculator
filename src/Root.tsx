import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import { Header } from "./components/Header";

export const Root = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    );
};
