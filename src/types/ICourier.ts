import { ISuitableCourier } from "./ISuitableCourier";

export interface ICourier {
    name: {};
    price: {};
    colors: { bgColor: string; fontColor: string };
    calculatePrice(
        weight: string,
        dimensionA: string,
        dimensionB: string,
        dimensionC: string
    ): ISuitableCourier[] | null;
}
