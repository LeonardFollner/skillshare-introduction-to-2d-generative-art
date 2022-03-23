import React from "react";

const Slide = (props) => {
    const {
        children,
        id,
        x,
        y,
        relX,
        relY
    } = props;
    return (
        <div
            id={id}
            className="step"
            data-x={x}
            data-y={y}
            data-rel-x={relX}
            data-rel-y={relY}
        >
            {children}
        </div>
    )
}

export default Slide;