import { Checkbox, Divider, FormControlLabel } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PropTypes from "prop-types";

import { InputsItem } from "../inputsItem";

export const InputsList = ({ dimensions, setDimension, payment, paymentHandler }) => {
    return (
        <>
            <Grid
                container
                spacing={{ xs: 1, sm: 2 }}
                direction="column"
            >
                <InputsItem
                    dimensions={dimensions}
                    setDimension={setDimension}
                />
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

InputsList.propTypes = {
    dimensions: PropTypes.object.isRequired,
    setDimension: PropTypes.func.isRequired,
    payment: PropTypes.bool.isRequired,
    paymentHandler: PropTypes.func.isRequired,
};
