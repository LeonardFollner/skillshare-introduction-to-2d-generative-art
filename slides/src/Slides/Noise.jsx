import React from "react";
import {replaceHelperFunctionComments} from "../helper";
import {random} from "canvas-sketch-util";
import CanvasFrame from "../CanvasFrame";

const Noise = () => {
    const noise = (context, canvasWidth, canvasHeight) => {

        for (let y = 0; y < canvasHeight; y++) {
            for (let x = 0; x < canvasWidth; x++) {
                const n = random.noise2D(x / 100, y / 100);
                const c = `hsl(0, 0%, ${n * 100}%)`;
                context.fillStyle = c;
                context.fillRect(x, y, 1, 1);
            }
        }
    };

    const flowField = (context, canvasWidth, canvasHeight) => {
        const lines = [];

        for (let i = 0; i < 10000; i++) {
            const line = [];
            let x = random.range(0, canvasWidth);
            let y = random.range(0, canvasHeight);
            for (let age = 0; age < 100; age++) {
                const n = random.noise2D(x, y, 0.001);
                const angle = n * Math.PI * 2;
                const length = 1;
                x = x + Math.cos(angle) * length;
                y = y + Math.sin(angle) * length;
                line.push({x, y});
            }
            lines.push(line);
        }

        lines.forEach(line => {
            line.forEach(({x, y}, index) => {
                context.fillStyle = `hsl(0, 0%, ${index/line.length * 100}%)`;
                context.beginPath();
                context.arc(x, y, 1, 0, Math.PI * 2);
                context.fill();
            });
        });
    };

    const drawLine = (context, canvasWidth, canvasHeight, remainingLines = 0) => {
        context.beginPath();
        let x = random.range(0, canvasWidth);
        let y = random.range(0, canvasHeight);
        for (let age = 0; age < 100; age++) {
            const n = random.noise2D(x, y, 0.001);
            const angle = n * Math.PI * 2;
            const length = 1;
            x = x + Math.cos(angle) * length;
            y = y + Math.sin(angle) * length;
            context.lineTo(x, y);
        }
        context.strokeStyle = "rgba(255, 0, 0, 0.1)";
        context.stroke();

        if (remainingLines > 0) {
            requestAnimationFrame(() => {
                drawLine(context, canvasWidth, canvasHeight, remainingLines - 1);
            });
        }
    };

    const colorField = (context, canvasWidth, canvasHeight) => {
        context.fillStyle = "black";
        context.fillRect(0, 0, canvasWidth, canvasHeight);

        for (let i = 0; i < 10000; i++) {
            drawLine(context, canvasWidth, canvasHeight);
        }
    };

    const steps = [
        noise,
        flowField,
        colorField,
    ];

    const helperFunctions = {};

    const stepsWithHelperFunctionsInlined = steps.map(step => replaceHelperFunctionComments(step, helperFunctions));

    return (
        <CanvasFrame
            steps={steps}
            title="Noise"
        >
        </CanvasFrame>
    );
}

export default Noise;