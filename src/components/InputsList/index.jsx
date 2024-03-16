import { useContext } from "react";
import { Checkbox, Divider, FormControlLabel } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { InputsItem } from "../inputsItem";
import { Context } from "../../Context";

export const InputsList = () => {
    const { payment, paymentHandler } = useContext(Context);

    return (
        <>
            <Grid
                container
                spacing={{ xs: 1, sm: 2 }}
                direction="column"
            >
                <InputsItem />
            </Grid>

            <Divider
                sx={{ borderColor: "#59595a" }}
                flexItem
            />

            <FormControlLabel
                control={<Checkbox />}
                label="Pobranie"
                checked={payment}
                onChange={paymentHandler}
            />
        </>
    );
};
