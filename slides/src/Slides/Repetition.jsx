import React from "react";
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

    const step = (context, canvasWidth, canvasHeight, steps, color) => {
        let line = [];
        const margin = 20;
        const maxJitter = 12;

        for (let x = margin; x < canvasWidth - margin; x += 50) {
            line.push({x, y: canvasHeight / 2});
        }

        // so the line is drawn at least once
        drawLine(context, line, color);

        for (let i = 0; i < steps; i++) {
            line = line.map(point => ({
                x: point.x,
                y: point.y + Math.random() * maxJitter - maxJitter/2,
            }));
            drawLine(context, line, color);
        }
    };

    const step0 = (context, canvasWidth, canvasHeight) => {
        step(context, canvasWidth, canvasHeight, 0, "black");
    }

    const step1 = (context, canvasWidth, canvasHeight) => {
        step(context, canvasWidth, canvasHeight, 1, "black");
    }

    const step2 = (context, canvasWidth, canvasHeight) => {
        step(context, canvasWidth, canvasHeight, 2, "black");
    }

    const step3 = (context, canvasWidth, canvasHeight) => {
        step(context, canvasWidth, canvasHeight, 3, "black");
    }

    const step10 = (context, canvasWidth, canvasHeight) => {
        step(context, canvasWidth, canvasHeight, 10, "black");
    }

    const step100 = (context, canvasWidth, canvasHeight) => {
        step(context, canvasWidth, canvasHeight, 100, "rgba(0, 0, 0, 0.4)");
    }

    const step1500 = (context, canvasWidth, canvasHeight) => {
        step(context, canvasWidth, canvasHeight, 1500, "rgba(0, 0, 0, 0.15)");
    }

    const steps = [
        step0,
        step1,
        step2,
        step3,
        step10,
        step100,
        step1500,
    ];

    return (
        <CanvasFrame
            steps={steps}
            title="Repetition"
        >
        </CanvasFrame>
    );
}

export default Repetition;