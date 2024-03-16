import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { gabariteWeight } from "../../utils/gabariteWeight";
import { prices } from "../prices";

export class Gls {
    constructor() {
        this.name = {
            weightFrom0To2: 'GLS (do 2 kg)',
            weightFrom2To5: 'GLS (do 5 kg)',
            weightFrom5To10: 'GLS (do 10 kg)',
            weightFrom10To15: 'GLS (do 15 kg)',
            weightFrom15To20: 'GLS (do 20 kg)',
            weightFrom20To25: 'GLS (do 25 kg)',
            weightFrom25To31: 'GLS (do 31,5 kg)'
        };
        this.price = prices.gls;
        this.colors = {
            bgColor: '#061ab1',
            fontColor: '#ffffff'
        };
    }

    calculatePrice(weight, dimensionA, dimensionB, dimensionC) {
        const [w, a, b, c] = [weight, dimensionA, dimensionB, dimensionC];

        const shortSides = anotherSides([a, b, c]);
        const longest = longestSide([a, b, c]);
        const gabarite = gabariteWeight([a, b, c]);

        switch (true) {
            // weight check (31.5)
            case w > 31.5:
                return null;

            // longest side check (180)
            case longest > 180:
                return null;

            // package volume check (a + (2 * b) + (2 * c)) <= 300)
            case 2 * shortSides[0] + 2 * shortSides[1] + longest > 300:
                return null;

            // gabarite weight check
            case w <= 10 && gabarite > 25:
                return { name: this.name.weightFrom5To10, price: this.price.weightFrom5To10, colors: this.colors };

            // weight check (2)
            case w <= 2:
                return { name: this.name.weightFrom0To2, price: this.price.weightFrom0To2, colors: this.colors };

            // weight check (5)
            case w <= 5:
                return { name: this.name.weightFrom2To5, price: this.price.weightFrom2To5, colors: this.colors };

            default:
                return null;
        }
    }
}