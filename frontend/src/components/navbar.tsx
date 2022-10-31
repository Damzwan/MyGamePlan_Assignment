import React from 'react';

import {AppBar, Container, FormControl, MenuItem, Select, SelectChangeEvent, Toolbar, Typography,} from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import {selectedTeam as selectedTeamAtom, selectedFormation as selectedFormationAtom} from "../atoms";
import {formations} from "../localData";
import {useRecoilState} from "recoil";
import {useTeamsQuery} from "../graphql/gen-types";

function Navbar() {
    const [selectedTeam, setSelectedTeam] = useRecoilState(selectedTeamAtom);
    const [selectedFormation, setSelectedFormation] = useRecoilState(selectedFormationAtom);

    const {data, loading} = useTeamsQuery();

    const handleTeamChange = (event: SelectChangeEvent) => {
        setSelectedTeam(event.target.value);
    };

    const handleFormationChange = (event: SelectChangeEvent) => {
        setSelectedFormation(event.target.value);
    };

    if (loading) return null;

    return (
        <div className="Navbar">
            <AppBar position="static" color="primary">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            MyGamePlan
                        </Typography>

                        <FormControl>
                            <Select
                                value={selectedTeam}
                                onChange={handleTeamChange}
                                displayEmpty
                                inputProps={{"aria-label": "Without label"}}
                            >
                                <MenuItem disabled value="">
                                    <em>Team</em>
                                </MenuItem>

                                {data.teams.map((team, index) => (
                                    <MenuItem key={index} value={team._id}>{team.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl>
                            <Select
                                value={selectedFormation}
                                onChange={handleFormationChange}
                                displayEmpty
                                inputProps={{"aria-label": "Without label"}}
                                disabled={selectedTeam === ''}
                            >
                                <MenuItem value={null}>
                                    <em>Formation</em>
                                </MenuItem>

                                {formations.map((formation, index) => (
                                    <MenuItem key={index} value={formation}>{formation}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>


                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default Navbar;
