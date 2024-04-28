import { prices } from "../API/prices";
import { TCourierPrice } from "../types/ICourier";

export const getCustomPriceGls = (weight: number): TCourierPrice => {
    let price: TCourierPrice = {
        standard: "",
        onDelivery: "",
    };

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

    const standardPrice = parseFloat("standard" in price ? price.standard.replace(",", ".") : "0") + 80;
    const onDeliveryPrice = parseFloat("onDelivery" in price ? price.onDelivery.replace(",", ".") : "0") + 80;

    return {
        standard: isNaN(standardPrice) ? "Brak" : standardPrice.toFixed(2).replace(".", ","), // isNaN is a temporary solution
        onDelivery: isNaN(onDeliveryPrice) ? "Brak" : onDeliveryPrice.toFixed(2).replace(".", ","), // isNaN is a temporary solution
    };
};
