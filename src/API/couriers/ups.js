import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { prices } from "../prices";

export class Courier {
}

export const ups = [
    {
        name: 'UPS paczka',
        price: prices.ups,
        requirements: [
            {
                formula: ({ w }) => w <= 31.5,
                description: 'Maksymalna waga 31,5 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 274,
                description: 'Maksymalna długość boku < 274'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return shortSides[0] * 2 + shortSides[1] * 2 + longestSide([a, b, c]) <= 400;
                },
                description: 'Łączne wymiary długości i obwodu < 400'
            }
        ]
    }
];