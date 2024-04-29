import React, { useContext } from "react";
import { Box, TableCell, TableRow } from "@mui/material";

import { Context } from "../../../Context";
import { TContext } from "../../../types/TContext";
import { LaunchIcon } from "../../ui/LaunchIcon";
import { config } from "../../../config";
import { sortCouriers } from "../../../utils/sortCouriers";
import { CourierLogo } from "../../ui/CourierLogo";

export const ResultTableRow = () => {
    const { suitableCouriers, payment } = useContext(Context) as TContext;
    const sortedCouriers = sortCouriers(suitableCouriers, payment);

    return sortedCouriers.map((item, index) => (
        <TableRow key={index}>
            <TableCell
                component="th"
                scope="row"
                sx={{
                    padding: "0 1rem",
                    height: "3rem",
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderColor: config.borderColor,
                }}
            >
                {item.logo && (
                    <CourierLogo
                        src={item.logo}
                        name={item.name}
                    />
                )}
            </TableCell>
            <TableCell
                align="center"
                sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderColor: config.borderColor,
                }}
            >
                {item?.description}
            </TableCell>
            <TableCell
                align="right"
                sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderColor: config.borderColor,
                }}
            >
                {"link" in item.price ? (
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                        gap="0.5rem"
                    >
                        Sprawdź
                        <LaunchIcon link={item.price.link} />
                    </Box>
                ) : payment ? (
                    item.price.onDelivery
                ) : (
                    item.price.standard
                )}
            </TableCell>
        </TableRow>
    ));
};
