import React from "react";
import { Box } from "@mui/material";

export const Divider = () => {
    return (
        <Box
            borderTop="1px solid #59595a"
            width="calc(100% + 2rem)"
            sx={{ margin: { xs: "0 -1rem", md: "-5px 0" } }}
        />
    );
};
