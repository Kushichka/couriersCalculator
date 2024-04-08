import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";

export const MessageButton = () => {
    const clickHandler = () => {};

    return (
        <IconButton onClick={clickHandler}>
            <SmsFailedIcon color="error" />
        </IconButton>
    );
};
