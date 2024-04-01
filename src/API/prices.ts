import { TPrice } from "../types/ICourier";

interface IPrices {
    [key: string]: {
        [key: string]: TPrice;
    };
}

export const prices: IPrices = {
    inpost: {
        paczkomatA: { standard: "8,99", onDelivery: "12,50" },
        paczkomatB: { standard: "8,99", onDelivery: "12,50" },
        paczkomatC: { standard: "8,99", onDelivery: "12,50" },
    },
    gls: {
        weightFrom0To2: { standard: "11,50", onDelivery: "16,22" },
        weightFrom2To5: { standard: "12,41", onDelivery: "17,17" },
        weightFrom5To10: { standard: "18,91", onDelivery: "23,64" },
        weightFrom10To15: { standard: "21,15", onDelivery: "25,87" },
        weightFrom15To20: { standard: "21,15", onDelivery: "25,87" },
        weightFrom20To25: { standard: "22,77", onDelivery: "27,50" },
        weightFrom25To31: { standard: "22,77", onDelivery: "27,50" },
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
    schenker: {
        half: { standard: "75,00(Fake)", onDelivery: "80,00(Fake)" },
        standard: { standard: "95,00(Fake)", onDelivery: "100,00(Fake)" },
        modul: { standard: "115,00(Fake)", onDelivery: "120,00(Fake)" },
    },
};
