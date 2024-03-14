import { couriers } from "../API/db";

export const calculateSuitableCouriers = (weight, dimensionA, dimensionB, dimensionC, callback) => {
    const results = couriers.map((courier) => {
        return courier.calculatePrice(
            weight,
            dimensionA,
            dimensionB,
            dimensionC
        );
    });

    callback(results);
};