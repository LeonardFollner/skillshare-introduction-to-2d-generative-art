import React from "react";
import {replaceHelperFunctionComments} from "../helper";
import CanvasFrame from "../CanvasFrame";

const Serpinki = () => {
    const drawSerpinskiTriangle = (context, x, y, size, depth) => {
        if (depth === 0) {
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x + size, y);
            context.lineTo(x + size / 2, y - size * Math.sqrt(3) / 2);
            context.closePath();
            context.stroke();
        } else {
            drawSerpinskiTriangle(context, x, y, size / 2, depth-1); //bottom left
            drawSerpinskiTriangle(context, x + size / 2, y, size / 2, depth-1);
            drawSerpinskiTriangle(context, x + size / 4, y - size * Math.sqrt(3) / 4, size / 2, depth-1); //top
        }
    };

    const serpinski0 = (context, canvasWidth, canvasHeight) => {
        //${drawSerpinskiTriangle}

        drawSerpinskiTriangle(context, 0, canvasHeight - 50, canvasHeight, 0);
    };

    const serpinski1 = (context, canvasWidth, canvasHeight) => {
        //${drawSerpinskiTriangle}

        drawSerpinskiTriangle(context, 0, canvasHeight - 50, canvasHeight, 1);
    };

    const serpinski2 = (context, canvasWidth, canvasHeight) => {
        //${drawSerpinskiTriangle}

        drawSerpinskiTriangle(context, 0, canvasHeight - 50, canvasHeight, 2);
    };

    const serpinski3 = (context, canvasWidth, canvasHeight) => {
        //${drawSerpinskiTriangle}

        drawSerpinskiTriangle(context, 0, canvasHeight - 50, canvasHeight, 3);
    };

    const serpinski4 = (context, canvasWidth, canvasHeight) => {
        //${drawSerpinskiTriangle}

        drawSerpinskiTriangle(context, 0, canvasHeight - 50, canvasHeight, 4);
    };

    const serpinski5 = (context, canvasWidth, canvasHeight) => {
        //${drawSerpinskiTriangle}

        drawSerpinskiTriangle(context, 0, canvasHeight - 50, canvasHeight, 5);
    };

    const serpinski6 = (context, canvasWidth, canvasHeight) => {
        //${drawSerpinskiTriangle}

        drawSerpinskiTriangle(context, 0, canvasHeight - 50, canvasHeight, 6);
    };

    const steps = [
        serpinski0,
        serpinski1,
        serpinski2,
        serpinski3,
        serpinski4,
        serpinski5,
        serpinski6,
    ];

    const helperFunctions = {drawSerpinskiTriangle};

    const stepsWithHelperFunctionsInlined = steps.map(step => replaceHelperFunctionComments(step, helperFunctions));

    return (
        <CanvasFrame
            steps={stepsWithHelperFunctionsInlined}
            title="Serpinki’s Triangle"
        >
        </CanvasFrame>
    );
}

export default Serpinki;