import React from "react";
import "./_Slide.scss";
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
    } = props;

    const className = classNames("step", {skip: props.skip});

    return (
        <div
            id={id}
            className={className}
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