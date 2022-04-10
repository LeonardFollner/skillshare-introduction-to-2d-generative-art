import React, {useState} from "react";
import Frame from "./Frame";

const PictureFrame = props => {
    const {
        images,
        label,
    } = props;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const image = images[currentImageIndex];

    const handleFrameClick = () => {
        if (currentImageIndex < images.length -1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    return (
        <Frame label={label}>
            <img src={image} height="500px" onClick={handleFrameClick}/>
        </Frame>
    )
}

export default PictureFrame;