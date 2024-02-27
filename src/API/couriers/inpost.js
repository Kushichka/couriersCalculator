import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";

export const inpost = [
    {
        name: 'InPost paczkomat "A"',
        price: '11,99',
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
        price: '11,99',
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
        price: '11,99',
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
    },
    {
        name: 'InPost kurier',
        price: '14,99',
        requirements: [
            {
                formula: ({ w }) => w <= 25,
                description: 'Maksymalna waga 25 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 120,
                description: 'Maksymalna długość boku < 120'
            },
            {
                formula: ({ a, b, c }) => a + b + c <= 220,
                description: 'Suma wymiarów < 220'
            }
        ]
    },
    {
        name: 'InPost paczka niestandardowa',
        price: '19,99',
        requirements: [
            {
                formula: ({ w }) => w <= 25,
                description: 'Maksymalna waga 25 kg'
            },
            {
                formula: ({ a, b, c }) => {
                    return longestSide([a, b, c]) > 120 || a + b + c > 220
                },
                description: 'jeden z wymiarów > 120 lub długość + szerokość + wysokość > 220'
            }
        ]
    }
];