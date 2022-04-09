import React from "react";
import PictureFrame from "../PictureFrame";
import {replaceHelperFunctionComments} from "../helper";

const ColorsHSL = () => {
    const hsl = (context, canvasWidth, canvasHeight) => {
        const stepSize = 250;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                const hue = Math.floor(Math.random() * 360);
                const color = `hsl(${hue}, 77%, 55%)`;
                context.fillStyle = color;
                context.fillRect(x, y, stepSize, stepSize);

                context.fillStyle = "white";
                context.font = "20px 'Space Mono'";
                context.fillText(color, x + 10, y + 30);
            }
        }
    };

    const steps = [
        hsl,
    ];

    const helperFunctions = {};

    const stepsWithHelperFunctionsInlined = steps.map(step => replaceHelperFunctionComments(step, helperFunctions));

    return (
        <PictureFrame
            steps={stepsWithHelperFunctionsInlined}
            title="Colors [HSL]"
        >
        </PictureFrame>
    );
}

export default ColorsHSL;