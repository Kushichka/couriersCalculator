import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { prices } from "../prices";
import { ICourier, ISuitableCourier, TColors, TCourierPrice } from "../../types/ICourier";
import { config } from "../../config";
import { logos } from "../../assets/logos";

export class Dhl implements ICourier {
    logo: string;
    description: {
        [key: string]: string;
    };
    price: {
        [key: string]: TCourierPrice;
    };
    colors: TColors;

    constructor() {
        this.logo = logos.dhl;
        this.description = {
            WEIGHT_FROM_0_TO_5: "do 5 kg",
            WEIGHT_FROM_5_TO_10: "do 10 kg",
            WEIGHT_FROM_10_TO_20: "do 20 kg",
            WEIGHT_FROM_20_TO_31: "do 31,5 kg",
        };
        this.price = prices.dhl;
        this.colors = { font: "#d40511" };
    }

    calculatePrice(weight: string, sideA: string, sideB: string, sideC: string): ISuitableCourier | null {
        const [w, a, b, c] = [weight, sideA, sideB, sideC].map(parseFloat);

        const shortSides = anotherSides(a, b, c);
        const longest = longestSide(a, b, c);

        switch (true) {
            // weight check (31.5)
            case w > config.maxParcelWeight:
                return null;

            // longest side check (120)
            case longest > config.longestParcelSide.dhl:
                return null;

            // other sides check (60 x 60)
            case shortSides[0] > 60 || shortSides[1] > 60:
                return null;

            // weight check (0 - 5)
            case w <= 5:
                return {
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_0_TO_5,
                    price: this.price.WEIGHT_FROM_0_TO_5,
                    colors: this.colors,
                };

            // weight check (5 - 10)
            case w > 5 && w <= 10:
                return {
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_5_TO_10,
                    price: this.price.WEIGHT_FROM_5_TO_10,
                    colors: this.colors,
                };

            // weight check (10 - 20)
            case w > 10 && w <= 20:
                return {
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_10_TO_20,
                    price: this.price.WEIGHT_FROM_10_TO_20,
                    colors: this.colors,
                };

            // weight check (5 - 10)
            case w > 20 && w <= 31.5:
                return {
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_20_TO_31,
                    price: this.price.WEIGHT_FROM_20_TO_31,
                    colors: this.colors,
                };

            default:
                return null;
        }
    }
}
