import { isCustomParcelGls } from "../../utils/isCustomParcelGls";
import { prices } from "../prices";
import { ICourier, ISuitableCourier, TCourierPrice } from "../../types/ICourier";
import { config } from "../../config";
import { getCustomPriceGls } from "../../utils/getCustomPriceGls";
import { logos } from "../../assets/logos";
import { longestSide } from "../../utils/longestSide";

export class Gls implements ICourier {
    name: string;
    logo: string;
    description: {
        [key: string]: string;
    };
    price: {
        [key: string]: TCourierPrice;
    };

    constructor() {
        this.name = "GLS";
        this.logo = logos.gls;
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
    }

    calculatePrice(weight: string, sideA: string, sideB: string, sideC: string): ISuitableCourier | null {
        const [w, a, b, c] = [weight, sideA, sideB, sideC].map(parseFloat);

        const longest = longestSide(a, b, c);
        const custom = isCustomParcelGls(a, b, c);

        switch (true) {
            // weight check
            case w > config.maxParcelWeight:
                return null;

            // custom parcel check
            case custom:
                return {
                    name: this.name,
                    logo: this.logo,
                    description: this.description.CUSTOM_PARCEL,
                    price: getCustomPriceGls(w),
                };

            case longest > config.longestParcelSide.gls:
                return null;

            case w <= 2:
                return {
                    name: this.name,
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_0_TO_2,
                    price: this.price.WEIGHT_FROM_0_TO_2,
                };

            case w <= 5:
                return {
                    name: this.name,
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_2_TO_5,
                    price: this.price.WEIGHT_FROM_2_TO_5,
                };

            case w <= 10:
                return {
                    name: this.name,
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_5_TO_10,
                    price: this.price.WEIGHT_FROM_5_TO_10,
                };

            case w <= 15:
                return {
                    name: this.name,
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_10_TO_15,
                    price: this.price.WEIGHT_FROM_10_TO_15,
                };

            case w <= 20:
                return {
                    name: this.name,
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_15_TO_20,
                    price: this.price.WEIGHT_FROM_15_TO_20,
                };

            case w <= 25:
                return {
                    name: this.name,
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_20_TO_25,
                    price: this.price.WEIGHT_FROM_20_TO_25,
                };

            case w <= 31.5:
                return {
                    name: this.name,
                    logo: this.logo,
                    description: this.description.WEIGHT_FROM_25_TO_31,
                    price: this.price.WEIGHT_FROM_25_TO_31,
                };

            default:
                return null;
        }
    }
}
