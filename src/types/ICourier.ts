export type TPrice = { standard?: string; onDelivery?: string; link?: string };

export type TColors = { bgColor: string; fontColor: string };

export interface ISuitableCourier {
    name: string;
    price: TPrice;
    colors: TColors;
    logo?: string;
}

export type TCalculatePrice = (
    weight: string,
    dimensionA: string,
    dimensionB: string,
    dimensionC: string
) => ISuitableCourier | null;

export interface ICourier {
    name: {
        [key: string]: string;
    };
    price: {
        [key: string]: TPrice;
    };
    colors: TColors;
    logo?: React.ReactNode;
    calculatePrice: TCalculatePrice;
}
