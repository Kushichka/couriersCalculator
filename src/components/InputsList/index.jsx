import {
    Checkbox,
    Divider,
    FormControlLabel,
    InputAdornment,
    OutlinedInput,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PropTypes from "prop-types";

import { inputHandler } from "../../utils/inputHandler";

export const InputsList = ({ dimensions, setDimension }) => {
    const { weight, dimensionA, dimensionB, dimensionC } = dimensions;

    const inputsData = [
        { name: "weight", placeholder: "Waga", unit: "kg", value: weight },
        { name: "dimensionA", placeholder: "Długość", unit: "cm", value: dimensionA },
        { name: "dimensionB", placeholder: "Szerokość", unit: "cm", value: dimensionB },
        { name: "dimensionC", placeholder: "Wysokość", unit: "cm", value: dimensionC },
    ];

    const inputs = inputsData.map(({ placeholder, name, unit, value }) => (
        <Grid key={name}>
            <OutlinedInput
                placeholder={placeholder}
                onChange={(event) => inputHandler(name, event.target.value, setDimension)}
                value={value}
                endAdornment={<InputAdornment position="end">{unit}</InputAdornment>}
                sx={{ fontSize: "1.1rem", width: "150px" }}
                size="small"
            />
        </Grid>
    ));

    return (
        <>
            <Grid
                container
                spacing={{ xs: 1, sm: 2 }}
                direction="column"
            >
                {inputs}
            </Grid>

            <Divider
                sx={{ borderColor: "#59595a" }}
                flexItem
            />

            <FormControlLabel
                control={<Checkbox />}
                label="Pobranie"
            />
        </>
    );
};

InputsList.propTypes = {
    dimensions: PropTypes.object.isRequired,
    setDimension: PropTypes.func.isRequired,
};
