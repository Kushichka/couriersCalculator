import React from "react";
import { Container, Stack } from "@mui/material";

import { FormCard } from "./components/FormCard";
import { ResultTable } from "./components/ResultTable";
import { Header } from "./components/Header";

export const App = () => {
    return (
        <>
            <Header />
            <Container>
                <Stack>
                    {/* Place for <AlertMessage /> */}

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
                </Stack>
            </Container>
        </>
    );
};
