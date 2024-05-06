import { TCourierPrice } from "../types/ICourier";

interface IPrices {
    [key: string]: {
        [key: string]: TCourierPrice;
    };
}

export const prices: IPrices = {
    inpost: {
        PACZKOMAT_A: { standard: "12,67", onDelivery: "Brak" },
        PACZKOMAT_B: { standard: "13,35", onDelivery: "Brak" },
        PACZKOMAT_C: { standard: "15,42", onDelivery: "Brak" },
    },
    gls: {
        WEIGHT_FROM_0_TO_2: { standard: "11,50", onDelivery: "16,22" },
        WEIGHT_FROM_2_TO_5: { standard: "12,41", onDelivery: "17,17" },
        WEIGHT_FROM_5_TO_10: { standard: "18,91", onDelivery: "23,64" },
        WEIGHT_FROM_10_TO_15: { standard: "21,15", onDelivery: "25,87" },
        WEIGHT_FROM_15_TO_20: { standard: "21,15", onDelivery: "25,87" },
        WEIGHT_FROM_20_TO_25: { standard: "22,77", onDelivery: "27,50" },
        WEIGHT_FROM_25_TO_31: { standard: "22,77", onDelivery: "27,50" },
    },
    dhl: {
        WEIGHT_FROM_0_TO_5: { standard: "14,13", onDelivery: "15,97" },
        WEIGHT_FROM_5_TO_10: { standard: "18,48", onDelivery: "20,32" },
        WEIGHT_FROM_10_TO_20: { standard: "21,33", onDelivery: "23,17" },
        WEIGHT_FROM_20_TO_31: { standard: "23,44", onDelivery: "25,28" },
    },
    dpd: {
        WEIGHT_FROM_0_TO_2: { standard: "14,14", onDelivery: "17,07" },
        WEIGHT_FROM_2_TO_5: { standard: "14,99", onDelivery: "17,92" },
        WEIGHT_FROM_5_TO_10: { standard: "17,04", onDelivery: "19,97" },
        WEIGHT_FROM_10_TO_15: { standard: "18,08", onDelivery: "21,01" },
        WEIGHT_FROM_15_TO_20: { standard: "18,65", onDelivery: "21,58" },
        WEIGHT_FROM_20_TO_25: { standard: "19,68", onDelivery: "22,60" },
        WEIGHT_FROM_25_TO_31: { standard: "21,13", onDelivery: "24,05" },
        WEIGHT_FROM_0_TO_2_CUSTOM: { standard: "8,74", onDelivery: "11,11" },
        WEIGHT_FROM_2_TO_5_CUSTOM: { standard: "9,26", onDelivery: "11,11" },
        WEIGHT_FROM_5_TO_10_CUSTOM: { standard: "10,06", onDelivery: "11,11" },
        WEIGHT_FROM_10_TO_15_CUSTOM: { standard: "10,61", onDelivery: "11,11" },
        WEIGHT_FROM_15_TO_20_CUSTOM: { standard: "10,96", onDelivery: "11,11" },
        WEIGHT_FROM_20_TO_25_CUSTOM: { standard: "11,86", onDelivery: "11,11" },
        WEIGHT_FROM_25_TO_31_CUSTOM: { standard: "12,86", onDelivery: "11,11" },
        WEIGHT_FROM_31_TO_40_CUSTOM: { standard: "30,35", onDelivery: "11,11" },
        WEIGHT_FROM_40_TO_50_CUSTOM: { standard: "35,35", onDelivery: "11,11" },
    },
    pocztex: {
        POCZTEX_S: { standard: "13,20", onDelivery: "15,96" },
        POCZTEX_M: { standard: "13,88", onDelivery: "16,64" },
        POCZTEX_L: { standard: "15,00", onDelivery: "17,76" },
        POCZTEX_XL: { standard: "21,52", onDelivery: "24,28" },
        POCZTEX_2XL: { standard: "30,14", onDelivery: "32,90" },
        POCZTEX_2XL_CUSTOM: { standard: "50,24(Fake)", onDelivery: "55,16(Fake)" },
    },
    schenker: {
        CHECK_PRICE: {
            link: "https://docs.google.com/spreadsheets/d/1ufziQ6XdjxC1g1JW3z58zgPeVuZ7srNn9GH214HvA_Q/edit?usp=sharing",
        },
    },
    raben: {
        HALF_PALLET: { standard: "111,25", onDelivery: "Brak" },
        STANDARD_PALLET: { standard: "146,12", onDelivery: "Brak" },
        MODUL_150_X_80: { standard: "175,34", onDelivery: "Brak" },
        MODUL_120_X_100: { standard: "175,34", onDelivery: "Brak" },
        MODUL_150_X_160: { standard: "350,69", onDelivery: "Brak" },
    },
};
