import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { prices } from "../prices";

export const orlen = [
    {
        name: 'ORLEN paczka',
        price: prices.orlen,
        requirements: [
            {
                formula: ({ w }) => w <= 20,
                description: 'Maksymalna waga 20 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 20,
                description: 'Maksymalna długość boku < 20'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return (shortSides[0] <= 30 && shortSides[1] <= 30) &&
                        (shortSides[0] <= 20 || shortSides[1] <= 20);
                },
                description: 'długość 59, szerokość 44, a wysokość 50'
            }
        ]
    }
];