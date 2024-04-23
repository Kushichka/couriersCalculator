import { TPrice } from "../types/ICourier";

interface IPrices {
    [key: string]: {
        [key: string]: TPrice;
    };
}

export const prices: IPrices = {
    inpost: {
        paczkomatA: { standard: "12,67", onDelivery: "Brak" },
        paczkomatB: { standard: "13,35", onDelivery: "Brak" },
        paczkomatC: { standard: "15,42", onDelivery: "Brak" },
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
        weightFrom0To5: { standard: "14,13", onDelivery: "15,97" },
        weightFrom5To10: { standard: "18,48", onDelivery: "20,32" },
        weightFrom10To20: { standard: "21,33", onDelivery: "23,17" },
        weightFrom20To31: { standard: "23,44", onDelivery: "25,28" },
    },
    dpd: {
        weightFrom0To2: { standard: "14,14", onDelivery: "17,07" },
        weightFrom2To5: { standard: "14,99", onDelivery: "17,92" },
        weightFrom5To10: { standard: "17,04", onDelivery: "19,97" },
        weightFrom10To15: { standard: "18,08", onDelivery: "21,01" },
        weightFrom15To20: { standard: "18,65", onDelivery: "21,58" },
        weightFrom20To25: { standard: "19,68", onDelivery: "22,60" },
        weightFrom25To31: { standard: "21,13", onDelivery: "24,05" },
    },
    pocztex: {
        pocztexS: { standard: "13,20", onDelivery: "15,96" },
        pocztexM: { standard: "13,88", onDelivery: "16,64" },
        pocztexL: { standard: "15,00", onDelivery: "17,76" },
        pocztexXl: { standard: "21,52", onDelivery: "24,28" },
        pocztex2xl: { standard: "30,14", onDelivery: "32,90" },
    },
    schenker: {
        link: {
            link: "https://docs.google.com/spreadsheets/d/1qMCcBj0Y7zvZS_L0X_Txp04p9Fng0qJc7eu845X5BFk/edit#gid=1203923558",
        },
    },
    raben: {
        half: { standard: "111,25", onDelivery: "Brak" },
        standard: { standard: "146,12", onDelivery: "Brak" },
        modul150x80: { standard: "175,34", onDelivery: "Brak" },
        modul120x100: { standard: "175,34", onDelivery: "Brak" },
        modul150x160: { standard: "350,69", onDelivery: "Brak" },
    },
};
