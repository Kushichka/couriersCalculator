import { anotherSides } from "../../utils/anotherSides";
import { longestSide } from "../../utils/longestSide";

export const fedex = [
    {
        name: 'Fedex paczka',
        price: '25',
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
                formula: ({ a, b, c }) => {
                    const shortSides = anotherSides([a, b, c]);
                    return shortSides[0] <= 70 && shortSides[1] <= 70;
                },
                description: 'Pozostałe boki < 70'
            },
            {
                formula: ({ a, b, c }) => {
                    const secondLongesttSides = Math.max(...anotherSides([a, b, c]));
                    return longestSide([a, b, c]) + secondLongesttSides < 180;
                },
                description: 'Suma dwóch najdłuższych krawędzi < 180'
            }
        ]
    }
];