import React from "react";
import classNames from "classnames";

const Slide = (props) => {
    const {
        children,
        id,
        x,
        y,
        relX,
        relY,
        skip,
        hide,
        slide,
        scale
    } = props;

    const className = classNames("step", {skip: props.skip}, {hide: props.hide}, {slide: props.slide});

    return (
        <div
            id={id}
            className={className}
            data-x={x}
            data-y={y}
            data-rel-x={relX}
            data-rel-y={relY}
            data-scale={scale}
        >
            {children}
        </div>
    )
}

export default Slide;