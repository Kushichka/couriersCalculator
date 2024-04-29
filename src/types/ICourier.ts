export type TPrice = {
    standard: string;
    onDelivery: string;
};

export type TLink = {
    link: string;
};

export type TCourierPrice = TPrice | TLink;

export type TColors = { font: string };

export interface ISuitableCourier {
    logo: string;
    price: TCourierPrice;
    colors: TColors;
    description?: string;
}

export type TCalculatePrice = (
    weight: string,
    dimensionA: string,
    dimensionB: string,
    dimensionC: string
) => ISuitableCourier | null;

export interface ICourier {
    logo: string;
    price: {
        [key: string]: TCourierPrice;
    };
    colors: TColors;
    calculatePrice: TCalculatePrice;
}
