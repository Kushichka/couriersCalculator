import { useEffect, useState } from "react";
import { InputAdornment, OutlinedInput, Paper, Stack, Typography } from "@mui/material";
import PropTypes from 'prop-types';

import { data } from '../../API/db';
import { inputHandler } from "../../utils/inputHandler";

const inputStyles = {
    size: 'large',
    width: { width: '12rem' }
};

export const FormCard = ({ changeSuitableCouriers }) => {
    const [weight, setWeight] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    const inputsData = [
        { unit: 'kg', minValue: 0, size: inputStyles.size, prefix: '', placeholder: 'Waga', onChange: (event) => inputHandler(event.target.value, setWeight), value: weight, style: inputStyles.width },
        { unit: 'cm', minValue: 0, size: inputStyles.size, prefix: 'A', placeholder: 'Długość', onChange: (event) => inputHandler(event.target.value, setLength), value: length, style: inputStyles.width },
        { unit: 'cm', minValue: 0, size: inputStyles.size, prefix: 'B', placeholder: 'Szerokość', onChange: (event) => inputHandler(event.target.value, setWidth), value: width, style: inputStyles.width },
        { unit: 'cm', minValue: 0, size: inputStyles.size, prefix: 'C', placeholder: 'Wysokość', onChange: (event) => inputHandler(event.target.value, setHeight), value: height, style: inputStyles.width }
    ];

    const inputs = inputsData.map(item => (
        <OutlinedInput
            key={item.placeholder}
            placeholder={item.placeholder}
            variant="outlined" 
            onChange={item.onChange}
            value={item.value}
            endAdornment={<InputAdornment position="end">{item.unit}</InputAdornment>}
            sx={{ fontSize: '1.2rem', width: '150px' }}
            fullWidth
            size="small"
        />
    ));

    useEffect(() => {
        const calculateSuitableCouriers = () => {
            const suitable = data.filter(courier => {
                return courier.requirements.every(req => {
                    return req.formula({w: weight, a: length, b: width, c: height});
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
