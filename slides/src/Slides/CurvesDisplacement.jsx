import React from "react";
import PictureFrame from "../PictureFrame";
import {replaceHelperFunctionComments} from "../helper";

const CurvesDisplacement = () => {
    const generateLines = (canvasWidth, canvasHeight) => {
        const stepX = 20;
        const stepY = 20;
        const margin = 50;
        const lines = [];
        for (let y = 2.5*margin; y <= canvasHeight - margin/2; y += stepY) {
            const points = [];
            for (let x = margin; x <= canvasWidth - margin; x += stepX) {
                const distanceToCenter = Math.abs(x - canvasWidth/2);
                const variance = Math.max(canvasWidth/2 - 100 - distanceToCenter, 0);
                const random = Math.random() * variance * -1;

                points.push({
                    x,
                    y: y + random
                });
            }
            lines.push(points);
        }

        return lines;
    };

    const background = (context, canvasWidth, canvasHeight, color) => {
        context.fillStyle = color;
        context.beginPath();
        context.fillRect(0, 0, canvasWidth, canvasHeight);
    };

    const drawLines = (context, canvasWidth, canvasHeight, lines, lineColor, backgroundColor) => {
        context.strokeStyle = lineColor;
        context.lineWidth = 2;
        context.fillStyle = backgroundColor;

        lines.forEach(points => {
            context.beginPath();
            context.moveTo(points[0].x, points[0].y);
            points.forEach(point => {
                context.lineTo(point.x, point.y);
            });
            context.stroke();
            context.fill();
        });
    };

    const drawCurves = (context, canvasWidth, canvasHeight, lines) => {
        context.strokeStyle = "white";
        context.lineWidth = 2;
        context.fillStyle = "black";

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
            context.fill();
        });
    };

    // straight lines
    const step0 = (context, canvasWidth, canvasHeight) => {
        //${generateLines}
        //${drawLines}
        //${background}

        const lines = generateLines(canvasWidth, canvasHeight);
        drawLines(context, canvasWidth, canvasHeight, lines, "black", "white");
    };

    // straight lines
    const step1 = (context, canvasWidth, canvasHeight) => {
        //${generateLines}
        //${drawLines}
        //${background}

        background(context, canvasWidth, canvasHeight, "black");
        const lines = generateLines(canvasWidth, canvasHeight);
        drawLines(context, canvasWidth, canvasHeight, lines, "white", "black");
    };

    // curves
    const step2 = (context, canvasWidth, canvasHeight) => {
        //${generateLines}
        //${background}
        //${drawCurves}

        background(context, canvasWidth, canvasHeight, "black");
        const lines = generateLines(canvasWidth, canvasHeight);
        drawCurves(context, canvasWidth, canvasHeight, lines, "white", "black");
    };

    const steps = [
        step0,
        step1,
        step2,
    ];

    const helperFunctions = {generateLines, background, drawLines, drawCurves};

    const stepsWithHelperFunctionsInlined = steps.map(step => replaceHelperFunctionComments(step, helperFunctions));

    return (
        <PictureFrame
            steps={stepsWithHelperFunctionsInlined}
            title="Joy Division"
        >
        </PictureFrame>
    );
}

export default CurvesDisplacement;