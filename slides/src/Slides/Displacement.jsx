import React from "react";
import PictureFrame from "../PictureFrame";
import {replaceHelperFunctionComments} from "../helper";

const Displacement = () => {
    const drawPoints = (context, lines, r = 5) => {
        lines.forEach(points => {
            points.forEach(point => {
                context.beginPath();
                context.arc(point.x, point.y, r, 0, 2 * Math.PI);
                context.fill();
            });
        });
    };

    const drawLines = (context, lines) => {
        lines.forEach(points => {
            context.beginPath();
            context.moveTo(points[0].x, points[0].y);
            points.forEach(point => {
                context.lineTo(point.x, point.y);
            });
            context.stroke();
        });
    };

    const stepX = 25;
    const stepY = 10;

    const step0 = (context, canvasWidth, canvasHeight) => {
        //${stepX}
        //${stepY}
        //${drawPoints}

        const margin = 50;
        const lines = [];
        for (let y = margin; y <= canvasHeight - margin; y += stepY) {
            const points = [];
            for (let x = margin; x <= canvasWidth - margin; x += stepX) {
                points.push({x, y});
            }
            lines.push(points);
        }

        drawPoints(context, lines);
    };

    const step1 = (context, canvasWidth, canvasHeight) => {
        //${stepX}
        //${stepY}
        //${drawPoints}
        //${drawLines}

        const margin = 50;
        const lines = [];
        for (let y = margin; y <= canvasHeight - margin; y += stepY) {
            const points = [];
            for (let x = margin; x <= canvasWidth - margin; x += stepX) {
                points.push({x, y});
            }
            lines.push(points);
        }

        drawPoints(context, lines);
        drawLines(context, lines);
    };

    const step2 = (context, canvasWidth, canvasHeight) => {
        //${stepX}
        //${stepY}
        //${drawPoints}
        //${drawLines}

        const margin = 50;
        const lines = [];
        const jitter = 20;
        for (let y = margin; y <= canvasHeight - margin; y += stepY) {
            const points = [];
            for (let x = margin; x <= canvasWidth - margin; x += stepX) {
                points.push({
                    x: x + jitter * Math.random() - jitter/2,
                    y: y + jitter * Math.random() - jitter/2,
                });
            }
            lines.push(points);
        }

        drawPoints(context, lines);
        drawLines(context, lines);
    };

    const step3 = (context, canvasWidth, canvasHeight) => {
        //${stepX}
        //${stepY}
        //${drawLines}

        const margin = 50;
        const lines = [];
        const jitter = 20;
        for (let y = margin; y <= canvasHeight - margin; y += stepY) {
            const points = [];
            for (let x = margin; x <= canvasWidth - margin; x += stepX) {
                points.push({
                    x: x + jitter * Math.random() - jitter/2,
                    y: y + jitter * Math.random() - jitter/2,
                });
            }
            lines.push(points);
        }

        drawLines(context, lines);
    };

    const step4 = (context, canvasWidth, canvasHeight) => {
        //${stepX}
        //${stepY}
        //${drawLines}

        const margin = 50;
        const lines = [];
        const jitter = 10;
        for (let y = margin; y <= canvasHeight - margin; y += stepY) {
            const points = [];
            for (let x = margin; x <= canvasWidth - margin; x += stepX) {
                const jitterFactor = x / canvasWidth * y / canvasHeight * 7;
                console.log(jitterFactor);

                points.push({
                    x,
                    y: y + (jitter * Math.random() - jitter/2) * jitterFactor,
                });
            }
            lines.push(points);
        }

        drawLines(context, lines);
    };

    const steps = [
        step0,
        step1,
        step2,
        step3,
        step4,
    ];

    const helperFunctions = {drawPoints, drawLines, stepX, stepY};

    const stepsWithHelperFunctionsInlined = steps.map(step => replaceHelperFunctionComments(step, helperFunctions));

    return (
        <PictureFrame
            steps={stepsWithHelperFunctionsInlined}
            title="Displacement"
        >
        </PictureFrame>
    );
}

export default Displacement;