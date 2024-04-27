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
    },
    pocztex: {
        POCZTEX_S: { standard: "13,20", onDelivery: "15,96" },
        POCZTEX_M: { standard: "13,88", onDelivery: "16,64" },
        POCZTEX_L: { standard: "15,00", onDelivery: "17,76" },
        POCZTEX_XL: { standard: "21,52", onDelivery: "24,28" },
        POCZTEX_2XL: { standard: "30,14", onDelivery: "32,90" },
    },
    schenker: {
        CHECK_PRICE: {
            link: "https://docs.google.com/spreadsheets/d/1qMCcBj0Y7zvZS_L0X_Txp04p9Fng0qJc7eu845X5BFk/edit#gid=1203923558",
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
