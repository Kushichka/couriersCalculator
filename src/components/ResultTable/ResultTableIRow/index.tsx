import React, { useContext } from "react";
import { Box, TableCell, TableRow } from "@mui/material";

import { Context } from "../../../Context";
import { TContext } from "../../../types/TContext";
import { LaunchIcon } from "../../ui/LaunchIcon";
import { config } from "../../../config";

export const ResultTableRow = () => {
    const { suitableCouriers, payment } = useContext(Context) as TContext;

    return suitableCouriers.map((item, index) => (
        <TableRow
            key={index}
            sx={{ bgcolor: item?.colors.bgColor }}
        >
            <TableCell
                component="th"
                scope="row"
                sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: item?.colors.fontColor,
                    borderColor: config.borderColor,
                }}
            >
                {item.logo && (
                    <img
                        style={{ width: "50px", height: "100%", marginRight: "10px" }}
                        src={item.logo}
                        alt="courier logo"
                    />
                )}

                {item?.name}
            </TableCell>
            <TableCell
                align="right"
                sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: item?.colors.fontColor,
                    borderColor: config.borderColor,
                }}
            >
                {item?.price.link ? (
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                        gap="0.5rem"
                    >
                        Sprawdź
                        <LaunchIcon link={item?.price.link} />
                    </Box>
                ) : null}

                {payment ? item?.price.onDelivery : item?.price.standard}
            </TableCell>
        </TableRow>
    ));
};
