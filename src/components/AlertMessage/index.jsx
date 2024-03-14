import { Box } from "@mui/material";
import PropTypes from "prop-types";

export const AlertMessage = ({ message }) => {
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
            <p>
                {message}
            </p>
        </Box>
    );
};

AlertMessage.propTypes = {
    message: PropTypes.string.isRequired
}
