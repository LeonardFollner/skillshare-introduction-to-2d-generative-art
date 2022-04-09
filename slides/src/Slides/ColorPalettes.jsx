import React from "react";
import PictureFrame from "../PictureFrame";
import {replaceHelperFunctionComments} from "../helper";
import analogous from "./images/1 analogous.png";
import monochromatic from "./images/2 monochromatic.png";
import triad from "./images/3 triad.png";
import complementary from "./images/4 complementary.png";
import splitComplementary from "./images/5 split complementary.png";
import doubleSplitComplementary from "./images/6 double split complementary.png";
import square from "./images/7 square.png";
import compound from "./images/8 compound.png";
import shades from "./images/9 shades.png";

const Palette = ({palette}) => {
    const width = Math.floor(100 / palette.length);
    const colorTiles = palette.map((color, index) => {
        return (
            <div key={index} style={{backgroundColor: color, width: `${width}%`, height: "100px"}}></div>
        );
    });
    return (
        <div style={{display: "flex"}}>
            {colorTiles}
        </div>
    )
};

const ColorPalettes = () => {
    const palettes = [
        ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"], // https://coolors.co/264653-2a9d8f-e9c46a-f4a261-e76f51
        ["#606c38","#283618","#fefae0","#dda15e","#bc6c25"], // https://coolors.co/606c38-283618-fefae0-dda15e-bc6c25
        ["#8ecae6","#219ebc","#023047","#ffb703","#fb8500"], // https://coolors.co/8ecae6-219ebc-023047-ffb703-fb8500
        ["#f4f1de","#e07a5f","#3d405b","#81b29a","#f2cc8f"], // https://coolors.co/f4f1de-e07a5f-3d405b-81b29a-f2cc8f
        ["#d8f3dc", "#b7e4c7", "#95d5b2", "#74c69d", "#52b788", "#40916c", "#2d6a4f", "#1b4332", "#081c15"], // https://coolors.co/d8f3dc-b7e4c7-95d5b2-74c69d-52b788-40916c-2d6a4f-1b4332-081c15
        ["#b7094c","#a01a58","#892b64","#723c70","#5c4d7d","#455e89","#2e6f95","#1780a1","#0091ad"], // https://coolors.co/b7094c-a01a58-892b64-723c70-5c4d7d-455e89-2e6f95-1780a1-0091ad
        ["#ffcdb2","#ffb4a2","#e5989b","#b5838d","#6d6875"], // https://coolors.co/ffcdb2-ffb4a2-e5989b-b5838d-6d6875
        ["#f94144","#f3722c","#f8961e","#f9c74f","#90be6d","#43aa8b","#577590"], // https://coolors.co/f94144-f3722c-f8961e-f9c74f-90be6d-43aa8b-577590
        ["#f79256","#fbd1a2","#7dcfb6","#00b2ca","#1d4e89"], // https://coolors.co/f79256-fbd1a2-7dcfb6-00b2ca-1d4e89
        ["#8cb369","#f4e285","#f4a259","#5b8e7d","#bc4b51"], // https://coolors.co/8cb369-f4e285-f4a259-5b8e7d-bc4b51
        ["#70d6ff","#ff70a6","#ff9770","#ffd670","#e9ff70"], // https://coolors.co/70d6ff-ff70a6-ff9770-ffd670-e9ff70
        ["#d62839","#ba324f","#175676","#4ba3c3","#cce6f4"], // https://coolors.co/d62839-ba324f-175676-4ba3c3-cce6f4
    ];

    return (
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 20px", height: "100%", alignContent: "center"}}>
            {palettes.map(palette => <Palette palette={palette}/>)}
        </div>
    );
}

export default ColorPalettes;