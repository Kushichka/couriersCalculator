import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";

import { InputsList } from "./InputsList";

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
                <Box
                    borderBottom="1px solid rgba(224, 224, 224, 1)"
                    paddingBottom={2}
                    borderColor="#59595a"
                    width="100%"
                >
                    <Typography
                        fontWeight={500}
                        fontSize="1.2rem"
                        textAlign="center"
                        color="#343434"
                    >
                        Wymiary
                    </Typography>
                </Box>

                <InputsList />
            </Stack>
        </Paper>
    );
};
