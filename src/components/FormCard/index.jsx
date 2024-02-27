import { useCallback, useEffect, useState } from "react";
import { InputAdornment, OutlinedInput, Paper, Stack, Typography } from "@mui/material";
import PropTypes from 'prop-types';

import { data } from '../../API/db';
import { inputHandler } from "../../utils/inputHandler";

export const FormCard = ({ changeSuitableCouriers }) => {

    const [dimensions, setDimensions] = useState({
        weight: '',
        length: '',
        width: '',
        height: ''
    });

    const { weight, length, width, height } = dimensions;

    const setDimension = useCallback((name, value) => {
        setDimensions(prevDimensions => ({
            ...prevDimensions,
            [name]: value
        }));
    }, []);

    const inputsData = [
        { name: 'weight', placeholder: 'Waga', unit: 'kg', value: weight },
        { name: 'length', placeholder: 'Długość', unit: 'cm', value: length },
        { name: 'width', placeholder: 'Szerokość', unit: 'cm', value: width },
        { name: 'height', placeholder: 'Wysokość', unit: 'cm', value: height }
    ];

    const inputs = inputsData.map(({placeholder, name, unit, value}) => (
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

    useEffect(() => {
        const calculateSuitableCouriers = () => {
            const suitable = data.filter(courier => {
                return courier.requirements.every(req => {
                    return req.formula({
                        w: parseFloat(weight), 
                        a: parseFloat(length), 
                        b: parseFloat(width), 
                        c: parseFloat(height)
                    });
                });
            });

            if(weight && length && width && height) {
                changeSuitableCouriers(suitable);
            }
        };

        calculateSuitableCouriers();
    }, [weight, length, width, height, changeSuitableCouriers]);

    return (
        <Paper variant="outlined" sx={{p: 2}}>
            <Typography 
                fontWeight={500}
                textAlign='center'  
                paddingBottom={2}  
            >
                Wymiary
            </Typography>

            <Stack
                direction={{sm: 'row', md: 'column'}}
                flexWrap={{sm: 'wrap', md: 'nowrap'}}
                alignItems='center'
                justifyContent='center'
                gap={2}
            >
                {inputs}
            </Stack>
        </Paper>
    )
};

FormCard.propTypes = {
    changeSuitableCouriers: PropTypes.func.isRequired
};
