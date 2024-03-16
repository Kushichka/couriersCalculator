import { useContext } from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

import { Context } from "../../Context";

export const ResultTable = () => {
    const { suitableCouriers, payment } = useContext(Context);

    const items = suitableCouriers.map((item, index) => (
        <TableRow
            key={index}
            sx={{ bgcolor: item?.colors?.bgColor }}
        >
            <TableCell
                component="th"
                scope="row"
                sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: item?.colors?.fontColor,
                    borderColor: "#59595a",
                }}
            >
                {item?.name}
            </TableCell>
            <TableCell
                align="right"
                sx={{
                    fontSize: "1rem",
                    color: item?.colors?.fontColor,
                    borderColor: "#59595a",
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
                                borderColor: "#59595a",
                            }}
                        >
                            Kurier
                        </TableCell>
                        <TableCell
                            sx={{
                                fontSize: "1.2rem",
                                color: "#343434",
                                borderColor: "#59595a",
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
