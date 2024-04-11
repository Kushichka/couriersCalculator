import { createTheme } from "@mui/material/styles";

const colors = {
    primary: "#2B2D42",
    secondary: "#EDF2F4",
    error: "#D90429",
};

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 630,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary,
        },
        error: {
            main: colors.error,
        },
    },
});
