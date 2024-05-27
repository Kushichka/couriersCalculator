import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { prices } from "../prices";
import { ICourier, ISuitableCourier, TCourierPrice } from "../../types/ICourier";
import { config } from "../../config";
import { logos } from "../../assets/logos";

export class Ambro implements ICourier {
    name: string;
    logo: string;
    description: {
        [key: string]: string;
    };
    price: {
        [key: string]: TCourierPrice;
    };

    constructor() {
        this.name = "Ambro Express";
        this.logo = logos.ambro;
        this.description = {
            barrel: 'wylacznie pojemniki na deszczówke. "Gab20" na liście przewozowym',
        };
        this.price = prices.ambro;
    }

    calculatePrice(weight: string, sideA: string, sideB: string, sideC: string): ISuitableCourier | null {
        const [w, a, b, c] = [weight, sideA, sideB, sideC].map(parseFloat);

        const longest = longestSide(a, b, c);

        switch (true) {
            // weight check
            case w > 20:
                return null;

            // longest side check
            case longest > config.longestParcelSide.ambro:
                return null;

            case a + b + c > 220:
                return null;

            case true:
                return {
                    name: this.name,
                    logo: this.logo,
                    description: this.description.barrel,
                    price: this.price.barrel,
                };

            default:
                return null;
        }
    }
}
