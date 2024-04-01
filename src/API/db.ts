import { Schenker } from "./couriers/schenker";
import { Inpost } from "./couriers/inpost";
import { Dpd } from "./couriers/dpd";
import { Gls } from "./couriers/gls";
import { Dhl } from "./couriers/dhl";

const inpost = new Inpost();
const dpd = new Dpd();
const gls = new Gls();
const dhl = new Dhl();
const schenker = new Schenker();

export const couriers = [inpost, dpd, gls, dhl, schenker];
