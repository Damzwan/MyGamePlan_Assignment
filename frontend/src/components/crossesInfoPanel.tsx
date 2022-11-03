import React, { useEffect } from 'react';
import pitch from '../assets/pitch.svg'; // with import

import { useRecoilState } from "recoil";
import { Box, Grid, } from "@mui/material";
import { useRecoilValue } from "recoil";
import { selectedTeam as selectedTeamAtom, selectedFormation as selectedFormationAtom } from "../atoms";
import { useCrossEventsQuery } from "../graphql/gen-types";
import { aggregateAndFilterCrossEventsByPlayer, groupCrossesByLocation } from "../helpers";
import PlayerCrossInfoTable from "./playerCrossInfoTable";
import Pitch from "./pitch";


function CrossesInfoPanel() {
    const selectedTeam = useRecoilValue(selectedTeamAtom)
    const selectedFormation = useRecoilValue(selectedFormationAtom)

    const { data, refetch } = useCrossEventsQuery({
        variables: {
            teamId: parseInt(selectedTeam ? selectedTeam._id : null),
            formation: selectedFormation
        }
    });

    useEffect(() => {
        refetch({ teamId: parseInt(selectedTeam ? selectedTeam._id : null), formation: selectedFormation })
    }, [selectedTeam, selectedFormation]);


    if (!selectedTeam) return null

    return (
        <div className="CrossesInfoPanel">
            <Grid container sx={{ mt: 4 }} spacing={4}>
                <Grid item xs={8}>
                    <PlayerCrossInfoTable topPlayers={data ? aggregateAndFilterCrossEventsByPlayer(data) : null} />
                </Grid>
                <Grid item xs={4}>
                    <Pitch crossEvents={data ? groupCrossesByLocation(data) : null} />
                </Grid>
            </Grid>
        </div>
    );
}

export default CrossesInfoPanel;
