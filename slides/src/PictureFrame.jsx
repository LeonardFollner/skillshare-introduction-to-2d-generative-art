import React, {useEffect, useRef, useState} from "react";

const PictureFrame = props => {
    const debug = true;

    const {
        steps,
        backgroundColor,
        title,
        dontClearCanvas,
        dontRepeatLastStep,
    } = props;

    const canvasRef = useRef(null);
    const [context, setContext] = useState(null);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    useEffect(() => {
        const context2D = canvasRef.current.getContext("2d");
        setContext(context2D);
    }, [canvasRef]);

    // initiate once canvas is ready
    useEffect(() => {
        if (context) {
            scaleCanvas();
        }
    }, [context]);

    useEffect(() => {
        if (context) {
            executeCurrentStep();
        }
    }, [context, currentStepIndex]);

    const canvasWidth = 500;
    const canvasHeight = 500;

    const scaleCanvas = (scale = 4) => {
        // https://devlog.disco.zone/2016/07/22/canvas-scaling/

        const canvas = canvasRef.current;
        const pixelRatio = window.devicePixelRatio || 1;

        canvas.width = scale * canvasWidth * pixelRatio;
        canvas.height = scale * canvasHeight * pixelRatio;

        // canvas.style.width = `${scale * canvasWidth}px`;
        // canvas.style.height = `${scale * canvasHeight}px`;

        canvas.style.width = `${canvasWidth}px`;
        canvas.style.height = `${canvasHeight}px`;

        context.mozImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;

        context.scale(scale * pixelRatio, scale * pixelRatio);
    };

    const clearCanvas = () => {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
    };

    const step = steps[currentStepIndex];

    const executeCurrentStep = () => {
        if (!dontClearCanvas) {
            clearCanvas();
        }
        step(context, canvasWidth, canvasHeight);
    };

    const handleCanvasClick = () => {
        const nextStepIndex = currentStepIndex + 1;

        if (nextStepIndex < steps.length) {
            setCurrentStepIndex(nextStepIndex);
        } else if (!dontRepeatLastStep) {
            executeCurrentStep();
        }
    };

    return (
        <>
            <div className="picture__border">
                <div className="picture__frame">
                    <div className="picture__passepartout">
                        <canvas
                            ref={canvasRef}
                            width={canvasWidth}
                            height={canvasHeight}
                            onClick={handleCanvasClick}
                        />
                    </div>
                </div>
            </div>
            <div className="label">
                {title ? title : null}
                {debug ? <div className="hint">step {currentStepIndex + 1} of {steps.length}</div> : null}
            </div>
            <script dangerouslySetInnerHTML={{__html: step}}>
            </script>
        </>
    )
}

export default PictureFrame;