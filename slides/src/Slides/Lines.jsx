import React from "react";
import PictureFrame from "../PictureFrame";

const Lines = () => {
    const line = (context, canvasWidth, canvasHeight) => {
        context.moveTo(0, 0);
        context.lineTo(canvasWidth, canvasHeight);
        context.strokeStyle = "purple";
        context.stroke();
    };

    const diagonalLine = (context, canvasWidth, canvasHeight) => {
        context.moveTo(canvasWidth, 0);
        context.lineTo(0, canvasHeight);
        context.strokeStyle = "purple";
        context.stroke();
    };

    const randomLine = (context, canvasWidth, canvasHeight) => {
        if (Math.random() > 0.5) {
            context.moveTo(canvasWidth, 0);
            context.lineTo(0, canvasHeight);
        } else {
            context.moveTo(0, 0);
            context.lineTo(canvasWidth, canvasHeight);
        }
        context.strokeStyle = "purple";
        context.stroke();
    };

    const steps = [
        line,
        diagonalLine,
        randomLine,
    ];

    return (
        <PictureFrame
            steps={steps}
            title="kleines »Etikett« auf dem der Name des Kunstwerkes steht"
        >
        </PictureFrame>
    );
}

export default Lines;