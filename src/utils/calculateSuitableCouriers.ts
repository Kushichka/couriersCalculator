import { couriers } from "../API/db";
import { ISuitableCourier } from "../types/ICourier";

export const calculateSuitableCouriers = (
    weight: string,
    dimensionA: string,
    dimensionB: string,
    dimensionC: string,
    callback: (a: ISuitableCourier[]) => void
) => {
    const results: (ISuitableCourier | null)[] = couriers.map((courier) => {
        return courier.calculatePrice(weight, dimensionA, dimensionB, dimensionC);
    });

    callback(results.filter((result): result is ISuitableCourier => result !== null));
};
