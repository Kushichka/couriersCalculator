import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { isCustomParcelGls } from "../../utils/isCustomParcelGls";
import { prices } from "../prices";
import { ICourier, ISuitableCourier, TColors, TCourierPrice } from "../../types/ICourier";
import { config } from "../../config";
import { getCustomPriceGls } from "../../utils/getCustomPriceGls";

export class Gls implements ICourier {
    name: string;
    description: {
        [key: string]: string;
    };
    price: {
        [key: string]: TCourierPrice;
    };
    colors: TColors;

    constructor() {
        this.name = "GLS";
        this.description = {
            WEIGHT_FROM_0_TO_2: "do 2 kg",
            WEIGHT_FROM_2_TO_5: "do 5 kg",
            WEIGHT_FROM_5_TO_10: "do 10 kg",
            WEIGHT_FROM_10_TO_15: "do 15 kg",
            WEIGHT_FROM_15_TO_20: "do 20 kg",
            WEIGHT_FROM_20_TO_25: "do 25 kg",
            WEIGHT_FROM_25_TO_31: "do 31,5 kg",
            CUSTOM_PARCEL: "paczka niestandardowa",
        };
        this.price = prices.gls;
        this.colors = {
            bgColor: "#061ab1",
            fontColor: "#ffffff",
        };
    }

    calculatePrice(weight: string, sideA: string, sideB: string, sideC: string): ISuitableCourier | null {
        const [w, a, b, c] = [weight, sideA, sideB, sideC].map(parseFloat);

        const shortSides = anotherSides(a, b, c);
        const longest = longestSide(a, b, c);
        const custom = isCustomParcelGls(w, a, b, c);

        switch (true) {
            // custom parcel check
            case custom:
                return {
                    name: this.name as string,
                    description: this.description.CUSTOM_PARCEL,
                    price: getCustomPriceGls(w),
                    colors: this.colors,
                };

            // weight check (31.5)
            case w > config.maxParcelWeight:
                return null;

            // longest side check (180)
            case longest > config.longestParcelSide.gls:
                return null;

            // 300 - max for GLS
            case 2 * shortSides[0] + 2 * shortSides[1] + longest > 300:
                return null;

            case w <= 2:
                return {
                    name: this.name as string,
                    description: this.description.WEIGHT_FROM_0_TO_2,
                    price: this.price.WEIGHT_FROM_0_TO_2,
                    colors: this.colors,
                };

            case w <= 5:
                return {
                    name: this.name as string,
                    description: this.description.WEIGHT_FROM_2_TO_5,
                    price: this.price.WEIGHT_FROM_2_TO_5,
                    colors: this.colors,
                };

            case w <= 10:
                return {
                    name: this.name as string,
                    description: this.description.WEIGHT_FROM_5_TO_10,
                    price: this.price.WEIGHT_FROM_5_TO_10,
                    colors: this.colors,
                };

            case w <= 15:
                return {
                    name: this.name as string,
                    description: this.description.WEIGHT_FROM_10_TO_15,
                    price: this.price.WEIGHT_FROM_10_TO_15,
                    colors: this.colors,
                };

            case w <= 20:
                return {
                    name: this.name as string,
                    description: this.description.WEIGHT_FROM_15_TO_20,
                    price: this.price.WEIGHT_FROM_15_TO_20,
                    colors: this.colors,
                };

            case w <= 25:
                return {
                    name: this.name as string,
                    description: this.description.WEIGHT_FROM_20_TO_25,
                    price: this.price.WEIGHT_FROM_20_TO_25,
                    colors: this.colors,
                };

            case w <= 31.5:
                return {
                    name: this.name as string,
                    description: this.description.WEIGHT_FROM_25_TO_31,
                    price: this.price.WEIGHT_FROM_25_TO_31,
                    colors: this.colors,
                };

            default:
                return null;
        }
    }
}
