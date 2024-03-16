import { useCallback, useEffect, useState } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

import { calculateSuitableCouriers } from "../../utils/calculateSuitableCouriers";
import { InputsList } from "../InputsList";

export const FormCard = ({ changeSuitableCouriers, payment, paymentHandler }) => {
    const [dimensions, setDimensions] = useState({
        weight: "",
        dimensionA: "",
        dimensionB: "",
        dimensionC: "",
    });

    const { weight, dimensionA, dimensionB, dimensionC } = dimensions;

    const setDimension = useCallback((name, value) => {
        setDimensions((prevDimensions) => ({
            ...prevDimensions,
            [name]: value,
        }));
    }, []);

    useEffect(() => {
        if (weight && dimensionA && dimensionB && dimensionC) {
            calculateSuitableCouriers(
                weight,
                dimensionA,
                dimensionB,
                dimensionC,
                changeSuitableCouriers
            );
        } else changeSuitableCouriers([]);
    }, [weight, dimensionA, dimensionB, dimensionC, changeSuitableCouriers]);

    return (
        <Paper
            elevation={3}
            sx={{ p: 2, backgroundColor: "secondary.main" }}
        >
            <Stack
                direction={{ sm: "row", md: "column" }}
                flexWrap={{ xs: "wrap", md: "nowrap" }}
                alignItems="center"
                justifyContent="center"
                gap={2}
            >
                <Box
                    borderBottom="1px solid rgba(224, 224, 224, 1)"
                    paddingBottom={2}
                    borderColor="#59595a"
                    width="100%"
                >
                    <Typography
                        fontWeight={500}
                        fontSize="1.2rem"
                        textAlign="center"
                        color="#343434"
                    >
                        Wymiary
                    </Typography>
                </Box>

                <InputsList
                    dimensions={dimensions}
                    setDimension={setDimension}
                    payment={payment}
                    paymentHandler={paymentHandler}
                />
            </Stack>
        </Paper>
    );
};

FormCard.propTypes = {
    changeSuitableCouriers: PropTypes.func.isRequired,
    payment: PropTypes.bool.isRequired,
    paymentHandler: PropTypes.func.isRequired,
};
