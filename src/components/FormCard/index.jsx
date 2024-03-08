import { useCallback, useEffect, useState } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import PropTypes from 'prop-types';

import { calculateSuitableCouriers } from "../../utils/calculateSuitableCouriers";
import { InputsList } from "../InputsList/InputsList";

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

    useEffect(() => {
        calculateSuitableCouriers(weight, length, width, height, changeSuitableCouriers);
    }, [weight, length, width, height, changeSuitableCouriers]);

    return (
        <Paper variant="outlined" sx={{ p: 2}}>
            <Typography
                fontWeight={500}
                textAlign='center'
                paddingBottom={2}
            >
                Wymiary
            </Typography>

            <Stack
                direction={{ sm: 'row', md: 'column' }}
                flexWrap={{ sm: 'wrap', md: 'nowrap' }}
                alignItems='center'
                justifyContent='center'
                gap={2}
            >
                <InputsList 
                    weight={weight} 
                    length={length} 
                    width={width} 
                    height={height} 
                    setDimension={setDimension} 
                />
            </Stack>
        </Paper>
    )
};

FormCard.propTypes = {
    changeSuitableCouriers: PropTypes.func.isRequired
};
