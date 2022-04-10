import React from "react";
import {replaceHelperFunctionComments} from "../helper";
import CanvasFrame from "../CanvasFrame";

const CircleColor = () => {
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

    const drawCircle = (context, points, color) => {
        context.strokeStyle = color;
        context.lineWidth = 2;

        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for (let i = 0; i < points.length - 1; i++) {
            const point = points[i];
            const nextPoint = points[i + 1];
            const xc = (point.x + nextPoint.x) / 2;
            const yc = (point.y + nextPoint.y) / 2;
            context.quadraticCurveTo(point.x, point.y, xc, yc);
        }
        const point = points[points.length - 1];
        const lastPoint = points[0];
        context.quadraticCurveTo(point.x, point.y, lastPoint.x, lastPoint.y);
        context.stroke();
    };

    const jitterCircle = (points) => {
        const maxJitter = 1;
        return points.map(point => ({
            x: point.x + Math.random() * maxJitter - maxJitter/2,
            y: point.y + Math.random() * maxJitter - maxJitter/2,
        }));
    };

    const draw = (context, points, color, generation = 0, yOffset = 0) => {
        points = jitterCircle(points);
        const maxY = 0.4;
        yOffset += Math.random() * maxY - maxY/2;
        context.translate(2, yOffset);
        drawCircle(context, points, color);

        if (generation < 250) {
            window.requestAnimationFrame(draw.bind(null, context, points, color, generation + 1, yOffset));
        } else {
            context.restore();
        }
    };

    const background = (context, canvasWidth, canvasHeight) => {
        context.fillStyle = "black";
        context.fillRect(0, 0, canvasWidth, canvasHeight);
    };

    const circle1 = (context, canvasWidth, canvasHeight) => {
        //${generatePointsOnCircle}
        //${drawCircle}
        //${jitterCircle}
        //${draw}

        let points = generatePointsOnCircle(0, canvasHeight/4,canvasWidth / 8, 36);

        context.save();
        window.requestAnimationFrame(draw.bind(null, context, points, "rgba(0, 237, 255, 0.2)", 0, 0));
    };

    const circle2 = (context, canvasWidth, canvasHeight) => {
        //${generatePointsOnCircle}
        //${drawCircle}
        //${jitterCircle}
        //${draw}

        let points = generatePointsOnCircle(0, canvasHeight/2,canvasWidth / 8, 36);

        context.save();
        window.requestAnimationFrame(draw.bind(null, context, points, "rgba(234, 255, 117, 0.2)", 0, 0));
    };

    const circle3 = (context, canvasWidth, canvasHeight) => {
        //${generatePointsOnCircle}
        //${drawCircle}
        //${jitterCircle}
        //${draw}

        let points = generatePointsOnCircle(0, canvasHeight*3/4,canvasWidth / 8, 36);

        context.save();
        window.requestAnimationFrame(draw.bind(null, context, points, "rgba(80, 255, 0, 0.2)", 0, 0));
    };

    const steps = [
        background,
        circle1,
        circle2,
        circle3,
    ];

    const helperFunctions = {generatePointsOnCircle, drawCircle, jitterCircle, draw};

    const stepsWithHelperFunctionsInlined = steps.map(step => replaceHelperFunctionComments(step, helperFunctions));

    return (
        <CanvasFrame
            steps={stepsWithHelperFunctionsInlined}
            title="Tubes"
            dontClearCanvas
            dontRepeatLastStep
        >
        </CanvasFrame>
    );
}

export default CircleColor;