import { InputAdornment, OutlinedInput } from "@mui/material";
import PropTypes from 'prop-types';

import { inputHandler } from "../../utils/inputHandler";

export const InputsList = ({weight, length, width, height, setDimension}) => {

    const inputsData = [
        { name: 'weight', placeholder: 'Waga', unit: 'kg', value: weight },
        { name: 'length', placeholder: 'Długość', unit: 'cm', value: length },
        { name: 'width', placeholder: 'Szerokość', unit: 'cm', value: width },
        { name: 'height', placeholder: 'Wysokość', unit: 'cm', value: height }
    ];

    const inputs = inputsData.map(({ placeholder, name, unit, value }) => (
        <OutlinedInput
            key={name}
            placeholder={placeholder}
            onChange={(event) => inputHandler(name, event.target.value, setDimension)}
            value={value}
            endAdornment={<InputAdornment position="end">{unit}</InputAdornment>}
            sx={{ fontSize: '1.2rem', width: '150px' }}
            fullWidth
            size="small"
        />
    ));

    return (
        <>
            {inputs}
        </>
    )
};

InputsList.propTypes = {
    weight: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    setDimension: PropTypes.func.isRequired
};


