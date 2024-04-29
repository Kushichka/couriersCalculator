export type TPrice = {
    standard: string;
    onDelivery: string;
};

export type TLink = {
    link: string;
};

export type TCourierPrice = TPrice | TLink;

export interface ISuitableCourier {
    name: string;
    logo: string;
    price: TCourierPrice;
    description?: string;
}

export type TCalculatePrice = (
    weight: string,
    dimensionA: string,
    dimensionB: string,
    dimensionC: string
) => ISuitableCourier | null;

export interface ICourier {
    name: string;
    logo: string;
    price: {
        [key: string]: TCourierPrice;
    };
    calculatePrice: TCalculatePrice;
}
