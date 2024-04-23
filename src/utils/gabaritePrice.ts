import { TPrice } from "../types/ICourier";

export const gabaritePrice = (normalPrice: TPrice, surchargePrice: number) => {
    const normalPriceNumber = {
        standard: normalPrice.standard ? parseFloat(normalPrice.standard.replace(",", ".")) : undefined,
        onDelivery: normalPrice.onDelivery ? parseFloat(normalPrice.onDelivery.replace(",", ".")) : undefined,
    };

    const gabaritePrice = {
        standard: normalPriceNumber.standard ? normalPriceNumber.standard + surchargePrice : undefined,
        onDelivery: normalPriceNumber.onDelivery ? normalPriceNumber.onDelivery + surchargePrice : undefined,
    };

    return {
        standard: gabaritePrice.standard ? gabaritePrice.standard.toFixed(2).replace(".", ",") : undefined,
        onDelivery: gabaritePrice.onDelivery
            ? gabaritePrice.onDelivery.toFixed(2).replace(".", ",")
            : undefined,
    };
};
