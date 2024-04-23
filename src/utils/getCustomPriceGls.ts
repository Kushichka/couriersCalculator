import { prices } from "../API/prices";
import { TPrice } from "../types/ICourier";

export const getCustomPriceGls = (weight: number) => {
    let price: TPrice = {};

    if (weight <= 2) {
        price = prices.gls.WEIGHT_FROM_0_TO_2;
    } else if (weight <= 5) {
        price = prices.gls.WEIGHT_FROM_2_TO_5;
    } else if (weight <= 10) {
        price = prices.gls.WEIGHT_FROM_5_TO_10;
    } else if (weight <= 15) {
        price = prices.gls.WEIGHT_FROM_10_TO_15;
    } else if (weight <= 20) {
        price = prices.gls.WEIGHT_FROM_15_TO_20;
    } else if (weight <= 25) {
        price = prices.gls.WEIGHT_FROM_20_TO_25;
    } else if (weight <= 31.5) {
        price = prices.gls.WEIGHT_FROM_25_TO_31;
    }

    const standardPrice = parseFloat(price.standard ? price.standard.replace(",", ".") : "0") + 80;
    const onDeliveryPrice = parseFloat(price.onDelivery ? price.onDelivery.replace(",", ".") : "0") + 80;

    return {
        standard: standardPrice.toFixed(2).replace(".", ","),
        onDelivery: onDeliveryPrice.toFixed(2).replace(".", ","),
    };
};
