import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { gabariteWeight } from "../../utils/gabariteWeight";
import { prices } from "../prices";
import { ICourier } from "../../types/ICourier";

export class Dpd implements ICourier {
    name: {
        weightFrom0To2: string;
        weightFrom2To5: string;
        weightFrom5To10: string;
        weightFrom10To15: string;
        weightFrom15To20: string;
        weightFrom20To25: string;
        weightFrom25To31: string;
    };
    price: {
        weightFrom0To2: { standard: string; onDelivery: string };
        weightFrom2To5: { standard: string; onDelivery: string };
        weightFrom5To10: { standard: string; onDelivery: string };
        weightFrom10To15: { standard: string; onDelivery: string };
        weightFrom15To20: { standard: string; onDelivery: string };
        weightFrom20To25: { standard: string; onDelivery: string };
        weightFrom25To31: { standard: string; onDelivery: string };
    };
    colors: { bgColor: string; fontColor: string };
    constructor() {
        this.name = {
            weightFrom0To2: "DPD (do 2 kg)",
            weightFrom2To5: "DPD (do 5 kg)",
            weightFrom5To10: "DPD (do 10 kg)",
            weightFrom10To15: "DPD (do 15 kg)",
            weightFrom15To20: "DPD (do 20 kg)",
            weightFrom20To25: "DPD (do 25 kg)",
            weightFrom25To31: "DPD (do 31,5 kg)",
        };
        this.price = prices.dpd;
        this.colors = {
            bgColor: "#dc0032",
            fontColor: "#414042",
        };
    }

    calculatePrice(weight: string, dimensionA: string, dimensionB: string, dimensionC: string) {
        const [w, a, b, c] = [weight, dimensionA, dimensionB, dimensionC].map(parseFloat);

        const shortSides = anotherSides([a, b, c]);
        const longest = longestSide([a, b, c]);
        const gabarite = gabariteWeight([a, b, c]);

        switch (true) {
            // weight check (31.5)
            case w > 31.5:
                return null;

            // longest side check (150)
            case longest > 150:
                return null;

            // package volume check (a + (2 * b) + (2 * c)) <= 300)
            case 2 * shortSides[0] + 2 * shortSides[1] + longest > 300:
                return null;

            // gabarite weight check
            case w <= 10 && gabarite > 25:
                return null;

            // weight check (5 - 10)
            case w > 5 && w <= 10:
                return {
                    name: this.name.weightFrom5To10,
                    price: this.price.weightFrom5To10,
                    colors: this.colors,
                };

            // weight check (10 - 15)
            case w > 10 && w <= 15:
                return {
                    name: this.name.weightFrom10To15,
                    price: this.price.weightFrom10To15,
                    colors: this.colors,
                };

            // weight check (15 - 20)
            case w > 15 && w <= 20:
                return {
                    name: this.name.weightFrom15To20,
                    price: this.price.weightFrom15To20,
                    colors: this.colors,
                };

            // weight check (20 - 25)
            case w > 20 && w <= 25:
                return {
                    name: this.name.weightFrom20To25,
                    price: this.price.weightFrom20To25,
                    colors: this.colors,
                };

            // weight check (25 - 31.5)
            case w > 25 && w <= 31.5:
                return {
                    name: this.name.weightFrom25To31,
                    price: this.price.weightFrom25To31,
                    colors: this.colors,
                };

            default:
                return null;
        }
    }
}
