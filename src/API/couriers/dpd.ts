import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { getGabariteWeight } from "../../utils/getGabariteWeight";
import { prices } from "../prices";
import { ICourier, ISuitableCourier, TColors, TPrice } from "../../types/ICourier";
import { config } from "../../config";
// import { images } from "../../assets/images";

export class Dpd implements ICourier {
    name: {
        [key: string]: string;
    };
    price: {
        [key: string]: TPrice;
    };
    colors: TColors;
    logo: string;
    constructor() {
        this.name = {
            weightFrom0To2: "DPD (do 2 kg)",
            weightFrom2To5: "DPD (do 5 kg)",
            weightFrom5To10: "DPD (do 10 kg)",
            weightFrom10To15: "DPD (do 15 kg)",
            weightFrom15To20: "DPD (do 20 kg)",
            weightFrom20To25: "DPD (do 25 kg)",
            weightFrom25To31: "DPD (do 31,5 kg)",
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
            case w > 31.5:
                return null;

            // longest side check (150)
            case longest > config.longestParcelSide.dpd:
                return null;

            // 300 - max for DPD
            case 2 * shortSides[0] + 2 * shortSides[1] + longest > 300:
                return null;

            // gabarite weight check
            case w <= 10 && gabariteWeight > 25:
                return null;

            // weight check (5 - 10)
            case w > 5 && w <= 10:
                return {
                    name: this.name.weightFrom5To10,
                    price: this.price.weightFrom5To10,
                    colors: this.colors,
                };

            // weight check (10 - 15)
            case w > 10 && w <= 15:
                return {
                    name: this.name.weightFrom10To15,
                    price: this.price.weightFrom10To15,
                    colors: this.colors,
                };

            // weight check (15 - 20)
            case w > 15 && w <= 20:
                return {
                    name: this.name.weightFrom15To20,
                    price: this.price.weightFrom15To20,
                    colors: this.colors,
                    // logo: this.logo,
                };

            // weight check (20 - 25)
            case w > 20 && w <= 25:
                return {
                    name: this.name.weightFrom20To25,
                    price: this.price.weightFrom20To25,
                    colors: this.colors,
                };

            // weight check (25 - 31.5)
            case w > 25:
                return {
                    name: this.name.weightFrom25To31,
                    price: this.price.weightFrom25To31,
                    colors: this.colors,
                };

            default:
                return null;
        }
    }
}
