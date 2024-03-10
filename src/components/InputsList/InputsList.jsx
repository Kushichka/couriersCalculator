import { Checkbox, Divider, FormControlLabel, InputAdornment, OutlinedInput } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PropTypes from "prop-types";

import { inputHandler } from "../../utils/inputHandler";

export const InputsList = ({ weight, length, width, height, setDimension }) => {
    const inputsData = [
        { name: "weight", placeholder: "Waga", unit: "kg", value: weight },
        { name: "length", placeholder: "Długość", unit: "cm", value: length },
        { name: "width", placeholder: "Szerokość", unit: "cm", value: width },
        { name: "height", placeholder: "Wysokość", unit: "cm", value: height },
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
                direction='column'
                >
                {inputs}
            </Grid>

            <Divider flexItem />

            <FormControlLabel control={<Checkbox />} label="Pobranie" />
        </>
    );
};

InputsList.propTypes = {
    weight: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    setDimension: PropTypes.func.isRequired,
};
