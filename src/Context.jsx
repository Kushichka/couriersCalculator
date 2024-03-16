import { createContext, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { calculateSuitableCouriers } from "./utils/calculateSuitableCouriers";

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
    const [suitableCouriers, setSuitableCouriers] = useState([]);
    const [payment, setPayment] = useState(false); // is on delivery payment

    const [dimensions, setDimensions] = useState({
        weight: "",
        dimensionA: "",
        dimensionB: "",
        dimensionC: "",
    });
    const { weight, dimensionA, dimensionB, dimensionC } = dimensions;

    const paymentHandler = useCallback(() => {
        setPayment((prevOnDelivery) => !prevOnDelivery);
    }, []);

    const changeSuitableCouriers = useCallback((suitable) => {
        setSuitableCouriers(suitable);
    }, []);

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
        <Context.Provider
            value={{
                suitableCouriers,
                payment,
                paymentHandler,
                dimensions,
                setDimension,
            }}
        >
            {children}
        </Context.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
