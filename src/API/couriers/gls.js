import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { prices } from "../prices";

export const gls = [
    {
        name: 'GLS paczka',
        price: prices.gls,
        requirements: [
            {
                formula: ({ w }) => w <= 31.5,
                description: 'Maksymalna waga 31,5 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 200,
                description: 'Maksymalna długość boku < 200'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return (shortSides[0] <= 80 && shortSides[1] <= 80) &&
                        (shortSides[0] <= 60 || shortSides[1] <= 60);
                },
                description: 'długość 200, szerokość 80, a wysokość 60'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return 2 * shortSides[0] + 2 * shortSides[1] + longestSide([a, b, c]) <= 300;
                },
                description: '(2 * a + 2 * b + najdłuższy bok) < 300'
            }
        ]
    }
];