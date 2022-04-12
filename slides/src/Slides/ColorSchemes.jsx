import React from "react";
import analogous from "./images/1 analogous.png";
import monochromatic from "./images/2 monochromatic.png";
import triad from "./images/3 triad.png";
import complementary from "./images/4 complementary.png";
import splitComplementary from "./images/5 split complementary.png";
import doubleSplitComplementary from "./images/6 double split complementary.png";
import square from "./images/7 square.png";
import compound from "./images/8 compound.png";
import shades from "./images/9 shades.png";

const ColorSchemes = () => {
    return (
        <>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                columnGap: "40px",
                rowGap: "40px",
                justifyItems: "center",
                height: "100%",
                alignContent: "center"
            }}>
                <img src={analogous} height="200px"/>
                <img src={monochromatic} height="200px"/>
                <img src={triad} height="200px"/>
                <img src={complementary} height="200px"/>
                <img src={splitComplementary} height="200px"/>
                <img src={doubleSplitComplementary} height="200px"/>
                <img src={square} height="200px"/>
                <img src={compound} height="200px"/>
                <img src={shades} height="200px"/>
            </div>
        </>
    );
}

export default ColorSchemes;