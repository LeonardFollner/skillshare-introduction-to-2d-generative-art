import React from "react";
import PictureFrame from "../PictureFrame";
import {replaceHelperFunctionComments} from "../helper";

const Shapes = () => {
    const drawTriangle = (context, x, y, size) => {
        context.fillStyle = "black";
        context.beginPath();

        const random = Math.random();
        if (random < 0.25) { // top left
            context.moveTo(x, y);
            context.lineTo(x + size, y);
            context.lineTo(x, y + size);
        } else if (random < 0.5) { // top right
            context.moveTo(x, y);
            context.lineTo(x + size, y);
            context.lineTo(x + size, y + size);
        } else if (random < 0.75) { //bottom left
            context.moveTo(x, y);
            context.lineTo(x + size, y + size);
            context.lineTo(x, y + size);
        } else { // bottom right
            context.moveTo(x + size, y);
            context.lineTo(x, y + size);
            context.lineTo(x + size, y + size);
        }
        context.fill();
    };

    const drawSquare = (context, x, y, size) => {
        context.fillStyle = "black";
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + size, y);
        context.lineTo(x + size, y + size);
        context.lineTo(x, y + size);
        context.lineTo(x, y);
        context.fill();
    };

    const drawCircle = (context, x, y, size) => {
        context.fillStyle = "black";
        context.beginPath();
        context.arc(x + size / 2, y + size / 2, size / 3, 0, 2 * Math.PI);
        context.fill();
    };

    const drawTwoSquares = (context, x, y, size) => {
        if (Math.random() < 0.5) {
            drawSquare(context, x, y, size/2);
            drawSquare(context, x + size/2, y + size/2, size/2);
        } else {
            drawSquare(context, x + size/2, y, size/2);
            drawSquare(context, x, y + size/2, size/2);
        }
    };

    const drawTile = (context, x, y, size) => {
        const randomShape = Math.random();
        if (randomShape < 0.25) {
            drawSquare(context, x, y, size);
        } else if (randomShape < 0.5) {
            drawCircle(context, x, y, size);
        } else if (randomShape < 0.75) {
            drawTwoSquares(context, x, y, size);
        } else {
            drawTriangle(context, x, y, size);
        }
    };

    const shapes250 = (context, canvasWidth, canvasHeight) => {
        //${drawTriangle}
        //${drawSquare}
        //${drawCircle}
        //${drawTwoSquares}
        //${drawTile}

        const stepSize = 250;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize);
            }
        }
    };

    const shapes100 = (context, canvasWidth, canvasHeight) => {
        //${drawTriangle}
        //${drawSquare}
        //${drawCircle}
        //${drawTwoSquares}
        //${drawTile}

        const stepSize = 100;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize);
            }
        }
    };

    const shapes50 = (context, canvasWidth, canvasHeight) => {
        //${drawTriangle}
        //${drawSquare}
        //${drawCircle}
        //${drawTwoSquares}
        //${drawTile}

        const stepSize = 50;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize);
            }
        }
    };

    const steps = [
        shapes250,
        shapes100,
        // shapes50,
    ];

    const helperFunctions = {drawTile, drawTriangle, drawSquare, drawCircle, drawTwoSquares};

    const stepsWithHelperFunctionsInlined = steps.map(step => replaceHelperFunctionComments(step, helperFunctions));

    return (
        <PictureFrame
            steps={stepsWithHelperFunctionsInlined}
            title="Shapes + Tiling"
        >
        </PictureFrame>
    );
}

export default Shapes;