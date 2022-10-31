import React, {useEffect} from 'react';
import {selectedTeam as selectedTeamAtom} from "../atoms";
import {Avatar, Grid,} from "@mui/material";
import {useRecoilValue} from "recoil";
import {useTeamQuery} from "../graphql/gen-types";
import {teamImg,} from "../localData";
import belgium from '../assets/belgium.png'


function TeamInfo() {
    const selectedTeam = useRecoilValue(selectedTeamAtom)
    const {data, refetch} = useTeamQuery({variables: {teamId: parseInt(selectedTeam)}});

    if (data) console.log(teamImg(data.team.image))

    useEffect(() => {
        refetch({teamId: parseInt(selectedTeam)})
    }, [selectedTeam]);

    return (
        <div className="TeamInfo">
            <Grid container spacing={2} sx={{mt: 4}}>
                <Grid item xs={2}>
                    <Avatar alt="Team image" sx={{width: 156, height: 156, bgcolor: 'primary.light'}}
                            src={data ? teamImg(data.team.image) : null}/>
                </Grid>
                <Grid item xs={4}>
                    <h1>{data ? data.team.name : null}</h1>
                    <Avatar alt="Remy Sharp" sx={{width: 64, height: 64}}
                            src={belgium}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default TeamInfo;
