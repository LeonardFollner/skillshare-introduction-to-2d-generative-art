import React from "react";
import {replaceHelperFunctionComments} from "../helper";
import CanvasFrame from "../CanvasFrame";

const Repetition = () => {
    const drawLine = (context, line, color = "black") =>{
        context.strokeStyle = color;
        context.lineWidth = 0.5;

        context.beginPath();
        context.moveTo(line[0].x, line[0].y);
        for (let j = 0; j < line.length - 2; j++) {
            const xc = (line[j].x + line[j + 1].x) / 2;
            const yc = (line[j].y + line[j + 1].y) / 2;
            context.quadraticCurveTo(line[j].x, line[j].y, xc, yc);
        }
        context.quadraticCurveTo(line[line.length - 2].x, line[line.length - 2].y, line[line.length - 1].x, line[line.length - 1].y);
        context.stroke();
    };

    const step = (context, canvasWidth, canvasHeight) => {
        //${drawLine}

        let line = [];
        const margin = 20;
        const maxJitter = 12;

        for (let x = margin; x < canvasWidth - margin; x += 50) {
            line.push({x, y: canvasHeight / 2});
        }

        // so the line is drawn at least once
        drawLine(context, line, "$color");

        for (let i = 0; i < "$steps"; i++) {
            line = line.map(point => ({
                x: point.x,
                y: point.y + Math.random() * maxJitter - maxJitter/2,
            }));
            drawLine(context, line, "$color");
        }
    };

    // avoid repetition and still be able to hand over strings with correct values in place
    const steps = [
        step.toString().replaceAll("$steps", 0).replaceAll("$color", "black"),
        step.toString().replaceAll("$steps", 1).replaceAll("$color", "black"),
        step.toString().replaceAll("$steps", 2).replaceAll("$color", "black"),
        step.toString().replaceAll("$steps", 3).replaceAll("$color", "black"),
        step.toString().replaceAll("$steps", 10).replaceAll("$color", "black"),
        step.toString().replaceAll("$steps", 100).replaceAll("$color", "rgba(0, 0, 0, 0.4)"),
        step.toString().replaceAll("$steps", 1500).replaceAll("$color", "rgba(0, 0, 0, 0.15)"),
    ];

    const helperFunctions = {drawLine};

    const stepsWithHelperFunctionsInlined = steps.map(step => replaceHelperFunctionComments(step, helperFunctions));

    return (
        <CanvasFrame
            steps={stepsWithHelperFunctionsInlined}
            title="Repetition"
        >
        </CanvasFrame>
    );
}

export default Repetition;