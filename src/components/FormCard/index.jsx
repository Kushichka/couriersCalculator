import { useCallback, useEffect, useState } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

import { calculateSuitableCouriers } from "../../utils/calculateSuitableCouriers";
import { InputsList } from "../InputsList/InputsList";

export const FormCard = ({ changeSuitableCouriers }) => {
    const [dimensions, setDimensions] = useState({
        weight: "",
        length: "",
        width: "",
        height: "",
    });

    const { weight, length, width, height } = dimensions;

    const setDimension = useCallback((name, value) => {
        setDimensions((prevDimensions) => ({
            ...prevDimensions,
            [name]: value,
        }));
    }, []);

    useEffect(() => {
        calculateSuitableCouriers(weight, length, width, height, changeSuitableCouriers);
    }, [weight, length, width, height, changeSuitableCouriers]);

    return (
        <Paper  elevation={3} sx={{ p: 2}}>
            <Stack
                direction={{ sm: "row", md: "column" }}
                flexWrap={{ xs: "wrap", md: "nowrap" }}
                alignItems="center"
                justifyContent="center"
                gap={2}
            >
                <Box borderBottom='1px solid rgba(224, 224, 224, 1)' paddingBottom={2} width='100%'>
                    <Typography
                        fontWeight={500}
                        fontSize='0.875rem'
                        textAlign='center'
                    >
                        Wymiary
                    </Typography>
                </Box>

                <InputsList
                    weight={weight}
                    length={length}
                    width={width}
                    height={height}
                    setDimension={setDimension}
                />
            </Stack>
        </Paper>
    );
};

FormCard.propTypes = {
    changeSuitableCouriers: PropTypes.func.isRequired,
};
