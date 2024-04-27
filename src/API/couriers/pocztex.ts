import { config } from "../../config";
import { ICourier, ISuitableCourier, TColors, TCourierPrice } from "../../types/ICourier";
import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { prices } from "../prices";

export class Pocztex implements ICourier {
    name: {
        [key: string]: string;
    };
    price: {
        [key: string]: TCourierPrice;
    };
    colors: TColors;

    constructor() {
        this.name = {
            POCZTEX_S: "Pocztex S",
            POCZTEX_M: "Pocztex M",
            POCZTEX_L: "Pocztex L",
            POCZTEX_XL: "Pocztex XL",
            POCZTEX_2XL: "Pocztex 2XL",
        };
        this.price = prices.pocztex;
        this.colors = {
            bgColor: "#fff",
            fontColor: "#e31511",
        };
    }

    calculatePrice(weight: string, sideA: string, sideB: string, sideC: string): ISuitableCourier | null {
        const [w, a, b, c] = [weight, sideA, sideB, sideC].map(parseFloat);

        const shortSides = anotherSides(a, b, c);
        const longest = longestSide(a, b, c);

        switch (true) {
            // weight check (20)
            case w > 30:
                return null;

            // package check (a + b + c) <= 250
            case a + b + c > 250:
                return null;

            // longest side check (120)
            case longest > config.longestParcelSide.pocztex:
                return null;

            // pocztex 2XL (65 x 42 x 40 ), weight <= 30
            case longest > 70 || a + b + c > 190:
                return {
                    name: this.name.POCZTEX_2XL,
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
                    name: this.name.POCZTEX_S,
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
                    name: this.name.POCZTEX_M,
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
                    name: this.name.POCZTEX_L,
                    price: this.price.POCZTEX_L,
                    colors: this.colors,
                };

            // pocztex XL (70 x 60 x 60 ), weight <= 20
            case w <= 20 && longest <= 70 && shortSides[0] <= 60 && shortSides[1] <= 60:
                return {
                    name: this.name.POCZTEX_XL,
                    price: this.price.POCZTEX_XL,
                    colors: this.colors,
                };

            default:
                return null;
        }
    }
}
