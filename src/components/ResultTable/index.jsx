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
            <TableCell
                component="th"
                scope="row"
                sx={{
                    fontSize: "1rem",
                    color: "#343434",
                    borderColor: "#59595a",
                }}
            >
                {item.courier}
            </TableCell>
            <TableCell
                align="right"
                sx={{
                    fontSize: "1rem",
                    color: "#343434",
                    borderColor: "#59595a",
                }}
            >
                {item.price}
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

ResultTable.propTypes = {
    data: PropTypes.array.isRequired,
};
