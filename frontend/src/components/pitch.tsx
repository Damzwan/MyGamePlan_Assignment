import React, {useState} from 'react';
import pitch from '../assets/pitch.svg'; // with import
import {Circle, Group, Layer, Line, Rect, Stage} from 'react-konva';
import {useRecoilValue} from "recoil";
import {selectedTeam as selectedTeamAtom} from "../atoms";
import {Avatar, Card, CardContent, Grid, Popover, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import {createTeamImg} from "../helpers";

enum CrossType {
    Left = "left",
    All = "all",
    Right = "right",
}

const width = 350;
const pitchWidth = 400; // TODO get them from image instead of hardcoding
const pitchHeight = 580;
const height = width * (pitchHeight / pitchWidth)

function scaleCrossCoordinate(cross: any, selectedTeamId) {
    let coordinates = [cross.coordinate_x, cross.coordinate_y, cross.pass.end_coordinate_x, cross.pass.end_coordinate_y]
    if (cross.match.home_team._id !== parseInt(selectedTeamId)) coordinates = coordinates.map(coordinate => 100 - coordinate)
    const [x1, y1, x2, y2] = coordinates.map(coordinate => coordinate / 100)
    return [x1 * width, y1 * height, x2 * width, y2 * height]
}

function pitchImage() {
    const img = new Image();
    img.src = pitch;
    img.style.backgroundSize = "cover";
    return img
}


function Pitch({crossEvents}) {
    const [popupLocation, setPopupLocation] = useState<number[]>([0, 0])
    const [popupCross, setPopupCross] = useState(null)
    const [crossType, setCrossType] = useState<string>(CrossType.All)
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const selectedTeam = useRecoilValue(selectedTeamAtom)


    const handlePopoverOpen = (e: any, cross) => {
        setPopupLocation([e.evt.clientX, e.evt.clientY])
        setPopupCross(cross)
        setAnchorEl(e.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <ToggleButtonGroup
                value={crossType}
                exclusive
                onChange={(e, newCrossType) => setCrossType(newCrossType)}
                aria-label="text alignment"
            >
                {(Object.values(CrossType)).map((crossType) => (
                    <ToggleButton value={crossType} aria-label="left aligned">
                        {crossType}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>


            <Stage width={width} height={height}>
                <Layer>
                    <Rect width={width} height={height} fillPatternImage={pitchImage()}
                          fillPatternScaleX={width / pitchWidth} fillPatternScaleY={height / pitchHeight}/>
                    {crossEvents ? crossEvents[crossType].map((cross, index) => (
                        <Group key={index}
                        >
                            <Line
                                points={scaleCrossCoordinate(cross, selectedTeam._id)}
                                tension={0.5}
                                stroke="#90EE90"
                                strokeWidth={0.5}
                            />
                            <Circle
                                x={scaleCrossCoordinate(cross, selectedTeam._id)[2]}
                                y={scaleCrossCoordinate(cross, selectedTeam._id)[3]}
                                radius={4} fill={cross.pass.result === "successful" ? "#ADD8E6" : "transparent"}
                                stroke="#ADD8E6" strokeWidth={1}
                                onMouseLeave={handlePopoverClose}
                                onMouseEnter={e => handlePopoverOpen(e, cross)}
                            />
                        </Group>
                    )) : null}
                </Layer>
            </Stage>

            <Popover
                anchorReference="anchorPosition"
                anchorPosition={{top: popupLocation[1], left: popupLocation[0]}}
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >

                <Card sx={{maxWidth: 345, backgroundColor: 'primary.light'}}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                                <Avatar alt="Remy Sharp" src={createTeamImg(popupCross?.match.home_team._id)}/>
                            </Grid>
                            <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                                <h1>VS</h1>
                            </Grid>
                            <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                                <Avatar alt="Remy Sharp" src={createTeamImg(popupCross?.match.away_team._id)}/>
                            </Grid>
                        </Grid>

                        <Typography gutterBottom variant="h5" component="div">
                            {"Match: " + popupCross?.match._id}
                        </Typography>
                        <Typography variant="body2">
                            {"Taker: " + popupCross?.player.name}
                            <br></br>
                            {"Receiver: " + popupCross?.pass.receiving_player.name}
                        </Typography>

                    </CardContent>
                </Card>
            </Popover>

        </div>
    );
}

export default Pitch;
