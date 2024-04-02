import { config } from "../../config";
import { ICourier, ISuitableCourier, TColors, TPrice } from "../../types/ICourier";
import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { prices } from "../prices";

export class Pocztex implements ICourier {
    name: {
        [key: string]: string;
    };
    price: {
        [key: string]: TPrice;
    };
    colors: TColors;

    constructor() {
        this.name = {
            pocztexS: "Pocztex S",
            pocztexM: "Pocztex M",
            pocztexL: "Pocztex L",
            pocztexXl: "Pocztex XL",
            pocztex2xl: "Pocztex 2XL",
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
                    name: this.name.pocztex2xl,
                    price: this.price.pocztex2xl,
                    colors: this.colors,
                };

            // pocztex S (65 x 40 x 9), weight <= 20
            case w <= 20 &&
                longest <= 65 &&
                shortSides[0] <= 40 &&
                shortSides[1] <= 40 &&
                (shortSides[0] <= 9 || shortSides[1] <= 9):
                return {
                    name: this.name.pocztexS,
                    price: this.price.pocztexS,
                    colors: this.colors,
                };

            // pocztex M (65 x 40 x 20), weight <= 20
            case w <= 20 &&
                longest <= 65 &&
                shortSides[0] <= 40 &&
                shortSides[1] <= 40 &&
                (shortSides[0] <= 20 || shortSides[1] <= 20):
                return {
                    name: this.name.pocztexM,
                    price: this.price.pocztexM,
                    colors: this.colors,
                };

            // pocztex L (65 x 42 x 40 ), weight <= 20
            case w <= 20 &&
                longest <= 65 &&
                shortSides[0] <= 42 &&
                shortSides[1] <= 42 &&
                (shortSides[0] <= 40 || shortSides[1] <= 40):
                return {
                    name: this.name.pocztexL,
                    price: this.price.pocztexL,
                    colors: this.colors,
                };

            // pocztex XL (70 x 60 x 60 ), weight <= 20
            case w <= 20 && longest <= 70 && shortSides[0] <= 60 && shortSides[1] <= 60:
                return {
                    name: this.name.pocztexXl,
                    price: this.price.pocztexXl,
                    colors: this.colors,
                };

            default:
                return null;
        }
    }
}
