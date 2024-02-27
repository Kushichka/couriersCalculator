import { inpost } from "./couriers/inpost";
import { dpd } from "./couriers/dpd";
import { dhl } from "./couriers/dhl";
import { fedex } from "./couriers/fedex";
import { orlen } from "./couriers/orlen";
import { pocztex } from "./couriers/pocztex";
import { ups } from "./couriers/ups";
import { gls } from "./couriers/gls";

export const data = [
    ...inpost,
    ...dpd,
    ...gls,
    ...dhl,
    ...fedex,
    ...orlen,
    ...pocztex,
    ...ups
];