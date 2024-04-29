export const config = {
    // longest parcel side
    longestParcelSide: {
        dhl: 120,
        dpd: 150,
        gls: 180,
        inpostPaczkomat: 63,
        pocztex: 120,
    },
    maxParcelLength: 180, // max parcel length (GLS)
    maxParcelWeight: 31.5, // max parcel weight
    // max pallet dimensions
    halfPalletDimensions: {
        length: 60,
        width: 80,
    },
    standardPalletDimensions: {
        length: 120,
        width: 80,
    },
    maxPalletWeight: {
        half: 300,
        standard: 800,
        modul: 800,
    },
    maxPalletPayloadHeight: 185,
    maxPalletHeight: 200, // max payload height(185) + pallet height (15)
    borderColor: "#59595a",
    tolerance: 5, // % of tolerance
};
