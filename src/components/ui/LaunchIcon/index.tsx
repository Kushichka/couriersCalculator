import React from "react";
import Launch from "@mui/icons-material/Launch";

export const LaunchIcon = ({ link }: { link: string }) => {
    return (
        <Launch
            fontSize="small"
            onClick={link ? () => window.open(link) : undefined}
            sx={{ cursor: "pointer" }}
        />
    );
};
