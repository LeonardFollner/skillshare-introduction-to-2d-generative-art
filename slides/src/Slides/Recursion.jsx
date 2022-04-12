import React from "react";
import CanvasFrame from "../CanvasFrame";

const Recursion = () => {
    const drawSquare = (context, cx, cy, size, shrinkBy, displacementX, displacementY) => {
        if (size < 5) {
            return;
        }

        context.strokeStyle = "black";

        context.beginPath();
        context.moveTo(cx - size/2, cy - size/2);
        context.lineTo(cx + size/2, cy - size/2);
        context.lineTo(cx + size/2, cy + size/2);
        context.lineTo(cx - size/2, cy + size/2);
        context.lineTo(cx - size/2, cy - size/2);
        context.stroke();

        drawSquare(context, cx + displacementX, cy + displacementY, size - shrinkBy, shrinkBy, displacementX, displacementY);
    };

    const lerp = (val, min, max) => {
        return min + (max - min) * val;
    };

    const drawTile = (context, x, y, size, displacement) => {
        const maxDisplacement = displacement ? size / 50 : 0;
        const displacementX = lerp(Math.random(), -maxDisplacement, maxDisplacement);
        const displacementY = lerp(Math.random(), -maxDisplacement, maxDisplacement);
        const shrinkBy = lerp(Math.random(), 5, size/3);
        drawSquare(context, x + size/2, y + size/2, size, shrinkBy, displacementX, displacementY);
    };

    const recursion = (context, canvasWidth, canvasHeight) => {
        const stepSize = 500;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize, false);
            }
        }
    };

    const recursion500 = (context, canvasWidth, canvasHeight) => {
        const stepSize = 500;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize, true);
            }
        }
    };

    const recursion250 = (context, canvasWidth, canvasHeight) => {
        const stepSize = 250;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize, true);
            }
        }
    };

    const recursion100 = (context, canvasWidth, canvasHeight) => {
        const stepSize = 100;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize, true);
            }
        }
    };

    const recursion50 = (context, canvasWidth, canvasHeight) => {
        const stepSize = 50;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize, true);
            }
        }
    };

    const steps = [
        recursion,
        recursion500,
        recursion250,
        recursion100,
        recursion50,
    ];

    return (
        <CanvasFrame
            steps={steps}
            title="Recursion"
        >
        </CanvasFrame>
    );
}

export default Recursion;