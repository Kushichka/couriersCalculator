import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";

export const dpd = [
    {
        name: 'DPD kurier',
        price: '12',
        requirements: [
            {
                formula: ({ w }) => w <= 31.5,
                description: 'Maksymalna waga 31,5 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 150,
                description: 'Maksymalna długość boku < 150'
            },
            {
                formula: ({ a, b, c }) => a + b + c <= 300,
                description: '(Długość + Szerokość + Wysokość) < 300'
            }
        ]
    },
    {
        name: 'DPD punkt odbioru (Pickup)',
        price: '9',
        requirements: [
            {
                formula: ({ w }) => w <= 20,
                description: 'Maksymalna waga 20 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 150,
                description: 'Maksymalna długość boku < 150'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return 2 * shortSides[0] + 2 * shortSides[1] + longestSide([a, b, c]) <= 300;
                },
                description: '(2 * a + 2 * b + najdłuższy bok) < 300'
            }
        ]
    },
    {
        name: 'DPD Pickup Station',
        price: '11',
        requirements: [
            {
                formula: ({ w }) => w <= 20,
                description: 'Maksymalna waga 20 kg'
            },
            {
                formula: ({ a, b, c }) => longestSide([a, b, c]) <= 59,
                description: 'Maksymalna długość boku < 59'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return (shortSides[0] <= 50 && shortSides[1] <= 50) &&
                        (shortSides[0] <= 44 || shortSides[1] <= 44);
                },
                description: 'długość 59, szerokość 44, a wysokość 50'
            }
        ]
    },
    {
        name: 'DPD paczka niestandardowa',
        price: '50',
        requirements: [
            {
                formula: ({ w }) => w > 31.5 && w <= 50,
                description: 'Maksymalna waga 50 kg'
            },
            {
                formula: ({ a, b, c }) => {
                    const longSide = longestSide([a, b, c]);
                    return longSide > 150 && longSide <= 300;
                },
                description: 'Maksymalna długość boku < 300'
            },
            {
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return shortSides[0] + shortSides[1] <= 60;
                },
                description: 'Suma pozostałych boków < 60'
            }
        ]
    }
];