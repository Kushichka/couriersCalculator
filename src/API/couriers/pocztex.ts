import { logos } from "../../assets/logos";
import { config } from "../../config";
import { ICourier, ISuitableCourier, TColors, TCourierPrice } from "../../types/ICourier";
import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { withTolerance } from "../../utils/withTolerance";
import { prices } from "../prices";

export class Pocztex implements ICourier {
    logo: string;
    description: {
        [key: string]: string;
    };
    price: {
        [key: string]: TCourierPrice;
    };
    colors: TColors;

    constructor() {
        this.logo = logos.pocztex;
        this.description = {
            POCZTEX_S: "paczka S",
            POCZTEX_M: "paczka M",
            POCZTEX_L: "paczka L",
            POCZTEX_XL: "paczka XL",
            POCZTEX_2XL: "paczka 2XL",
            POCZTEX_2XL_CUSTOM: "paczka 2XL niestandardowa",
        };
        this.price = prices.pocztex;
        this.colors = { font: "#e31511" };
    }

    calculatePrice(weight: string, sideA: string, sideB: string, sideC: string): ISuitableCourier | null {
        const [w, a, b, c] = [weight, sideA, sideB, sideC].map(parseFloat);

        const shortSides = anotherSides(a, b, c);
        const longest = longestSide(a, b, c);

        switch (true) {
            // package check (a + b + c) <= 300
            case a + b + c > 300:
                return null;

            // longest side check 150 + tolerance 5%
            case longest > withTolerance(150, config.tolerance):
                return null;

            // weight check (30)
            case w > 30:
                return null;

            // pocztex 2XL custom, (a + b + c) <= 250, longest < 120
            case longest > config.longestParcelSide.pocztex || a + b + c > 250:
                return {
                    logo: this.logo,
                    description: this.description.POCZTEX_2XL_CUSTOM,
                    price: this.price.POCZTEX_2XL_CUSTOM,
                    colors: this.colors,
                };

            // longest side check 120 + tolerance 5%
            case longest > withTolerance(config.longestParcelSide.pocztex, config.tolerance):
                return null;

            // pocztex 2XL, weight <= 30
            case w > 20 || longest > 70 || shortSides[0] > 60 || shortSides[1] > 60:
                return {
                    logo: this.logo,
                    description: this.description.POCZTEX_2XL,
                    price: this.price.POCZTEX_2XL,
                    colors: this.colors,
                };

            // pocztex S (65 x 40 x 9), weight <= 20
            case w <= 20 &&
                longest <= 65 &&
                shortSides[0] <= 40 &&
                shortSides[1] <= 40 &&
                (shortSides[0] <= 9 || shortSides[1] <= 9):
                return {
                    logo: this.logo,
                    description: this.description.POCZTEX_S,
                    price: this.price.POCZTEX_S,
                    colors: this.colors,
                };

            // pocztex M (65 x 40 x 20), weight <= 20
            case w <= 20 &&
                longest <= 65 &&
                shortSides[0] <= 40 &&
                shortSides[1] <= 40 &&
                (shortSides[0] <= 20 || shortSides[1] <= 20):
                return {
                    logo: this.logo,
                    description: this.description.POCZTEX_M,
                    price: this.price.POCZTEX_M,
                    colors: this.colors,
                };

            // pocztex L (65 x 42 x 40 ), weight <= 20
            case w <= 20 &&
                longest <= 65 &&
                shortSides[0] <= 42 &&
                shortSides[1] <= 42 &&
                (shortSides[0] <= 40 || shortSides[1] <= 40):
                return {
                    logo: this.logo,
                    description: this.description.POCZTEX_L,
                    price: this.price.POCZTEX_L,
                    colors: this.colors,
                };

            // pocztex XL (70 x 60 x 60 ), weight <= 20
            case w <= 20 && longest <= 70 && shortSides[0] <= 60 && shortSides[1] <= 60:
                return {
                    logo: this.logo,
                    description: this.description.POCZTEX_XL,
                    price: this.price.POCZTEX_XL,
                    colors: this.colors,
                };

            default:
                return null;
        }
    }
}
