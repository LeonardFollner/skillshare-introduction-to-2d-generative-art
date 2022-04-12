import React from "react";
import CanvasFrame from "../CanvasFrame";

const ShapesColors = () => {

    const drawTriangle = (context, x, y, size, color) => {
        context.fillStyle = color;
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

    const drawSquare = (context, x, y, size, color) => {
        context.fillStyle = color;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + size, y);
        context.lineTo(x + size, y + size);
        context.lineTo(x, y + size);
        context.lineTo(x, y);
        context.fill();
    };

    const drawCircle = (context, x, y, size, color) => {
        context.fillStyle = color;
        context.beginPath();
        context.arc(x + size / 2, y + size / 2, size / 3, 0, 2 * Math.PI);
        context.fill();
    };

    const drawTwoSquares = (context, x, y, size, color) => {
        if (Math.random() < 0.5) {
            drawSquare(context, x, y, size/2, color);
            drawSquare(context, x + size/2, y + size/2, size/2, color);
        } else {
            drawSquare(context, x + size/2, y, size/2, color);
            drawSquare(context, x, y + size/2, size/2, color);
        }
    };

    const drawTile = (context, x, y, size) => {
        const palette = ["#f94144","#f3722c","#f8961e","#f9c74f","#90be6d","#43aa8b","#577590"]; // https://coolors.co/f94144-f3722c-f8961e-f9c74f-90be6d-43aa8b-577590
        const color = palette[Math.floor(Math.random() * palette.length)];

        const backgroundColor = palette[Math.floor(Math.random() * palette.length)];
        drawSquare(context, x, y, size, backgroundColor);

        const randomShape = Math.random();
        if (randomShape < 0.25) {
            drawSquare(context, x, y, size, color);
        } else if (randomShape < 0.5) {
            drawCircle(context, x, y, size, color);
        } else if (randomShape < 0.75) {
            drawTwoSquares(context, x, y, size, color);
        } else {
            drawTriangle(context, x, y, size, color);
        }
    };

    const shapes250 = (context, canvasWidth, canvasHeight) => {
        const stepSize = 250;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize);
            }
        }
    };

    const shapes100 = (context, canvasWidth, canvasHeight) => {
        const stepSize = 100;
        for (let y = 0; y < canvasHeight; y += stepSize) {
            for (let x = 0; x < canvasWidth; x += stepSize) {
                drawTile(context, x, y, stepSize);
            }
        }
    };

    const shapes50 = (context, canvasWidth, canvasHeight) => {
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
        shapes50,
    ];

    return (
        <CanvasFrame
            steps={steps}
            title="Shapes + Tiling + Color"
        >
        </CanvasFrame>
    );
}

export default ShapesColors;