import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Avatar, tableCellClasses, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { createPlayerImg } from '../helpers';
import { Box } from '@mui/system';



function PlayerCrossInfoTable(props: any) {

    if (!props.topPlayers) return null

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
                    {props.topPlayers.map((player, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">
                                <Avatar alt="Remy Sharp" sx={{ width: 64, height: 64, bgcolor: 'primary.light' }}
                                    src={createPlayerImg(player.player_id)} />
                            </TableCell>
                            <TableCell component="th" scope="row">{player.crossQty}</TableCell>
                            <TableCell align="left">
                                <Typography style={{ display: 'inline-block', color: 'green' }}>{player.earlyCrossSuccessQty}</Typography>
                                /
                                <Typography style={{ display: 'inline-block', color: 'red' }}>{player.earlyCrossFailQty}</Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography style={{ display: 'inline-block', color: 'green' }}>{player.midCrossSuccessQty}</Typography>
                                /
                                <Typography style={{ display: 'inline-block', color: 'red' }}>{player.midCrossFailQty}</Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography style={{ display: 'inline-block', color: 'green' }}>{player.lateCrossSuccessQty}</Typography>
                                /
                                <Typography style={{ display: 'inline-block', color: 'red' }}>{player.lateCrossFailQty}</Typography>
                            </TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PlayerCrossInfoTable;
