import React from 'react';
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import TeamInfo from "./components/teamInfo";
import CrossesInfoPanel from "./components/crossesInfoPanel";

import {Container,} from "@mui/material";
import {theme} from "./theme";

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Navbar/>
                <Container maxWidth='xl'>
                    <TeamInfo/>
                    <CrossesInfoPanel/>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
