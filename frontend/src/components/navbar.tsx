import React from 'react';

import {AppBar, Container, FormControl, MenuItem, Select, SelectChangeEvent, Toolbar, Typography,} from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import {selectedFormation as selectedFormationAtom, selectedTeam as selectedTeamAtom} from "../atoms";
import {formations} from "../localData";
import {useRecoilState} from "recoil";
import {useTeamsQuery} from "../graphql/gen-types";

function Navbar() {
    const [selectedTeam, setSelectedTeam] = useRecoilState(selectedTeamAtom);
    const [selectedFormation, setSelectedFormation] = useRecoilState(selectedFormationAtom);

    const {data} = useTeamsQuery();

    const handleTeamChange = (event: SelectChangeEvent) => {
        const [_id, name] = event.target.value.split(/_(.*)/s)
        setSelectedTeam({_id: _id, name: name});
    };

    const handleFormationChange = (event: SelectChangeEvent) => {
        setSelectedFormation(event.target.value);
    };

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
                                value={selectedTeam ? selectedTeam._id + '_' + selectedTeam.name : ""}
                                onChange={handleTeamChange}
                                displayEmpty
                                inputProps={{
                                    "aria-label": "Without label", MenuProps: {
                                        MenuListProps: {
                                            sx: {
                                                backgroundColor: 'primary.main'
                                            }
                                        }
                                    }
                                }}
                            >
                                <MenuItem disabled value="">
                                    <em>Team</em>
                                </MenuItem>

                                {data ? data.teams.map((team, index) => (
                                    <MenuItem key={index} value={team._id + '_' + team.name}>{team.name}</MenuItem>
                                )) : []}
                            </Select>
                        </FormControl>

                        <FormControl>
                            <Select
                                value={selectedFormation}
                                onChange={handleFormationChange}
                                displayEmpty
                                inputProps={{
                                    "aria-label": "Without label", MenuProps: {
                                        MenuListProps: {
                                            sx: {
                                                backgroundColor: 'primary.main'
                                            }
                                        }
                                    }
                                }}
                                disabled={selectedTeam === null}
                            >
                                <MenuItem value={""}>
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
