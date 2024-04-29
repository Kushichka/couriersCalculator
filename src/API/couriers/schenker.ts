import { ICourier, ISuitableCourier, TCourierPrice } from "../../types/ICourier";
import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { prices } from "../prices";
import { config } from "../../config";
import { logos } from "../../assets/logos";
import { withTolerance } from "../../utils/withTolerance";

export class Schenker implements ICourier {
    name: string;
    logo: string;
    description: {
        [key: string]: string;
    };
    price: {
        [key: string]: TCourierPrice;
    };

    constructor() {
        this.name = "Schenker";
        this.logo = logos.schenker;
        this.description = {
            HALF_PALLET: "półpaleta (80 x 60)",
            STANDARD_PALLET: "paleta standardowa (120 x 80)",
            MODUL_150_X_80: "moduł (150 x 80)",
            MODUL_120_X_100: "moduł (120 x 100)",
            MODUL_150_X_160: "moduł (150 x 160)",
        };
        this.price = prices.schenker;
    }

    calculatePrice(weight: string, sideA: string, sideB: string, sideC: string): ISuitableCourier | null {
        const [w, a, b, c] = [weight, sideA, sideB, sideC].map(parseFloat);

        const shortSides = anotherSides(a, b, c);
        const longest = longestSide(a, b, c);
        const palletTolerance = config.tolerance * 2;

        switch (true) {
            case w <= config.maxParcelWeight &&
                longest <= config.maxParcelLength &&
                2 * shortSides[0] + 2 * shortSides[1] + longest <= 300:
                return null;

            // payload height check
            case longest > config.maxPalletPayloadHeight:
                return null;

            // half pallet check (185 x 80 x 60)
            case w <= config.maxPalletWeight.half &&
                shortSides[0] <= withTolerance(config.halfPalletDimensions.width, palletTolerance) &&
                shortSides[1] <= withTolerance(config.halfPalletDimensions.width, palletTolerance) &&
                (shortSides[0] <= withTolerance(config.halfPalletDimensions.length, palletTolerance) ||
                    shortSides[1] <= withTolerance(config.halfPalletDimensions.length, palletTolerance)):
                return {
                    name: this.name,
                    logo: this.logo,
                    description: this.description.HALF_PALLET,
                    price: this.price.CHECK_PRICE,
                };

            // standard pallet check (185 x 120 x 80)
            case w <= config.maxPalletWeight.standard &&
                shortSides[0] <= withTolerance(config.standardPalletDimensions.length, palletTolerance) &&
                shortSides[1] <= withTolerance(config.standardPalletDimensions.length, palletTolerance) &&
                (shortSides[0] <= withTolerance(config.standardPalletDimensions.width, palletTolerance) ||
                    shortSides[1] <= withTolerance(config.standardPalletDimensions.width, palletTolerance)):
                return {
                    name: this.name,
                    logo: this.logo,
                    description: this.description.STANDARD_PALLET,
                    price: this.price.CHECK_PRICE,
                };

            // modul pallet check (185 x 150 x 80)
            case w <= config.maxPalletWeight.modul &&
                shortSides[0] <= withTolerance(150, palletTolerance) &&
                shortSides[1] <= withTolerance(150, palletTolerance) &&
                (shortSides[0] <= withTolerance(config.standardPalletDimensions.width, palletTolerance) ||
                    shortSides[1] <= withTolerance(config.standardPalletDimensions.width, palletTolerance)):
                return {
                    name: this.name,
                    logo: this.logo,
                    description: this.description.MODUL_150_X_80,
                    price: this.price.CHECK_PRICE,
                };

            // modul pallet check (185 x 120 x 100)
            case w <= config.maxPalletWeight.modul &&
                shortSides[0] <= withTolerance(120, palletTolerance) &&
                shortSides[1] <= withTolerance(120, palletTolerance) &&
                (shortSides[0] <= withTolerance(100, palletTolerance) ||
                    shortSides[1] <= withTolerance(100, palletTolerance)):
                return {
                    name: this.name,
                    logo: this.logo,
                    description: this.description.MODUL_120_X_100,
                    price: this.price.CHECK_PRICE,
                };

            // modul pallet check (185 x 160 x 150)
            case w <= config.maxPalletWeight.modul &&
                shortSides[0] <= withTolerance(160, palletTolerance) &&
                shortSides[1] <= withTolerance(160, palletTolerance) &&
                (shortSides[0] <= withTolerance(150, palletTolerance) ||
                    shortSides[1] <= withTolerance(150, palletTolerance)):
                return {
                    name: this.name,
                    logo: this.logo,
                    description: this.description.MODUL_150_X_160,
                    price: this.price.CHECK_PRICE,
                };

            default:
                return null;
        }
    }
}
