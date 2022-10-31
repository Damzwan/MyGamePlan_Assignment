import React from 'react';
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import TeamInfo from "./components/teamInfo";
import CrossesInfoPanel from "./components/crossesInfoPanel";
import './App.css'

import {Container,} from "@mui/material";
import {theme} from "./theme";

function App() {


    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Navbar></Navbar>
                <Container maxWidth='lg'>
                    <TeamInfo></TeamInfo>
                </Container>

                <Container maxWidth='xl'>
                    <CrossesInfoPanel></CrossesInfoPanel>
                </Container>




            </ThemeProvider>
        </div>
    );
}

export default App;
