import { getGabariteWeight } from "./getGabariteWeight";
import { prices } from "../API/prices";
import { TCourierPrice } from "../types/ICourier";

export const getCustomPriceDpd = (
    weight: number,
    sideA: number,
    sideB: number,
    sideC: number
): TCourierPrice => {
    const gabariteWeight = getGabariteWeight(sideA, sideB, sideC);
    const isGabarite = gabariteWeight > weight;
    const targetWeight = isGabarite ? gabariteWeight : weight;

    console.log(gabariteWeight);

    let price: TCourierPrice = {
        standard: "",
        onDelivery: "",
    };

    if (targetWeight <= 2) {
        price = prices.dpd.WEIGHT_FROM_0_TO_2_CUSTOM;
    } else if (targetWeight <= 5) {
        price = prices.dpd.WEIGHT_FROM_2_TO_5_CUSTOM;
    } else if (targetWeight <= 10) {
        price = prices.dpd.WEIGHT_FROM_5_TO_10_CUSTOM;
    } else if (targetWeight <= 15) {
        price = prices.dpd.WEIGHT_FROM_10_TO_15_CUSTOM;
    } else if (targetWeight <= 20) {
        price = prices.dpd.WEIGHT_FROM_15_TO_20_CUSTOM;
    } else if (targetWeight <= 25) {
        price = prices.dpd.WEIGHT_FROM_20_TO_25_CUSTOM;
    } else if (targetWeight <= 31.5) {
        price = prices.dpd.WEIGHT_FROM_25_TO_31_CUSTOM;
    } else if (targetWeight <= 40) {
        price = prices.dpd.WEIGHT_FROM_31_TO_40_CUSTOM;
    } else if (targetWeight <= 50) {
        price = prices.dpd.WEIGHT_FROM_40_TO_50_CUSTOM;
    }

    const standardNumber = parseFloat("standard" in price ? price.standard.replace(",", ".") : "0");
    const onDeliveryNumber = parseFloat("onDelivery" in price ? price.onDelivery.replace(",", ".") : "0");

    // formula for DPD custom parcels
    const standardPrice = standardNumber * 1.36 + 15.09 * 1.23;
    const onDeliveryPrice = onDeliveryNumber * 1.36 + 15.09 * 1.23;

    return {
        standard: standardPrice.toFixed(2).replace(".", ","),
        onDelivery: onDeliveryPrice.toFixed(2).replace(".", ","),
    };
};
