import React from "react";
import PictureFrame from "../PictureFrame";

const Tiling = () => {
    const tiling100 = (context, canvasWidth, canvasHeight) => {
        const drawTile = (context, x, y, width, height) => {
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

        const stepSize = 100;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize, stepSize);
            }
        }
    };

    const tiling20 = (context, canvasWidth, canvasHeight) => {
        const drawTile = (context, x, y, width, height) => {
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
        const stepSize = 20;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize, stepSize);
            }
        }
    };

    const tilingVertical20 = (context, canvasWidth, canvasHeight) => {
        const drawTile = (context, x, y, width, height) => {
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
        const stepSize = 20;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize, stepSize);
            }
        }
    };

    const steps = [
        tiling100,
        tiling20,
        tilingVertical20
    ];

    return (
        <PictureFrame
            steps={steps}
            title="Tiling"
        >
        </PictureFrame>
    );
}

export default Tiling;