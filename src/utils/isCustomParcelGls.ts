import { anotherSides } from "./anotherSides";
import { longestSide } from "./longestSide";
import { config } from "../config";

export const isCustomParcelGls = (sideA: number, sideB: number, sideC: number) => {
    const longest = longestSide(sideA, sideB, sideC);
    const shortSides = anotherSides(sideA, sideB, sideC);
    const perimeterGls = 2 * shortSides[0] + 2 * shortSides[1] + longest;

    if (
        (longest > config.longestParcelSide.gls && longest < 250) ||
        (perimeterGls > 300 && perimeterGls < 400)
    ) {
        return true;
    }

    return false;
};
