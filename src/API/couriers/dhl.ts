import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { prices } from "../prices";
import { ICourier } from "../../types/ICourier";

export class Dhl implements ICourier {
    name: {
        weightFrom0To5: string;
        weightFrom5To10: string;
        weightFrom10To20: string;
        weightFrom20To31: string;
    };
    price: {
        weightFrom0To5: { standard: string; onDelivery: string };
        weightFrom5To10: { standard: string; onDelivery: string };
        weightFrom10To20: { standard: string; onDelivery: string };
        weightFrom20To31: { standard: string; onDelivery: string };
    };
    colors: { bgColor: string; fontColor: string };

    constructor() {
        this.name = {
            weightFrom0To5: "DHL (do 5 kg)",
            weightFrom5To10: "DHL (do 10 kg)",
            weightFrom10To20: "DHL (do 20 kg)",
            weightFrom20To31: "DHL (do 31,5 kg)",
        };
        this.price = prices.dhl;
        this.colors = {
            bgColor: "#ffcc00",
            fontColor: "#d40511",
        };
    }

    calculatePrice(weight: string, dimensionA: string, dimensionB: string, dimensionC: string) {
        const [w, a, b, c] = [weight, dimensionA, dimensionB, dimensionC].map(parseFloat);

        const shortSides = anotherSides([a, b, c]);
        const longest = longestSide([a, b, c]);

        switch (true) {
            // weight check (31.5)
            case w > 31.5:
                return null;

            // longest side check (120)
            case longest > 120:
                return null;

            // other sides check (60 x 60)
            case shortSides[0] > 60 || shortSides[1] > 60:
                return null;

            // weight check (0 - 5)
            case w <= 5:
                return {
                    name: this.name.weightFrom0To5,
                    price: this.price.weightFrom0To5,
                    colors: this.colors,
                };

            // weight check (5 - 10)
            case w > 5 && w <= 10:
                return {
                    name: this.name.weightFrom5To10,
                    price: this.price.weightFrom5To10,
                    colors: this.colors,
                };

            // weight check (10 - 20)
            case w > 10 && w <= 20:
                return {
                    name: this.name.weightFrom10To20,
                    price: this.price.weightFrom10To20,
                    colors: this.colors,
                };

            // weight check (5 - 10)
            case w > 20 && w <= 31.5:
                return {
                    name: this.name.weightFrom20To31,
                    price: this.price.weightFrom20To31,
                    colors: this.colors,
                };

            default:
                return null;
        }
    }
}
