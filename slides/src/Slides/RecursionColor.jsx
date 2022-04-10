import React from "react";
import PictureFrame from "../PictureFrame";
import {replaceHelperFunctionComments} from "../helper";

const RecursionColor = () => {
    const drawCircle = (context, cx, cy, r, n) => {
        if (r < 5) {
            return;
        }

        context.fillStyle = "rgba(0, 0, 255, 0.1)";

        context.beginPath();
        context.arc(cx, cy, r, 0, 2 * Math.PI);
        context.fill();

        for (let i = 0; i < n; i++) {
            const a = i * 2 * Math.PI / n;
            const x = cx + r/2 * Math.cos(a);
            const y = cy + r/2 * Math.sin(a);
            drawCircle(context, x, y, r/2, n);
        }
    };

    const recursion1 = (context, canvasWidth, canvasHeight) => {
        //${drawCircle}

        drawCircle(context, canvasWidth/2, canvasHeight/2, canvasHeight/2, 1);
    };

    const recursion2 = (context, canvasWidth, canvasHeight) => {
        //${drawCircle}

        drawCircle(context, canvasWidth/2, canvasHeight/2, canvasHeight/2, 2);
    };

    const recursion3 = (context, canvasWidth, canvasHeight) => {
        //${drawCircle}

        drawCircle(context, canvasWidth/2, canvasHeight/2, canvasHeight/2, 3);
    };

    const recursion4 = (context, canvasWidth, canvasHeight) => {
        //${drawCircle}

        drawCircle(context, canvasWidth/2, canvasHeight/2, canvasHeight/2, 4);
    };

    const recursion5 = (context, canvasWidth, canvasHeight) => {
        //${drawCircle}

        drawCircle(context, canvasWidth/2, canvasHeight/2, canvasHeight/2, 5);
    };

    const steps = [
        recursion1,
        recursion2,
        recursion3,
        recursion4,
        recursion5,
    ];

    const helperFunctions = {drawCircle};

    const stepsWithHelperFunctionsInlined = steps.map(step => replaceHelperFunctionComments(step, helperFunctions));

    return (
        <PictureFrame
            steps={stepsWithHelperFunctionsInlined}
            title="Recursion + Color"
        >
        </PictureFrame>
    );
}

export default RecursionColor;