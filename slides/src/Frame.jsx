import React from "react";

const Frame = props => {
    const {
        children,
        label,
    } = props;

    return (
        <>
            <div className="picture__border">
                <div className="picture__frame">
                    <div className="picture__passepartout">
                        {children}
                    </div>
                </div>
            </div>
            {label ?
                <div className="label">
                    {label}
                </div>
            :null}
        </>
    )
}

export default Frame;