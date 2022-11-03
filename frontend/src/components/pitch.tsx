import React, { useEffect } from 'react';
import pitch from '../assets/pitch.svg'; // with import
import { Stage, Layer, Rect, Circle, Line } from 'react-konva';
import useImage from 'use-image';
import { useRecoilValue } from "recoil";
import { selectedTeam as selectedTeamAtom } from "../atoms";


import { Box, } from "@mui/material";

const width = 350;
const pitchWidth = 400; // TODO get them from image instead of hardcoding
const pitchHeight = 580;
const height = width * (pitchHeight / pitchWidth)

function scaleCrossCoordinate(cross: any, selectedTeamId) {
    let coordinates = [cross.coordinate_x, cross.coordinate_y, cross.pass.end_coordinate_x, cross.pass.end_coordinate_y]
    if (cross.match.home_team._id != parseInt(selectedTeamId)) coordinates = coordinates.map(coordinate => 100 - coordinate)
    const [x1, y1, x2, y2] = coordinates.map(coordinate => coordinate / 100)
    return [x1 * width, y1 * height, x2 * width, y2 * height]
}

function pitchImage() {
    const img = new Image();
    img.src = pitch;
    img.style.backgroundSize = "cover";
    return img
}


function Pitch({ crossEvents }) {
    const selectedTeam = useRecoilValue(selectedTeamAtom)

    return (
        <Stage width={width} height={height}>
            <Layer>
                <Rect width={width} height={height} fillPatternImage={pitchImage()} fillPatternScaleX={width / pitchWidth} fillPatternScaleY={height / pitchHeight} />
                {crossEvents ? crossEvents.left.map((cross, index) => (
                    <Box>
                        <Line key={index}
                            points={scaleCrossCoordinate(cross, selectedTeam._id)}
                            tension={0.5}
                            stroke="#90EE90"
                            strokeWidth={0.5}
                        />
                        <Circle x={scaleCrossCoordinate(cross, selectedTeam._id)[2]} y={scaleCrossCoordinate(cross, selectedTeam._id)[3]} radius={4} fill={cross.pass.result === "successful" ? "#ADD8E6" : "transparent"} stroke="#ADD8E6" strokeWidth={1} />
                    </Box>

                )) : null}
            </Layer>
        </Stage>

    );
}

export default Pitch;
