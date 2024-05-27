import React, { createContext, useCallback, useEffect, useState } from "react";

import { calculateSuitableCouriers } from "./utils/calculateSuitableCouriers";
import { TContext } from "./types/TContext";
import { ISuitableCourier } from "./types/ICourier";

export const Context = createContext<TContext | null>(null);

export const ContextProvider = ({ children }) => {
    const [suitableCouriers, setSuitableCouriers] = useState<ISuitableCourier[]>([]);
    const [payment, setPayment] = useState(false); // is on delivery payment
    const [alertMessage, setAlertMessage] = useState("");

    const [dimensions, setDimensions] = useState({
        weight: "",
        sideA: "",
        sideB: "",
        sideC: "",
    });
    const { weight, sideA, sideB, sideC } = dimensions;

    const paymentHandler = useCallback(() => {
        setPayment((prevOnDelivery) => !prevOnDelivery);
    }, []);

    const alertHandler = useCallback((message: string) => {
        setAlertMessage(message);
    }, []);

    const changeSuitableCouriers = useCallback((suitable: ISuitableCourier[]) => {
        setSuitableCouriers(suitable);
    }, []);

    const setDimension = useCallback((name: string, value: string) => {
        setDimensions((prevDimensions) => ({
            ...prevDimensions,
            [name]: value,
        }));
    }, []);

    useEffect(() => {
        if (
            weight &&
            sideA &&
            sideB &&
            sideC &&
            parseFloat(weight) !== 0 &&
            parseFloat(sideA) !== 0 &&
            parseFloat(sideB) !== 0 &&
            parseFloat(sideC) !== 0
        ) {
            calculateSuitableCouriers(weight, sideA, sideB, sideC, changeSuitableCouriers);
        } else changeSuitableCouriers([]);
    }, [weight, sideA, sideB, sideC, changeSuitableCouriers]);

    return (
        <Context.Provider
            value={{
                suitableCouriers,
                payment,
                paymentHandler,
                dimensions,
                setDimension,
                alertMessage,
                alertHandler,
            }}
        >
            {children}
        </Context.Provider>
    );
};
