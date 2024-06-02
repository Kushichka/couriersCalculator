import React from "react";
import { Box, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

import { logos } from "../../assets/logos";
import { CourierLogo } from "../ui/CourierLogo";

export const PocztexInfo = () => {
    return (
        <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            // justifyContent="center"
            gap={{ xs: 2, sm: 4 }}
        >
            <CourierLogo
                name="Pocztex"
                src={logos.pocztex}
                width="6rem"
            />
            <Stack
                direction="column"
                flexGrow={1}
                gap={1}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Format</TableCell>
                            <TableCell align="center">Wymiar max</TableCell>
                            <TableCell>Masa max</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>S</TableCell>
                            <TableCell align="center">9x40x65</TableCell>
                            <TableCell>20 kg</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>M</TableCell>
                            <TableCell align="center">20x40x65</TableCell>
                            <TableCell>20 kg</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>L</TableCell>
                            <TableCell align="center">42x40x65</TableCell>
                            <TableCell>20 kg</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>XL</TableCell>
                            <TableCell align="center">60x60x70</TableCell>
                            <TableCell>20 kg</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>2XL</TableCell>
                            <TableCell>
                                Jeżeli którykolwiek z wymiarów lub masa przekracza parametry z formatu XL.
                                Wymiar max: A+B+c &#8804; 250cm (max długość = 120 cm)
                            </TableCell>
                            <TableCell>30 kg (z opcją rozszerzenia do 50 kg)</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Typography variant="body2">
                    <strong>Za naklejanie etykiet z kieliszkiem liczą dodatkowo 50% za przesyłke</strong>
                </Typography>
            </Stack>
        </Stack>
    );
};
