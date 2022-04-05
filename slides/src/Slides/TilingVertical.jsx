import React from "react";
import PictureFrame from "../PictureFrame";
import {replaceHelperFunctionComments} from "../helper";

const TilingVertical = () => {
    const drawVerticalTile = (context, x, y, width, height) => {
        context.beginPath();
        if (Math.random() > 0.5) {
            context.moveTo(x + width/2, y);
            context.lineTo(x + width/2, y + height);
        } else {
            context.moveTo(x, y + height/2);
            context.lineTo(x + width, y + height/2);
        }
        context.strokeStyle = "black";
        context.lineWidth = 2;
        context.stroke();
    };

    const tilingVertical250 = (context, canvasWidth, canvasHeight) => {
        //${drawVerticalTile}

        const stepSize = 250;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawVerticalTile(context, x, y, stepSize, stepSize);
            }
        }
    };

    const tilingVertical100 = (context, canvasWidth, canvasHeight) => {
        //${drawVerticalTile}

        const stepSize = 100;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawVerticalTile(context, x, y, stepSize, stepSize);
            }
        }
    };

    const tilingVertical50 = (context, canvasWidth, canvasHeight) => {
        //${drawVerticalTile}

        const stepSize = 50;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawVerticalTile(context, x, y, stepSize, stepSize);
            }
        }
    };

    const tilingVertical20 = (context, canvasWidth, canvasHeight) => {
        //${drawVerticalTile}

        const stepSize = 20;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawVerticalTile(context, x, y, stepSize, stepSize);
            }
        }
    };

    const tilingVertical10 = (context, canvasWidth, canvasHeight) => {
        //${drawVerticalTile}

        const stepSize = 10;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawVerticalTile(context, x, y, stepSize, stepSize);
            }
        }
    };

    const helperFunctions = {drawVerticalTile};

    const steps = [
        tilingVertical250,
        tilingVertical100,
        tilingVertical50,
        tilingVertical20,
        tilingVertical10,
    ];

    const stepsWithHelperFunctionsInlined = steps.map(step => replaceHelperFunctionComments(step, helperFunctions));

    return (
        <PictureFrame
            steps={stepsWithHelperFunctionsInlined}
            title="Tiling [vertical]"
        >
        </PictureFrame>
    );
}

export default TilingVertical;