import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
// import { getGabariteWeight } from "../../utils/getGabariteWeight";
import { prices } from "../prices";
import { ICourier, ISuitableCourier, TColors, TCourierPrice } from "../../types/ICourier";
import { config } from "../../config";
import { logos } from "../../assets/logos";

export class Dpd implements ICourier {
    logo: string;
    description: {
        [key: string]: string;
    };
    price: {
        [key: string]: TCourierPrice;
    };
    colors: TColors;
    constructor() {
        this.logo = logos.dpd;
        this.description = {
            WEIGHT_FROM_0_TO_2: "do 2 kg",
            WEIGHT_FROM_2_TO_5: "do 5 kg",
            WEIGHT_FROM_5_TO_10: "do 10 kg",
            WEIGHT_FROM_10_TO_15: "do 15 kg",
            WEIGHT_FROM_15_TO_20: "do 20 kg",
            WEIGHT_FROM_20_TO_25: "do 25 kg",
            WEIGHT_FROM_25_TO_31: "do 31,5 kg",
        };
        this.price = prices.dpd;
        this.colors = { font: "#414042" };
    }

    calculatePrice(weight: string, sideA: string, sideB: string, sideC: string): ISuitableCourier | null {
        const [w, a, b, c] = [weight, sideA, sideB, sideC].map(parseFloat);

        const shortSides = anotherSides(a, b, c);
        const longest = longestSide(a, b, c);
        // const gabariteWeight = getGabariteWeight(a, b, c);

        switch (true) {
            // weight check (31.5)
            case w > config.maxParcelWeight:
                return null;

            // longest side check (150)
            case longest > config.longestParcelSide.dpd:
                return null;

            // 300 - max for DPD
            case 2 * shortSides[0] + 2 * shortSides[1] + longest > 300:
                return null;

            case w <= 2:
                return {
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_0_TO_2,
                    price: this.price.WEIGHT_FROM_0_TO_2,
                    colors: this.colors,
                };

            case w <= 5:
                return {
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_2_TO_5,
                    price: this.price.WEIGHT_FROM_2_TO_5,
                    colors: this.colors,
                };

            case w <= 10:
                return {
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_5_TO_10,
                    price: this.price.WEIGHT_FROM_5_TO_10,
                    colors: this.colors,
                };

            case w <= 15:
                return {
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_10_TO_15,
                    price: this.price.WEIGHT_FROM_10_TO_15,
                    colors: this.colors,
                };

            case w <= 20:
                return {
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_15_TO_20,
                    price: this.price.WEIGHT_FROM_15_TO_20,
                    colors: this.colors,
                };

            case w <= 25:
                return {
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_20_TO_25,
                    price: this.price.WEIGHT_FROM_20_TO_25,
                    colors: this.colors,
                };

            case w <= 31.5:
                return {
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_25_TO_31,
                    price: this.price.WEIGHT_FROM_25_TO_31,
                    colors: this.colors,
                };

            default:
                return null;
        }
    }
}
