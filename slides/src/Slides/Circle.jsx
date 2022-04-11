import React from "react";
import {replaceHelperFunctionComments} from "../helper";
import CanvasFrame from "../CanvasFrame";

const Circle = () => {
    const generateCircle = (r, angleStep) => {
        const points = [];
        for (let angle = 0; angle < 360; angle += angleStep) {
            points.push({r, angle});
        }
        return points;
    };

    const polarToCartesian = (r, angle) => {
        const x = r * Math.cos(angle * Math.PI / 180);
        const y = r * Math.sin(angle * Math.PI / 180);
        return {x, y};
    };

    const drawCircle = (context, points, cx, cy, generation) => {
        points = jitterCircle(points);

        context.strokeStyle = "rgba(0, 0, 0, 0.2)";

        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for (let i = 0; i < points.length - 1; i++) {
            const point = points[i];
            const nextPoint = points[i + 1];
            const {x, y} = polarToCartesian(point.r, point.angle);
            const nextPointCartesian = polarToCartesian(nextPoint.r, nextPoint.angle);
            const xc = (x + nextPointCartesian.x) / 2;
            const yc = (y + nextPointCartesian.y) / 2;
            context.quadraticCurveTo(x + cx, y + cy, xc + cx, yc + cy);
        }
        const pointCartesian = polarToCartesian(points[points.length - 1].r, points[points.length - 1].angle);
        const lastPointCartesian = polarToCartesian(points[0].r, points[0].angle);
        context.quadraticCurveTo(pointCartesian.x + cx, pointCartesian.y + cy, lastPointCartesian.x + cx, lastPointCartesian.y + cy);
        context.stroke();

        if (generation < 500) {
            window.requestAnimationFrame(drawCircle.bind(null, context, points, cx, cy, generation + 1));
        }
    };

    const jitterCircle = (points) => {
        const maxJitter = 10;
        return points.map(point => ({
            angle: point.angle,
            r: point.r + Math.random() * maxJitter - maxJitter/3,
        }));
    };

    const circle = (context, canvasWidth, canvasHeight) => {
        //${generateCircle}
        //${polarToCartesian}
        //${drawCircle}
        //${jitterCircle}

        const cx = canvasWidth / 2;
        const cy = canvasHeight / 2;

        let points = generateCircle(canvasWidth / 7, 10);
        drawCircle(context, points, cx, cy, 500);
    };

    const tree = (context, canvasWidth, canvasHeight) => {
        //${generateCircle}
        //${polarToCartesian}
        //${drawCircle}
        //${jitterCircle}

        const cx = canvasWidth / 2;
        const cy = canvasHeight / 2;

        let points = generateCircle(canvasWidth / 7, 10);

        drawCircle(context, points, cx, cy, 0);
    };

    const steps = [
        circle,
        tree,
    ];

    const helperFunctions = {generateCircle, polarToCartesian, drawCircle, jitterCircle};

    const stepsWithHelperFunctionsInlined = steps.map(step => replaceHelperFunctionComments(step, helperFunctions));

    return (
        <CanvasFrame
            steps={stepsWithHelperFunctionsInlined}
            title="Repetition + Displacement"
        >
        </CanvasFrame>
    );
}

export default Circle;