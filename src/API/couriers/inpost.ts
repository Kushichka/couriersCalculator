import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { prices } from "../prices";
import { ICourier, ISuitableCourier, TColors, TPrice } from "../../types/ICourier";
import { config } from "../../config";

export class Inpost implements ICourier {
    name: {
        [key: string]: string;
    };
    price: {
        [key: string]: TPrice;
    };
    colors: TColors;

    constructor() {
        this.name = {
            paczkomatA: 'InPost paczkomat "A"',
            paczkomatB: 'InPost paczkomat "B"',
            paczkomatC: 'InPost paczkomat "C"',
        };
        this.price = prices.inpost;
        this.colors = {
            bgColor: "#ffcd00",
            fontColor: "#3c3c3c",
        };
    }

    calculatePrice(
        weight: string,
        dimensionA: string,
        dimensionB: string,
        dimensionC: string
    ): ISuitableCourier | null {
        const [w, a, b, c] = [weight, dimensionA, dimensionB, dimensionC].map(parseFloat);

        const shortSides = anotherSides([a, b, c]);
        const longest = longestSide([a, b, c]);

        switch (true) {
            // weight check (25)
            case w > 25:
                return null;

            // longest side check (63)
            case longest > config.longestParcelSide.inpostPaczkomat:
                return null;

            // paczkomatA check (63 x 38 x 8)
            case shortSides[0] <= 38 && shortSides[1] <= 38 && (shortSides[0] <= 8 || shortSides[1] <= 8):
                return {
                    name: this.name.paczkomatA,
                    price: this.price.paczkomatA,
                    colors: this.colors,
                };

            // paczkomatB check (63 x 38 x 19)
            case shortSides[0] <= 38 && shortSides[1] <= 38 && (shortSides[0] <= 19 || shortSides[1] <= 19):
                return {
                    name: this.name.paczkomatB,
                    price: this.price.paczkomatB,
                    colors: this.colors,
                };

            // paczkomatC check (63 x 41 x 38)
            case shortSides[0] <= 41 && shortSides[1] <= 41 && (shortSides[0] <= 38 || shortSides[1] <= 38):
                return {
                    name: this.name.paczkomatC,
                    price: this.price.paczkomatC,
                    colors: this.colors,
                };

            default:
                return null;
        }
    }
}
