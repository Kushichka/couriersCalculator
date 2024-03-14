import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { prices } from "../prices";

export class Inpost {
    constructor() {
        this.name = {
            paczkomatA: 'InPost paczkomat "A"',
            paczkomatB: 'InPost paczkomat "B"',
            paczkomatC: 'InPost paczkomat "C"'
        };
        this.price = {
            paczkomatA: prices.inpost.paczkomatA,
            paczkomatB: prices.inpost.paczkomatB,
            paczkomatC: prices.inpost.paczkomatC
        }
    }

    calculatePrice(weight, dimensionA, dimensionB, dimensionC) {
        const [w, a, b, c] = [weight, dimensionA, dimensionB, dimensionC];

        const shortSides = anotherSides([a, b, c]);
        const longest = longestSide([a, b, c]);

        switch (true) {
            // weight check
            case w > 25:
                return null;

            // longest side check (64)
            case longest > 64:
                return null;

            // paczkomatA check (64 x 38 x 8)
            case shortSides[0] <= 38 && shortSides[1] <= 38 && (shortSides[0] <= 8 || shortSides[1] <= 8):
                return { name: this.name.paczkomatA, price: this.price.paczkomatA };

            // paczkomatB check (64 x 38 x 19)
            case shortSides[0] <= 38 && shortSides[1] <= 38 && (shortSides[0] <= 19 || shortSides[1] <= 19):
                return { name: this.name.paczkomatB, price: this.price.paczkomatB };

            // paczkomatC check (64 x 41 x 38)
            case shortSides[0] <= 41 && shortSides[1] <= 41 && (shortSides[0] <= 38 || shortSides[1] <= 38):
                return { name: this.name.paczkomatC, price: this.price.paczkomatC };

            default:
                return null;
        }
    }
}