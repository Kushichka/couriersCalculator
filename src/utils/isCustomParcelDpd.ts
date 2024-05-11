import { longestSide } from "./longestSide";
import { config } from "../config";
import { getGabariteWeight } from "./getGabariteWeight";

export const isCustomParcelDpd = (weight: number, sideA: number, sideB: number, sideC: number): boolean => {
    const longest = longestSide(sideA, sideB, sideC);
    const perimeter = sideA + sideB + sideC;
    const gabarite = getGabariteWeight(sideA, sideB, sideC);

    if (gabarite > 50) return false;

    if (
        (longest > config.longestParcelSide.dpd && longest <= 300) ||
        perimeter > 300 ||
        (weight > 31.5 && weight <= 50)
    ) {
        return true;
    }

    return false;
};
