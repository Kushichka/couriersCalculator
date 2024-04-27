import { ISuitableCourier, TPrice } from "../types/ICourier";

export const sortCouriers = (couriers: ISuitableCourier[], payment: boolean) => {
    const priceToNumber = (obj: TPrice, payment: boolean) => {
        if (!payment && "standard" in obj) {
            return parseFloat(obj.standard.replace(",", "."));
        }
        if (payment && "onDelivery" in obj) {
            return parseFloat(obj.onDelivery.replace(",", "."));
        }
        return 0;
    };

    return couriers.sort((a, b) => {
        const priceAToNumber = priceToNumber(a.price as TPrice, payment);
        const priceBToNumber = priceToNumber(b.price as TPrice, payment);

        if (priceAToNumber && priceBToNumber && priceAToNumber < priceBToNumber) {
            return -1;
        }
        if (priceAToNumber && priceBToNumber && priceAToNumber > priceBToNumber) {
            return 1;
        }
        return 0;
    });
};
