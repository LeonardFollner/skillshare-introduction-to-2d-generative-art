import React from "react";
import PictureFrame from "../PictureFrame";
import portrait from "./images/Portrait.jpeg";
import portraitProcessed from "./images/Portrait_cut_processed.jpeg";

const Images = () => {
    return (
        <PictureFrame
            images={[
                portrait,
                portraitProcessed
            ]}
            label="Portrait"
        >
        </PictureFrame>
    );
}

export default Images;