import React from "react";
import CanvasFrame from "../CanvasFrame";

const Displacement = () => {
    const drawPoints = (context, lines, r = 2) => {
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
    const stepY = 20;

    // point grid
    const step0 = (context, canvasWidth, canvasHeight) => {
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

    // connected point grid
    const step1 = (context, canvasWidth, canvasHeight) => {
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

    // jittered point grid
    const step2 = (context, canvasWidth, canvasHeight) => {
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

    // jittered lines
    const step3 = (context, canvasWidth, canvasHeight) => {
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

    // jitter based on location
    const step4 = (context, canvasWidth, canvasHeight) => {
        const margin = 50;
        const lines = [];
        const jitter = 10;
        for (let y = margin; y <= canvasHeight - margin; y += stepY) {
            const points = [];
            for (let x = margin; x <= canvasWidth - margin; x += stepX) {
                const jitterFactor = x / canvasWidth * y / canvasHeight * 7;

                points.push({
                    x,
                    y: y + (jitter * Math.random() - jitter/2) * jitterFactor,
                });
            }
            lines.push(points);
        }

        drawLines(context, lines);
    };

    // double the number of lines
    const step5 = (context, canvasWidth, canvasHeight) => {
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
        step5,
    ];

    return (
        <CanvasFrame
            steps={steps}
            title="Displacement"
        >
        </CanvasFrame>
    );
}

export default Displacement;