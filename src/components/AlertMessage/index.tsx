import React from "react";
import { Box } from "@mui/material";

export const AlertMessage = ({ message }: { message: string }) => {
    return (
        <Box
            sx={{
                bgcolor: "error.main",
                color: "#EDF2F4",
                padding: "1rem",
                mb: "1rem",
                fontSize: "1.2rem",
            }}
        >
            <p>{message}</p>
        </Box>
    );
};
