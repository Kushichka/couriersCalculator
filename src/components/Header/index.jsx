import { Box, Container, Typography } from "@mui/material";

export const Header = () => {
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
                <Typography variant="h5">Paczkulator</Typography>
            </Container>
        </Box>
    );
};
