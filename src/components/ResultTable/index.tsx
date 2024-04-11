import React, { useContext } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { Context } from "../../Context";
import { TContext } from "../../types/TContext";

const borderColor = "#59595a";

export const ResultTable = () => {
    const { suitableCouriers, payment } = useContext(Context) as TContext;

    const items = suitableCouriers.map((item, index) => (
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
                    borderColor: borderColor,
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
                    borderColor: borderColor,
                }}
            >
                {payment ? item?.price.onDelivery : item?.price.standard}
            </TableCell>
        </TableRow>
    ));

    return (
        <TableContainer
            component={Paper}
            elevation={3}
            sx={{ backgroundColor: "secondary.main" }}
        >
            <Table sx={{ minWidth: 300 }}>
                <TableHead>
                    <TableRow>
                        <TableCell
                            sx={{
                                fontSize: "1.2rem",
                                color: "#343434",
                                borderColor: borderColor,
                            }}
                        >
                            Kurier
                        </TableCell>
                        <TableCell
                            sx={{
                                fontSize: "1.2rem",
                                color: "#343434",
                                borderColor: borderColor,
                            }}
                            align="right"
                        >
                            Cena&nbsp;(zł)
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{items}</TableBody>
            </Table>
        </TableContainer>
    );
};
