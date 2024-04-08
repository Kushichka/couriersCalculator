import { ISuitableCourier } from "./ICourier";

export type TContext = {
    suitableCouriers: ISuitableCourier[];
    payment: boolean;
    paymentHandler: () => void;
    dimensions: {
        weight: string;
        sideA: string;
        sideB: string;
        sideC: string;
    };
    alertMessage: string;
    alertHandler: (message: string) => void;
    setDimension: (name: string, value: string) => void;
};
