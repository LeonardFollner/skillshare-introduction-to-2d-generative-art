import React from "react";
import {replaceHelperFunctionComments} from "../helper";
import CanvasFrame from "../CanvasFrame";

const Curves = () => {
    const drawTile = (context, x, y, step) => {
        context.strokeStyle = "black";

        if (Math.random() > 0.5) {
            context.beginPath();
            context.arc(x, y, step / 2, 0, 0.5 * Math.PI);
            context.stroke();

            context.beginPath();
            context.arc(x + step, y + step, step / 2, Math.PI, 1.5 * Math.PI);
            context.stroke();
        } else {
            context.beginPath();
            context.arc(x+step, y, step / 2, 0.5 * Math.PI, Math.PI);
            context.stroke();

            context.beginPath();
            context.arc(x, y + step, step / 2, 1.5 * Math.PI, 2*Math.PI);
            context.stroke();
        }
    };

    const curves500 = (context, canvasWidth, canvasHeight) => {
        //${drawTile}

        const stepSize = 500;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize);
            }
        }
    };

    const curves250 = (context, canvasWidth, canvasHeight) => {
        //${drawTile}

        const stepSize = 250;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize);
            }
        }
    };

    const curves100 = (context, canvasWidth, canvasHeight) => {
        //${drawTile}

        const stepSize = 100;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize);
            }
        }
    };

    const curves50 = (context, canvasWidth, canvasHeight) => {
        //${drawTile}

        const stepSize = 50;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize);
            }
        }
    };

    const curves20 = (context, canvasWidth, canvasHeight) => {
        //${drawTile}

        const stepSize = 20;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize);
            }
        }
    };

    const steps = [
        curves500,
        curves250,
        curves100,
        curves50,
        curves20,
    ];

    const helperFunctions = {drawTile};

    const stepsWithHelperFunctionsInlined = steps.map(step => replaceHelperFunctionComments(step, helperFunctions));

    return (
        <CanvasFrame
            steps={stepsWithHelperFunctionsInlined}
            title="Curves + Tiling"
        >
        </CanvasFrame>
    );
}

export default Curves;