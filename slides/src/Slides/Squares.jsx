import React from "react";
import CanvasFrame from "../CanvasFrame";

const Squares = () => {
    const drawSquare = (context, size) => {
        context.strokeStyle = "black";
        context.beginPath();
        context.moveTo(-size/2, -size/2);
        context.lineTo(size/2, -size/2);
        context.lineTo(size/2, size/2);
        context.lineTo(-size/2, size/2);
        context.lineTo(-size/2, -size/2);
        context.stroke();
    };

    const drawTile = (context, x, y, size, canvasHeight) => {
        const randomness = (Math.random()-0.5) * y/canvasHeight;
        const displacementRandomness = (Math.random()-0.5) * y/canvasHeight;
        const maxDisplacement = size/3;
        context.save();
        context.translate(x + size/2 + maxDisplacement * displacementRandomness , y+size/2 + maxDisplacement * displacementRandomness);
        context.rotate(randomness/3 * Math.PI);
        drawSquare(context, size);
        context.restore();
    };

    const squares = (context, canvasWidth, canvasHeight) => {
        const stepSize = 30;
        const margin = 20;
        for (let y = margin; y < canvasHeight - margin - stepSize; y += stepSize) {
            for (let x = margin; x < canvasWidth - margin - stepSize; x += stepSize) {
                drawTile(context, x, y, stepSize, canvasHeight);
            }
        }
    };

    const steps = [
        squares,
    ];

    return (
        <CanvasFrame
            steps={steps}
            title="Repetition"
        >
        </CanvasFrame>
    );
}

export default Squares;