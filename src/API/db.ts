import { Schenker } from "./couriers/schenker";
import { Inpost } from "./couriers/inpost";
import { Dpd } from "./couriers/dpd";
import { Gls } from "./couriers/gls";
import { Dhl } from "./couriers/dhl";
import { Pocztex } from "./couriers/pocztex";
import { Raben } from "./couriers/raben";
import { Ambro } from "./couriers/ambro";

const inpost = new Inpost();
const dpd = new Dpd();
const gls = new Gls();
const dhl = new Dhl();
const schenker = new Schenker();
const pocztex = new Pocztex();
const raben = new Raben();
const ambro = new Ambro();

export const couriers = [inpost, dpd, gls, dhl, pocztex, schenker, raben, ambro];
