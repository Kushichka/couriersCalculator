import React, { memo } from "react";
import { Box, Container } from "@mui/material";

import { Logo } from "../ui/Logo";
import { Link } from "react-router-dom";

export const Header = memo(() => {
    return (
        <Box
            color="secondary.main"
            sx={{
                backgroundColor: "primary.main",
                py: 1.5,
                mb: { xs: 2, sm: 5, md: 5 },
            }}
        >
            <Container>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignContent="center"
                >
                    <Link to="/">
                        <Logo />
                    </Link>
                    <Box
                        display="flex"
                        alignItems="center"
                    >
                        <Link to="info">Regulamin</Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
});
