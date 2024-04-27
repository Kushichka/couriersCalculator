import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { getGabariteWeight } from "../../utils/getGabariteWeight";
import { prices } from "../prices";
import { ICourier, ISuitableCourier, TColors, TCourierPrice } from "../../types/ICourier";
import { config } from "../../config";
// import { images } from "../../assets/images";

export class Dpd implements ICourier {
    name: {
        [key: string]: string;
    };
    price: {
        [key: string]: TCourierPrice;
    };
    colors: TColors;
    logo: string;
    constructor() {
        this.name = {
            WEIGHT_FROM_0_TO_2: "DPD (do 2 kg)",
            WEIGHT_FROM_2_TO_5: "DPD (do 5 kg)",
            WEIGHT_FROM_5_TO_10: "DPD (do 10 kg)",
            WEIGHT_FROM_10_TO_15: "DPD (do 15 kg)",
            WEIGHT_FROM_15_TO_20: "DPD (do 20 kg)",
            WEIGHT_FROM_20_TO_25: "DPD (do 25 kg)",
            WEIGHT_FROM_25_TO_31: "DPD (do 31,5 kg)",
        };
        this.price = prices.dpd;
        this.colors = {
            bgColor: "#dc0032",
            fontColor: "#414042",
        };
        // this.logo = images.logoDpd;
    }

    calculatePrice(weight: string, sideA: string, sideB: string, sideC: string): ISuitableCourier | null {
        const [w, a, b, c] = [weight, sideA, sideB, sideC].map(parseFloat);

        const shortSides = anotherSides(a, b, c);
        const longest = longestSide(a, b, c);
        const gabariteWeight = getGabariteWeight(a, b, c);

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
                    name: this.name.WEIGHT_FROM_0_TO_2,
                    price: this.price.WEIGHT_FROM_0_TO_2,
                    colors: this.colors,
                };

            case w <= 5:
                return {
                    name: this.name.WEIGHT_FROM_2_TO_5,
                    price: this.price.WEIGHT_FROM_2_TO_5,
                    colors: this.colors,
                };

            case w <= 10:
                return {
                    name: this.name.WEIGHT_FROM_5_TO_10,
                    price: this.price.WEIGHT_FROM_5_TO_10,
                    colors: this.colors,
                };

            case w <= 15:
                return {
                    name: this.name.WEIGHT_FROM_10_TO_15,
                    price: this.price.WEIGHT_FROM_10_TO_15,
                    colors: this.colors,
                };

            case w <= 20:
                return {
                    name: this.name.WEIGHT_FROM_15_TO_20,
                    price: this.price.WEIGHT_FROM_15_TO_20,
                    colors: this.colors,
                };

            case w <= 25:
                return {
                    name: this.name.WEIGHT_FROM_20_TO_25,
                    price: this.price.WEIGHT_FROM_20_TO_25,
                    colors: this.colors,
                };

            case w <= 31.5:
                return {
                    name: this.name.WEIGHT_FROM_25_TO_31,
                    price: this.price.WEIGHT_FROM_25_TO_31,
                    colors: this.colors,
                };

            default:
                return null;
        }
    }
}
