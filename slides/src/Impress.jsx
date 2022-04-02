import React from "react";

const Impress = ({children}) => {
    return (
        <div
            id="impress"
            data-width="1024"
            data-height="768"
        >
            {children}
        </div>
    );
}

export default Impress;