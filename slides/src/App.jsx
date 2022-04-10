import Impress from "./Impress";
import {useEffect} from "react";
import Slide from "./Slide";
import Lines from "./Slides/Lines";
import Tiling from "./Slides/Tiling";
import Displacement from "./Slides/Displacement";
import TilingVertical from "./Slides/TilingVertical";
import Curves from "./Slides/Curves";
import JoyDivision from "./Slides/JoyDivision";
import Repetition from "./Slides/Repetition";
import DisplacementRepetition from "./Slides/DisplacementRepetition";
import CurveDisplacement from "./Slides/CurveDisplacement";
import Shapes from "./Slides/Shapes";
import Squares from "./Slides/Squares";
import Circle from "./Slides/Circle";
import Recursion from "./Slides/Recursion";
import Serpinki from "./Slides/Serpinki";
import Tree from "./Slides/Tree";
import Iris from "./Slides/Iris";
import ColorsRGB from "./Slides/ColorsRGB";
import ColorsHSL from "./Slides/ColorsHSL";
import ColorSchemes from "./Slides/ColorSchemes";
import ColorPalettes from "./Slides/ColorPalettes";
import ShapesColors from "./Slides/ShapesColors";
import CircleColor from "./Slides/CircleColor";
import Bugs from "./Slides/Bugs";
import RecursionColor from "./Slides/RecursionColor";
import Noise from "./Slides/Noise";
import Images from "./Slides/Images";

function App() {
  useEffect(() => {
    const impress = window.impress;
    if (impress) {
      impress().init();
    }
  });

  return (
    <Impress>
      <Slide
          id="first"
          x={0}
          y={0}
      >
          <h1>First Slide</h1>
      </Slide>
      <Slide
          id="source"
          relX={900}
      >
          <code>Find the active source code right next to the &lt;canvas&gt; in the page's source.</code>
      </Slide>
      <Slide
          id="lines"
      >
        <Lines/>
      </Slide>
      <Slide
          id="tiling"
      >
        <Tiling/>
      </Slide>
      <Slide
          id="tiling-vertical"
      >
        <TilingVertical/>
      </Slide>
      <Slide
          id="displacement"
      >
        <Displacement/>
      </Slide>
      <Slide
          id="curves"
      >
        <Curves/>
      </Slide>
      <Slide
          id="curve-displacement"
      >
        <CurveDisplacement/>
      </Slide>
      <Slide
          id="joy-division"
      >
        <JoyDivision/>
      </Slide>
      <Slide
          id="repetition"
      >
        <Repetition/>
      </Slide>
      <Slide
          id="displacement-repetition"
      >
        <DisplacementRepetition/>
      </Slide>
      <Slide
          id="shapes"
      >
        <Shapes/>
      </Slide>
      <Slide
          id="squares"
      >
        <Squares/>
      </Slide>
      <Slide
          id="circle"
      >
        <Circle/>
      </Slide>
      <Slide
          id="recursion"
      >
        <Recursion/>
      </Slide>
      <Slide
          id="serpinski"
      >
        <Serpinki/>
      </Slide>
      <Slide
          id="tree"
      >
        <Tree/>
      </Slide>
      <Slide
          id="iris"
      >
        <Iris/>
      </Slide>
      <Slide
          id="colorsRGB"
          hide
      >
        <ColorsRGB/>
      </Slide>
      <Slide
          id="colorsHSL"
          hide
      >
        <ColorsHSL/>
      </Slide>
      <Slide
          id="adobe"
          hide
          slide
      >
          <ColorSchemes/>
      </Slide>
      <Slide
          id="palettes"
          hide
          slide
      >
          <ColorPalettes/>
      </Slide>
      <Slide
          id="shapes-colors"
      >
          <ShapesColors/>
      </Slide>
      <Slide
          id="circle-colors"
      >
          <CircleColor/>
      </Slide>
      <Slide
          id="bugs"
      >
          <Bugs/>
      </Slide>
      <Slide
          id="recursion-colored"
      >
          <RecursionColor/>
      </Slide>
      <Slide
          id="noise"
      >
          <Noise/>
      </Slide>
      <Slide
          id="images"
      >
          <Images/>
      </Slide>
    </Impress>
  );
}

export default App;
