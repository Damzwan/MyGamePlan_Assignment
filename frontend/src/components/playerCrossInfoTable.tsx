import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Avatar, tableCellClasses} from "@mui/material";

function createData(
    name: number,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData(11, 159, 6.0, 24, 4.0),
    createData(12, 237, 9.0, 37, 4.3),
    createData(13, 262, 16.0, 24, 6.0),
    createData(14, 305, 3.7, 67, 4.3),
    createData(18, 356, 16.0, 49, 3.9),
];

function PlayerCrossInfoTable() {
    return (
        <TableContainer>
            <Table sx={{
                minWidth: 650, [`& .${tableCellClasses.root}`]: {
                    borderBottom: "none"
                }
            }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Player</TableCell>
                        <TableCell>Crosses</TableCell>
                        <TableCell>Early</TableCell>
                        <TableCell>Mid</TableCell>
                        <TableCell>Late</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="left">
                                <Avatar alt="Remy Sharp" sx={{width: 64, height: 64, bgcolor: 'primary.light'}}
                                        src="/static/images/avatar/1.jpg"/>
                            </TableCell>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="left">{row.calories}</TableCell>
                            <TableCell align="left">{row.fat}</TableCell>
                            <TableCell align="left">{row.carbs}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PlayerCrossInfoTable;
