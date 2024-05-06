import { anotherSides } from "./anotherSides";
import { longestSide } from "./longestSide";
import { config } from "../config";
import { getGabariteWeight } from "./getGabariteWeight";

export const isCustomParcelDpd = (weight: number, sideA: number, sideB: number, sideC: number): boolean => {
    const longest = longestSide(sideA, sideB, sideC);
    const shortSides = anotherSides(sideA, sideB, sideC);
    const perimeter = sideA + sideB + sideC;
    const gabarite = getGabariteWeight(sideA, sideB, sideC);

    if (gabarite > 50) return false;

    if (
        (weight > 31.5 && weight <= 50) ||
        (longest > config.longestParcelSide.dpd &&
            longest <= 300 &&
            shortSides[0] <= 60 &&
            shortSides[1] <= 60) ||
        perimeter > 300
    ) {
        return true;
    }

    return false;
};
