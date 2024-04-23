import { ICourier, ISuitableCourier, TColors, TPrice } from "../../types/ICourier";
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
        [key: string]: TPrice;
    };
    colors: TColors;

    constructor() {
        this.name = {
            half: "Raben półpaleta",
            standard: "Raben paleta",
            modul150x80: "Raben moduł (150 x 80)",
            modul120x100: "Raben moduł (120 x 100)",
            modul150x160: "Raben moduł (150 x 160)",
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
            case w <= 31.5 &&
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
                return { name: this.name.half, price: this.price.half, colors: this.colors };

            // standard pallet check (185 x 120 x 80)
            case w <= config.maxPalletWeight.standard &&
                shortSides[0] <= withTolerance(config.standardPalletDimensions.length, config.tolerance) &&
                shortSides[1] <= withTolerance(config.standardPalletDimensions.length, config.tolerance) &&
                (shortSides[0] <= config.standardPalletDimensions.width ||
                    shortSides[1] <= config.standardPalletDimensions.width):
                return {
                    name: this.name.standard,
                    price: this.price.standard,
                    colors: this.colors,
                };

            // modul pallet check (185 x 150 x 80)
            case w <= config.maxPalletWeight.modul &&
                shortSides[0] <= 150 &&
                shortSides[1] <= 150 &&
                (shortSides[0] <= config.standardPalletDimensions.width ||
                    shortSides[1] <= config.standardPalletDimensions.width):
                return {
                    name: this.name.modul150x80,
                    price: this.price.modul150x80,
                    colors: this.colors,
                };

            // modul pallet check (185 x 120 x 100)
            case w <= config.maxPalletWeight.modul &&
                shortSides[0] <= 120 &&
                shortSides[1] <= 120 &&
                (shortSides[0] <= 100 || shortSides[1] <= 100):
                return {
                    name: this.name.modul120x100,
                    price: this.price.modul120x100,
                    colors: this.colors,
                };

            // modul pallet check (185 x 160 x 150)
            case w <= config.maxPalletWeight.modul &&
                shortSides[0] <= 160 &&
                shortSides[1] <= 160 &&
                (shortSides[0] <= 150 || shortSides[1] <= 150):
                return {
                    name: this.name.modul150x160,
                    price: this.price.modul150x160,
                    colors: this.colors,
                };

            default:
                return null;
        }
    }
}
