import React from "react";
import CanvasFrame from "../CanvasFrame";

const Tiling = () => {
    const drawTile = (context, x, y, width, height) => {
        context.beginPath();
        if (Math.random() > 0.5) {
            context.moveTo(x + width, y);
            context.lineTo(x, y + height);
        } else {
            context.moveTo(x, y);
            context.lineTo(x + width, y + height);
        }
        context.strokeStyle = "black";
        context.lineWidth = 2;
        context.stroke();
    };

    const tiling250 = (context, canvasWidth, canvasHeight) => {
        const stepSize = 250;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize, stepSize);
            }
        }
    };

    const tiling100 = (context, canvasWidth, canvasHeight) => {
        const stepSize = 100;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize, stepSize);
            }
        }
    };

    const tiling50 = (context, canvasWidth, canvasHeight) => {
        const stepSize = 50;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize, stepSize);
            }
        }
    };

    const tiling20 = (context, canvasWidth, canvasHeight) => {
        const stepSize = 20;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize, stepSize);
            }
        }
    };

    const steps = [
        tiling250,
        tiling100,
        tiling50,
        tiling20,
    ];

    return (
        <CanvasFrame
            steps={steps}
            title="Tiling"
        >
        </CanvasFrame>
    );
}

export default Tiling;