import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { ResultTableRow } from "./ResultTableIRow";
import { config } from "../../config";

export const ResultTable = () => {
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
                                borderColor: config.borderColor,
                            }}
                        >
                            Kurier
                        </TableCell>
                        <TableCell
                            sx={{
                                fontSize: "1.2rem",
                                color: "#343434",
                                borderColor: config.borderColor,
                            }}
                            align="right"
                        >
                            Cena&nbsp;(zł)
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <ResultTableRow />
                </TableBody>
            </Table>
        </TableContainer>
    );
};
