import { longestSide } from "../../utils/longestSide";

export const pocztex = [
    {
        name: 'Pocztex paczka',
        price: '8',
        requirements: [
            {
                formula: ({ w }) => w <= 20,
                description: 'Maksymalna waga 20 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 120,
                description: 'Maksymalna długość boku < 120'
            },
            {
                formula: ({ a, b, c }) => a + b + c <= 250,
                description: 'Suma boków < 250'
            }
        ]
    },
    {
        name: 'Pocztex 2XL',
        price: '22',
        requirements: [
            {
                formula: ({ w }) => w <= 30,
                description: 'Maksymalna waga 30 kg'
            },
            {
                formula: ({ a, b, c }) => {
                    const longest = longestSide([a, b, c]);
                    return longest > 120 && longest <= 150;
                },
                description: 'Maksymalna długość boku < 150'
            },
            {
                formula: ({ a, b, c }) => a + b + c > 250 && a + b + c <= 300,
                description: 'długość + szerokość + wysokość < 300'
            },
            {
                formula: ({ a, b, c }) => {
                    return a + b + c <= 250;
                },
                description: 'Suma boków < 250'
            }
        ]
    },
];