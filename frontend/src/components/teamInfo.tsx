import React, { useEffect } from 'react';
import { selectedTeam as selectedTeamAtom } from "../atoms";
import { Avatar, Grid, } from "@mui/material";
import { useRecoilValue } from "recoil";
import belgium from '../assets/belgium.png'
import { createTeamImg } from '../helpers';


function TeamInfo() {
    const selectedTeam = useRecoilValue(selectedTeamAtom)

    if (!selectedTeam) return null

    return (
        <div className="TeamInfo">
            <Grid container spacing={2} sx={{ mt: 4 }}>
                <Grid item xs={2}>
                    <Avatar alt="Team image" sx={{ width: 156, height: 156, bgcolor: 'primary.light' }}
                        src={createTeamImg(selectedTeam._id)} />
                </Grid>
                <Grid item xs={4}>
                    <h1>{selectedTeam.name}</h1>
                    <Avatar alt="Remy Sharp" sx={{ width: 64, height: 64 }}
                        src={belgium} />
                </Grid>
            </Grid>
        </div>
    );
}

export default TeamInfo;
