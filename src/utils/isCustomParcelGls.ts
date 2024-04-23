import { anotherSides } from "./anotherSides";
import { longestSide } from "./longestSide";
import { config } from "../config";

export const isCustomParcelGls = (weight: number, sideA: number, sideB: number, sideC: number) => {
    const longest = longestSide(sideA, sideB, sideC);
    const shortSides = anotherSides(sideA, sideB, sideC);
    const perimeterGls = 2 * shortSides[0] + 2 * shortSides[1] + longest;

    if (
        (weight > config.maxParcelWeight && weight < 40) ||
        (longest > config.longestParcelSide.gls && longest < 300) ||
        (perimeterGls > 300 && perimeterGls < 400)
    ) {
        return true;
    }

    return false;
};
