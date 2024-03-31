import React, { createContext, useCallback, useEffect, useState } from "react";

import { calculateSuitableCouriers } from "./utils/calculateSuitableCouriers";
import { TContext } from "./types/TContext";
import { ISuitableCourier } from "./types/ICourier";

export const Context = createContext<TContext | null>(null);

export const ContextProvider = ({ children }) => {
    const [suitableCouriers, setSuitableCouriers] = useState<ISuitableCourier[]>([]);
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
        if (weight && dimensionA && dimensionB && dimensionC) {
            calculateSuitableCouriers(weight, dimensionA, dimensionB, dimensionC, changeSuitableCouriers);
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
