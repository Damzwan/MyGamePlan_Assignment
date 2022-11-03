import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Doughnut} from 'react-chartjs-2';
import {Avatar, Box, Grid, tableCellClasses, Typography} from "@mui/material";
import {aggregateCrossEvents, createPlayerImg} from '../helpers';
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PlayerCrossInfoTable({crossEvents}) {

    if (!crossEvents) return null
    const {crossesByType, topNPlayers} = aggregateCrossEvents(crossEvents)

    const crossByTypePieData = {
        labels: ['Early', 'Mid', 'Late'],
        datasets: [
            {
                label: '# of Crosses',
                data: [crossesByType.early.fail + crossesByType.early.success, crossesByType.mid.fail + crossesByType.mid.success, crossesByType.late.fail + crossesByType.late.success],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const crossBySuccessPieData = {
        labels: ['Success', 'Failure'],
        datasets: [
            {
                label: '# of Crosses',
                data: [crossesByType.early.success + crossesByType.mid.success + crossesByType.late.success, crossesByType.early.fail + crossesByType.mid.fail + crossesByType.late.fail],
                backgroundColor: [
                    'rgba(144, 238, 144, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(144, 238, 144, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Box>
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
                        {topNPlayers.map((player, index) => (
                            <TableRow
                                key={index}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="left">
                                    <Avatar alt="Remy Sharp" sx={{width: 64, height: 64, bgcolor: 'primary.light'}}
                                            src={createPlayerImg(player.player_id)}/>
                                </TableCell>
                                <TableCell component="th" scope="row">{player.crossQty}</TableCell>
                                <TableCell align="left">
                                    <Typography style={{
                                        display: 'inline-block',
                                        color: 'green'
                                    }}>{player.earlyCrossSuccessQty}</Typography>
                                    /
                                    <Typography style={{
                                        display: 'inline-block',
                                        color: 'red'
                                    }}>{player.earlyCrossFailQty}</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography style={{
                                        display: 'inline-block',
                                        color: 'green'
                                    }}>{player.midCrossSuccessQty}</Typography>
                                    /
                                    <Typography style={{
                                        display: 'inline-block',
                                        color: 'red'
                                    }}>{player.midCrossFailQty}</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography style={{
                                        display: 'inline-block',
                                        color: 'green'
                                    }}>{player.lateCrossSuccessQty}</Typography>
                                    /
                                    <Typography style={{
                                        display: 'inline-block',
                                        color: 'red'
                                    }}>{player.lateCrossFailQty}</Typography>
                                </TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Grid container spacing={2}>
                <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                    <Doughnut data={crossByTypePieData}/>
                </Grid>
                <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                    <Doughnut data={crossBySuccessPieData}/>
                </Grid>
            </Grid>
        </Box>

    );
}

export default PlayerCrossInfoTable;
