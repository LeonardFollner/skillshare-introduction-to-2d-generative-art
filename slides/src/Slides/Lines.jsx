import React from "react";
import CanvasFrame from "../CanvasFrame";

const Lines = () => {
    const line = (context, canvasWidth, canvasHeight) => {
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(canvasWidth, canvasHeight);
        context.strokeStyle = "black";
        context.stroke();
    };

    const diagonalLine = (context, canvasWidth, canvasHeight) => {
        context.beginPath();
        context.moveTo(canvasWidth, 0);
        context.lineTo(0, canvasHeight);
        context.strokeStyle = "black";
        context.stroke();
    };

    const randomLine = (context, canvasWidth, canvasHeight) => {
        context.beginPath();
        if (Math.random() > 0.5) {
            context.moveTo(canvasWidth, 0);
            context.lineTo(0, canvasHeight);
        } else {
            context.moveTo(0, 0);
            context.lineTo(canvasWidth, canvasHeight);
        }
        context.strokeStyle = "black";
        context.stroke();
    };

    const steps = [
        line,
        diagonalLine,
        randomLine,
    ];

    return (
        <CanvasFrame
            steps={steps}
            title="Lines"
        >
        </CanvasFrame>
    );
}

export default Lines;