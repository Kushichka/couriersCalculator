export const config = {
    // longest parcel side
    longestParcelSide: {
        dhl: 120,
        dpd: 150,
        gls: 180,
        inpostPaczkomat: 63,
        pocztex: 120,
    },
    // max parcel length (GLS)
    maxParcelLength: 180,

    // max pallet dimensions
    halfPalletDimensions: {
        length: 60,
        width: 80,
    },
    standardPalletDimensions: {
        length: 120,
        width: 80,
    },
    modulPalletDimensions: {
        length: 400,
        width: 240,
    },
    maxPalletWeight: {
        half: 200,
        standard: 400,
        modul: 800,
    },
    maxPalletPayloadHeight: 185,
    // max payload hight(165) + pallet height (15)
    maxPalletHeight: 200,
};
