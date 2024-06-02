import React from "react";
import { Container, Paper, Stack } from "@mui/material";

import { GlsInfo } from "../../components/CouriersInfo/glsInfo";
import { DpdInfo } from "../../components/CouriersInfo/dpdInfo";
import { PocztexInfo } from "../../components/CouriersInfo/pocztexInfo";

export const CouriersInfo = () => {
    return (
        <Container
            maxWidth="md"
            sx={{ padding: { xs: 0, sm: "2rem" } }}
        >
            <Paper
                elevation={3}
                sx={{ p: 2, mb: "2rem" }}
            >
                <Stack
                    direction="column"
                    gap={2}
                    divider={<hr />}
                >
                    <GlsInfo />
                    <DpdInfo />
                    <PocztexInfo />
                </Stack>
            </Paper>
        </Container>
    );
};
