import React, {useEffect, useRef, useState} from "react";
import "./_PictureFrame.scss";

const PictureFrame = props => {
    const debug = true;

    const {
        steps,
        backgroundColor,
        title,
    } = props;

    const canvasRef = useRef(null);
    const [context, setContext] = useState(null);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    useEffect(() => {
        const context2D = canvasRef.current.getContext("2d");
        setContext(context2D);
    }, [canvasRef]);

    const canvasWidth = 300;
    const canvasHeight = 300;

    const clearCanvas = () => {
        context.beginPath();
        context.rect(0, 0, canvasWidth, canvasHeight);
        context.fillStyle = backgroundColor ? backgroundColor : "white";
        context.fill();
    };

    const executeCurrentStep = () => {
        clearCanvas();
        step(context, canvasWidth, canvasHeight);
    };

    const step = steps[currentStepIndex];
    if (context) {
        executeCurrentStep();
    }

    const handleCanvasClick = () => {
        const nextStepIndex = currentStepIndex + 1;

        if (nextStepIndex < steps.length) {
            setCurrentStepIndex(nextStepIndex);
        } else {
            executeCurrentStep();
        }
    };

    return (
        <>
            <canvas
                className="picture-frame"
                ref={canvasRef}
                width={canvasWidth}
                height={canvasHeight}
                onClick={handleCanvasClick}
            />
            {debug ? <div>step {currentStepIndex + 1} of {steps.length}</div> : null}
            {title ? <div className="label">{title}</div> : null}
            <script dangerouslySetInnerHTML={{__html: step}}>
            </script>
        </>
    )
}

export default PictureFrame;