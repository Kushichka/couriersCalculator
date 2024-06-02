import React from "react";
import { Stack } from "@mui/material";
import { FormCard } from "../../components/FormCard";
import { ResultTable } from "../../components/ResultTable";

export const Home = () => {
    return (
        <Stack
            direction="column"
            justifyContent="center"
            useFlexGap
            spacing={{ sx: 0, md: 4 }}
        >
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 2, sm: 5 }}
                sx={{ pb: { xs: 2, sm: 5, md: 5 } }}
            >
                <FormCard />
                <ResultTable />
            </Stack>
        </Stack>
    );
};
