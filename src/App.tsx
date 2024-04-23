import React from "react";
import { Container, Stack } from "@mui/material";

import { FormCard } from "./components/FormCard";
import { ResultTable } from "./components/ResultTable";
import { Header } from "./components/Header";

export const App = () => {
    const pathname = window.location.pathname;

    return (
        <>
            {pathname !== "/schenker-calculator" ? (
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
            ) : (
                <Stack
                    justifyContent="center"
                    sx={{
                        height: "100vh",
                        width: "100%",
                    }}
                >
                    <iframe
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSaFDxrF-SwtCagMdzy6hcGEJ5XukqRIbmgeyz8Rt4RYpq-1ohcoESwVJxxsOvhPF46e1evTUoxemDe/pubhtml?widget=true&amp;headers=false"
                        width="100%"
                        height="100%"
                    />
                </Stack>
            )}
        </>
    );
};
