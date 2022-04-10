import React from "react";
import {replaceHelperFunctionComments} from "../helper";
import CanvasFrame from "../CanvasFrame";

const Bugs = () => {
    const generatePointsOnCircle = (centerX, centerY, radius, numberOfPoints) => {
        const points = [];
        for (let i = 0; i < numberOfPoints; i++) {
            const angle = (i / numberOfPoints) * 2 * Math.PI;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            points.push({x, y});
        }
        return points;
    };

    const drawCircle = (context, points, cx, cy) => {
        context.strokeStyle = "rgba(0, 0, 0, 0.2)";

        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for (let i = 0; i < points.length - 1; i++) {
            const point = points[i];
            const nextPoint = points[i + 1];
            const xc = (point.x + nextPoint.x) / 2;
            const yc = (point.y + nextPoint.y) / 2;
            context.quadraticCurveTo(point.x + cx, point.y + cy, xc + cx, yc + cy);
        }
        const point = points[points.length - 1];
        const lastPoint = points[0];
        context.quadraticCurveTo(point.x + cx, point.y + cy, lastPoint.x + cx, lastPoint.y + cy);
        context.stroke();
    };

    const jitterCircle = (points) => {
        const maxJitter = 10;
        return points.map(point => ({
            x: point.x + Math.random() * maxJitter - maxJitter/2,
            y: point.y + Math.random() * maxJitter - maxJitter/2,
        }));
    };

    const circle = (context, canvasWidth, canvasHeight) => {
        //${generatePointsOnCircle}
        //${polarToCartesian}
        //${drawCircle}
        //${jitterCircle}

        const cx = canvasWidth / 2;
        const cy = canvasHeight / 2;

        let points = generatePointsOnCircle(0, canvasHeight/10,canvasWidth / 7, 36);
        drawCircle(context, points, cx, cy);

        for (let i = 0; i < 500; i++) {
            points = jitterCircle(points);
            drawCircle(context, points, cx, cy);
        }
    };

    const steps = [
        circle,
    ];

    const helperFunctions = {generatePointsOnCircle, drawCircle, jitterCircle};

    const stepsWithHelperFunctionsInlined = steps.map(step => replaceHelperFunctionComments(step, helperFunctions));

    return (
        <CanvasFrame
            steps={stepsWithHelperFunctionsInlined}
            title="Bugs"
        >
        </CanvasFrame>
    );
}

export default Bugs;