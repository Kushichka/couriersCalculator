import React, { memo } from "react";
import { Box, Container } from "@mui/material";

import { Logo } from "../ui/Logo";
// import { MessageButton } from "../ui/MessageButton";

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
                >
                    <Logo />
                    {/* <MessageButton /> */}
                </Box>
            </Container>
        </Box>
    );
});
