import React from "react";
import {replaceHelperFunctionComments} from "../helper";
import CanvasFrame from "../CanvasFrame";

const ColorsRGB = () => {
    const rgb = (context, canvasWidth, canvasHeight) => {
        const stepSize = 250;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                const red = Math.floor(Math.random() * 255);
                const green = Math.floor(Math.random() * 255);
                const blue = Math.floor(Math.random() * 255);
                const color = `rgb(${red}, ${green}, ${blue})`;
                context.fillStyle = color;
                context.fillRect(x, y, stepSize, stepSize);

                context.fillStyle = "white";
                context.font = "20px 'Space Mono'";
                context.fillText(color, x + 10, y + 30);
            }
        }
    };

    const steps = [
        rgb,
    ];

    const helperFunctions = {};

    const stepsWithHelperFunctionsInlined = steps.map(step => replaceHelperFunctionComments(step, helperFunctions));

    return (
        <CanvasFrame
            steps={stepsWithHelperFunctionsInlined}
            title="Colors [RGB]"
        >
        </CanvasFrame>
    );
}

export default ColorsRGB;