import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { prices } from "../prices";

export class Dhl {
    constructor() {
        this.name = {
            weightFrom0To5: 'DHL (do 5 kg)',
            weightFrom5To10: 'DHL (do 10 kg)',
            weightFrom10To20: 'DHL (do 20 kg)',
            weightFrom20To31: 'DHL (do 31,5 kg)'
        };
        this.price = prices.dhl;
        this.colors = {
            bgColor: '#ffcc00',
            fontColor: '#d40511'
        }
    }

    calculatePrice(weight, dimensionA, dimensionB, dimensionC) {
        const [w, a, b, c] = [weight, dimensionA, dimensionB, dimensionC];

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
                return { name: this.name.weightFrom0To5, price: this.price.weightFrom0To5, colors: this.colors };

            // weight check (5 - 10)
            case w > 5 && w <= 10:
                return { name: this.name.weightFrom5To10, price: this.price.weightFrom5To10, colors: this.colors };

            // weight check (10 - 20)
            case w > 10 && w <= 20:
                return { name: this.name.weightFrom10To20, price: this.price.weightFrom10To20, colors: this.colors };

            // weight check (5 - 10)
            case w > 20 && w <= 31.5:
                return { name: this.name.weightFrom20To31, price: this.price.weightFrom20To31, colors: this.colors };

            default:
                return null;
        }
    }
}