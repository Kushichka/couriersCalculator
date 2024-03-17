import { ISuitableCourier } from "./ISuitableCourier";

export type TContext = {
    suitableCouriers: ISuitableCourier[];
    payment: boolean;
    paymentHandler: () => void;
    dimensions: {
        weight: string;
        dimensionA: string;
        dimensionB: string;
        dimensionC: string;
    };
    setDimension: (name: string, value: string) => void;
};
