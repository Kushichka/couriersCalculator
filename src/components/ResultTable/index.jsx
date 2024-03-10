import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import PropTypes from "prop-types";

export const ResultTable = ({ data }) => {
    const items = data.map((item) => (
        <TableRow
            key={item.courier}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {item.courier}
            </TableCell>
            <TableCell align="right">{item.price}</TableCell>
        </TableRow>
    ));

    return (
        <TableContainer
            component={Paper}
            elevation={3}
        >
            <Table sx={{ minWidth: 300 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Kurier</TableCell>
                        <TableCell align="right">Cena&nbsp;(zł)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{items}</TableBody>
            </Table>
        </TableContainer>
    );
};

ResultTable.propTypes = {
    data: PropTypes.array.isRequired,
};
