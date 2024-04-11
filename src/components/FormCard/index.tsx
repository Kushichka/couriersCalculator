import React from "react";
import { Paper, Stack, Typography } from "@mui/material";

import { InputsList } from "./InputsList";
import { Divider } from "../ui/Divider";

export const FormCard = () => {
    return (
        <Paper
            elevation={3}
            sx={{ p: 2, backgroundColor: "secondary.main" }}
        >
            <Stack
                direction={{ sm: "row", md: "column" }}
                flexWrap={{ xs: "wrap", md: "nowrap" }}
                alignItems="center"
                justifyContent="center"
                gap={2}
            >
                <Typography
                    fontWeight={500}
                    fontSize="1.2rem"
                    textAlign="center"
                    color="#343434"
                >
                    Wymiary
                </Typography>

                <Divider />

                <InputsList />
            </Stack>
        </Paper>
    );
};
