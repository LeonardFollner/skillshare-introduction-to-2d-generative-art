import React from "react";
import PictureFrame from "../PictureFrame";
import {replaceHelperFunctionComments} from "../helper";

const DisplacementRepetition = () => {
    const generateLines = (canvasWidth, canvasHeight) => {
        const stepX = 25;
        const stepY = 10;
        const margin = 50;
        const lines = [];
        const jitter = 10;
        for (let y = margin; y <= canvasHeight - margin; y += stepY) {
            const points = [];
            for (let x = margin; x <= canvasWidth - margin; x += stepX) {
                const jitterFactor = x / canvasWidth * y / canvasHeight * 7;

                points.push({
                    x,
                    y: y + (jitter * Math.random() - jitter / 2) * jitterFactor,
                });
            }
            lines.push(points);
        }

        return lines;
    };

    const drawLines = (context, lines, color) => {
        context.strokeStyle = color;

        lines.forEach(points => {
            context.beginPath();
            context.moveTo(points[0].x, points[0].y);
            for (let i = 0; i < points.length - 2; i++) {
                const point = points[i];
                const xc = (point.x + points[i + 1].x) / 2;
                const yc = (point.y + points[i + 1].y) / 2;
                context.quadraticCurveTo(point.x, point.y, xc, yc);
            }
            context.quadraticCurveTo(points[points.length - 2].x, points[points.length - 2].y, points[points.length - 1].x, points[points.length - 1].y);
            context.stroke();
        });
    };

    const jitterLines = (lines, canvasWidth, canvasHeight) => {
        const jitter = 10;
        return lines.map(line => {
            return line.map(point => {
                const jitterFactor = point.x / canvasWidth * point.y / canvasHeight;
                return {
                    x: point.x,
                    y: point.y + (jitter * Math.random() - jitter / 2) * jitterFactor,
                };
            });
        });
    };

    // double the number of lines
    const step0 = (context, canvasWidth, canvasHeight) => {
        //${generateLines}
        //${drawLines}
        //${jitterLines}

        let lines = generateLines(canvasWidth, canvasHeight);
        drawLines(context, lines, "rgba(0, 0, 0, 0.2)");

        for (let i = 0; i < 50; i++) {
            lines = jitterLines(lines, canvasWidth, canvasHeight);
            drawLines(context, lines, "rgba(0, 0, 0, 0.2)");
        }
    };

    const steps = [
        step0,
    ];

    const helperFunctions = {generateLines, drawLines, jitterLines};

    const stepsWithHelperFunctionsInlined = steps.map(step => replaceHelperFunctionComments(step, helperFunctions));

    return (
        <PictureFrame
            steps={stepsWithHelperFunctionsInlined}
            title="Displacement Repetition"
        >
        </PictureFrame>
    );
}

export default DisplacementRepetition;