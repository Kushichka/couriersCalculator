import React, { useContext } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { InputsItem } from "../InputsItem";
import { Context } from "../../../Context";
import { TContext } from "../../../types/TContext";
import { Divider } from "../../ui/Divider";

export const InputsList = () => {
    const { payment, paymentHandler } = useContext(Context) as TContext;

    return (
        <>
            <Grid
                container
                spacing={{ xs: 1, sm: 2 }}
                direction="column"
            >
                <InputsItem />
            </Grid>

            <Divider />

            <FormControlLabel
                control={<Checkbox />}
                label="Pobranie"
                checked={payment}
                onChange={paymentHandler}
            />
        </>
    );
};
