import { ICourier, ISuitableCourier, TColors, TPrice } from "../../types/ICourier";
import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { prices } from "../prices";
import { config } from "../../config";

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
            standard: "Raben standard",
            modul: "Raben moduł",
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

            // half pallet check (185 x 80 x 60)
            case w <= config.maxPalletWeight.half &&
                longest <= config.maxPalletPayloadHeight &&
                shortSides[0] <= config.halfPalletDimensions.width &&
                shortSides[1] <= config.halfPalletDimensions.width &&
                (shortSides[0] <= config.halfPalletDimensions.length ||
                    shortSides[1] <= config.halfPalletDimensions.length):
                return { name: this.name.half, price: this.price.half, colors: this.colors };

            // standard pallet check (185 x 120 x 80)
            case w <= config.maxPalletWeight.standard &&
                longest <= config.maxPalletPayloadHeight &&
                shortSides[0] <= config.standardPalletDimensions.length &&
                shortSides[1] <= config.standardPalletDimensions.length &&
                (shortSides[0] <= config.standardPalletDimensions.width ||
                    shortSides[1] <= config.standardPalletDimensions.width):
                return {
                    name: this.name.standard,
                    price: this.price.standard,
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
                    name: this.name.modul,
                    price: this.price.modul,
                    colors: this.colors,
                };

            default:
                return null;
        }
    }
}
