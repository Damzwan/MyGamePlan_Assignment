import React, {useEffect} from 'react';
import pitch from '../assets/pitch.svg'; // with import

import {Box, Grid,} from "@mui/material";
import {useRecoilValue} from "recoil";
import {selectedTeam as selectedTeamAtom, selectedFormation as selectedFormationAtom} from "../atoms";
import {useCrossEventsQuery, useTeamQuery} from "../graphql/gen-types";
import {aggregateAndFilterCrossEventsByPlayer} from "../helpers";
import PlayerCrossInfoTable from "./playerCrossInfoTable";


function CrossesInfoPanel() {
    const selectedTeam = useRecoilValue(selectedTeamAtom)
    const selectedFormation = useRecoilValue(selectedFormationAtom)
    const {data, refetch} = useCrossEventsQuery({
        variables: {
            teamId: parseInt(selectedTeam),
            formation: selectedFormation
        }
    });

    useEffect(() => {
        refetch({teamId: parseInt(selectedTeam), formation: selectedFormation})
    }, [selectedTeam, selectedFormation]);


    return (
        <div className="CrossesInfoPanel">
            <Grid container sx={{mt: 4}} spacing={4}>
                <Grid item xs={8}>
                    <PlayerCrossInfoTable></PlayerCrossInfoTable>
                </Grid>
                <Grid item xs={4}>
                    <Box
                        component="img"
                        sx={{
                            height: "100%",
                            width: "100%",
                        }}
                        alt="The house from the offer."
                        src={pitch}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default CrossesInfoPanel;
