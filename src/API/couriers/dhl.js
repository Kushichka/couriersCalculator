import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";

export const dhl = [
    {
        name: 'DHL paczka',
        price: '20',
        requirements: [
            {
                formula: ({ w }) => w <= 31.5,
                description: 'Maksymalna waga 31,5 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 120,
                description: 'Maksymalna długość boku < 120'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return shortSides[0] <= 60 && shortSides[1] <= 60;
                },
                description: 'Pozostałe boki < 60'
            },
            {
                formula: ({ a, b, c }) => {
                    return a + b + c <= 240;
                },
                description: 'Suma boków < 300'
            }
        ]
    }
];