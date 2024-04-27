import { ICourier, ISuitableCourier, TColors, TCourierPrice } from "../../types/ICourier";
import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { prices } from "../prices";
import { config } from "../../config";
import { withTolerance } from "../../utils/withTolerance";

export class Raben implements ICourier {
    name: {
        [key: string]: string;
    };
    price: {
        [key: string]: TCourierPrice;
    };
    colors: TColors;

    constructor() {
        this.name = {
            HALF_PALLET: "Raben półpaleta",
            STANDARD_PALLET: "Raben paleta",
            MODUL_150_X_80: "Raben moduł (150 x 80)",
            MODUL_120_X_100: "Raben moduł (120 x 100)",
            MODUL_150_X_160: "Raben moduł (150 x 160)",
        };
        this.price = prices.raben;
        this.colors = {
            bgColor: "#fff",
            fontColor: "#d8001f",
        };
    }

    calculatePrice(weight: string, sideA: string, sideB: string, sideC: string): ISuitableCourier | null {
        const [w, a, b, c] = [weight, sideA, sideB, sideC].map(parseFloat);

        const shortSides = anotherSides(a, b, c);
        const longest = longestSide(a, b, c);

        switch (true) {
            case w <= config.maxParcelWeight &&
                longest <= config.maxParcelLength &&
                2 * shortSides[0] + 2 * shortSides[1] + longest <= 300:
                return null;

            // height check (185)
            case longest > config.maxPalletPayloadHeight:
                return null;

            // half pallet check (185 x 80 x 60)
            case w <= config.maxPalletWeight.half &&
                shortSides[0] <= withTolerance(config.halfPalletDimensions.width, config.tolerance) &&
                shortSides[1] <= withTolerance(config.halfPalletDimensions.width, config.tolerance) &&
                (shortSides[0] <= config.halfPalletDimensions.length ||
                    shortSides[1] <= config.halfPalletDimensions.length):
                return { name: this.name.HALF_PALLET, price: this.price.HALF_PALLET, colors: this.colors };

            // standard pallet check (185 x 120 x 80)
            case w <= config.maxPalletWeight.standard &&
                shortSides[0] <= withTolerance(config.standardPalletDimensions.length, config.tolerance) &&
                shortSides[1] <= withTolerance(config.standardPalletDimensions.length, config.tolerance) &&
                (shortSides[0] <= config.standardPalletDimensions.width ||
                    shortSides[1] <= config.standardPalletDimensions.width):
                return {
                    name: this.name.STANDARD_PALLET,
                    price: this.price.STANDARD_PALLET,
                    colors: this.colors,
                };

            // modul pallet check (185 x 150 x 80)
            case w <= config.maxPalletWeight.modul &&
                shortSides[0] <= 150 &&
                shortSides[1] <= 150 &&
                (shortSides[0] <= config.standardPalletDimensions.width ||
                    shortSides[1] <= config.standardPalletDimensions.width):
                return {
                    name: this.name.MODUL_150_X_80,
                    price: this.price.MODUL_150_X_80,
                    colors: this.colors,
                };

            // modul pallet check (185 x 120 x 100)
            case w <= config.maxPalletWeight.modul &&
                shortSides[0] <= 120 &&
                shortSides[1] <= 120 &&
                (shortSides[0] <= 100 || shortSides[1] <= 100):
                return {
                    name: this.name.MODUL_120_X_100,
                    price: this.price.MODUL_120_X_100,
                    colors: this.colors,
                };

            // modul pallet check (185 x 160 x 150)
            case w <= config.maxPalletWeight.modul &&
                shortSides[0] <= 160 &&
                shortSides[1] <= 160 &&
                (shortSides[0] <= 150 || shortSides[1] <= 150):
                return {
                    name: this.name.MODUL_150_X_160,
                    price: this.price.MODUL_150_X_160,
                    colors: this.colors,
                };

            default:
                return null;
        }
    }
}
