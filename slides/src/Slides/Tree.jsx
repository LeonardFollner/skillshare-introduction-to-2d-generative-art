import React from "react";
import CanvasFrame from "../CanvasFrame";

const Tree = () => {
    const drawBranches = (context, parent, thickness, length) => {
        const rootPoint = parent[0];
        const branchPoint = parent[1];

        context.strokeStyle = "black";
        context.lineWidth = thickness;
        context.lineCap = "round";
        context.beginPath();
        context.moveTo(rootPoint.x, rootPoint.y);
        context.lineTo(branchPoint.x, branchPoint.y);
        context.stroke();

        if (thickness < 5) {
            return;
        }

        const lengthFactor = 0.8;
        const thicknessFactor = 0.8;
        const maxAngle = 0.5 * Math.PI;

        const angle = Math.atan2(rootPoint.y - branchPoint.y, rootPoint.x - branchPoint.x);

        const newAngle = (angle) => angle + (Math.random() + Math.random())/2 * maxAngle - maxAngle/2;
        let newAngle1 = newAngle(angle);
        let newAngle2 = newAngle(angle);

        const newLength1 = length * lerp(Math.random(), 0.6, 1.1);
        const newLength2 = length * lerp(Math.random(), 0.6, 1.1);

        const newBranchPoint1 = {
            x: branchPoint.x - newLength1 * Math.cos(newAngle1),
            y: branchPoint.y - newLength1 * Math.sin(newAngle1)
        };
        const newBranchPoint2 = {
            x: branchPoint.x - newLength2 * Math.cos(newAngle2),
            y: branchPoint.y - newLength2 * Math.sin(newAngle2)
        };

        drawBranches(context, [branchPoint, newBranchPoint1], thickness * thicknessFactor, length * lengthFactor);
        drawBranches(context, [branchPoint, newBranchPoint2], thickness * thicknessFactor, length * lengthFactor);
    };

    const lerp = (val, min, max) => {
        return min + (max - min) * val;
    };

    const recursion = (context, canvasWidth, canvasHeight) => {
        const length = 130;
        drawBranches(context, [{x: canvasWidth / 2, y: canvasHeight}, {x: canvasWidth / 2, y: canvasHeight - length}], 10, length);
    };

    const steps = [
        recursion,
    ];

    return (
        <CanvasFrame
            steps={steps}
            title="Tree"
        >
        </CanvasFrame>
    );
}

export default Tree;