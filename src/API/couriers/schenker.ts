import { ICourier, ISuitableCourier, TColors, TCourierPrice } from "../../types/ICourier";
import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { prices } from "../prices";
import { config } from "../../config";

export class Schenker implements ICourier {
    name: string;
    description: {
        [key: string]: string;
    };
    price: {
        [key: string]: TCourierPrice;
    };
    colors: TColors;

    constructor() {
        this.name = "Schenker";
        this.description = {
            HALF_PALLET: "półpaleta (80 x 60)",
            STANDARD_PALLET: "paleta standardowa (120 x 80)",
            MODUL_PALLET: "moduł",
        };
        this.price = prices.schenker;
        this.colors = {
            bgColor: "#fff",
            fontColor: "#000",
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

            // half pallet check (185 x 80 x 60)
            case w <= config.maxPalletWeight.half &&
                longest <= config.maxPalletPayloadHeight &&
                shortSides[0] <= config.halfPalletDimensions.width &&
                shortSides[1] <= config.halfPalletDimensions.width &&
                (shortSides[0] <= config.halfPalletDimensions.length ||
                    shortSides[1] <= config.halfPalletDimensions.length):
                return {
                    name: this.name as string,
                    description: this.description.HALF_PALLET,
                    price: this.price.CHECK_PRICE,
                    colors: this.colors,
                };

            // standard pallet check (185 x 120 x 80)
            case w <= config.maxPalletWeight.standard &&
                longest <= config.maxPalletPayloadHeight &&
                shortSides[0] <= config.standardPalletDimensions.length &&
                shortSides[1] <= config.standardPalletDimensions.length &&
                (shortSides[0] <= config.standardPalletDimensions.width ||
                    shortSides[1] <= config.standardPalletDimensions.width):
                return {
                    name: this.name as string,
                    description: this.description.STANDARD_PALLET,
                    price: this.price.CHECK_PRICE,
                    colors: this.colors,
                };

            // modul pallet check (185 x 400 x 240)
            case w <= config.maxPalletWeight.modul &&
                longest <= config.modulPalletDimensions.length &&
                shortSides[0] <= config.modulPalletDimensions.width &&
                shortSides[1] <= config.modulPalletDimensions.width &&
                (shortSides[0] <= config.maxPalletPayloadHeight ||
                    shortSides[1] <= config.maxPalletPayloadHeight):
                return {
                    name: this.name as string,
                    description: this.description.MODUL_PALLET,
                    price: this.price.CHECK_PRICE,
                    colors: this.colors,
                };

            default:
                return null;
        }
    }
}
