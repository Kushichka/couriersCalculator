import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";
import { prices } from "../prices";

export const inpost = [
    {
        name: 'InPost paczkomat "A"',
        price: prices.inpostA,
        requirements: [
            {
                formula: ({ w }) => w <= 25,
                description: 'Maksymalna waga 25 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 64,
                description: 'Maksymalna długość boku < 64'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return (shortSides[0] <= 38 && shortSides[1] <= 38) &&
                        (shortSides[0] <= 8 || shortSides[1] <= 8);
                },
                description: '8 x 38 x 64'
            }
        ]
    },
    {
        name: 'InPost paczkomat "B"',
        price: prices.inpostB,
        requirements: [
            {
                formula: ({ w }) => w <= 25,
                description: 'Maksymalna waga 25 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 64,
                description: 'Maksymalna długość boku < 64'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return (shortSides[0] <= 38 && shortSides[1] <= 38) &&
                        (shortSides[0] <= 19 || shortSides[1] <= 19);
                },
                description: '19 x 38 x 64'
            }
        ]
    },
    {
        name: 'InPost paczkomat "C"',
        price: prices.inpostC,
        requirements: [
            {
                formula: ({ w }) => w <= 25,
                description: 'Maksymalna waga 25 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 64,
                description: 'Maksymalna długość boku < 64'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return (shortSides[0] <= 41 && shortSides[1] <= 41) &&
                        (shortSides[0] <= 38 || shortSides[1] <= 38);
                },
                description: '41 x 38 x 64'
            }
        ]
    }
];