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
import Resources from "./Slides/Resources";

function App() {
  useEffect(() => {
    const impress = window.impress;
    if (impress) {
      impress().init();
    }
  });

  const slideWidth = 900;

  return (
    <Impress>
      <Slide
          id="start"
          x={2.15*slideWidth}
          y={-slideWidth}
          scale={5}
      >
          <div style={{width: slideWidth}}>
              <h1>Generative (2D) Art</h1>
              <p>A workshop <em>heavily</em> inspired by Tim Holman‘s great <a href="https://youtu.be/4Se0_w0ISYk">»Generative Art Speedrun«</a></p>
              <p>Find the active source code right next to the <code>&lt;canvas&gt;</code> in the page's source.</p>
          </div>
      </Slide>
      <Slide
          id="lines"
          x={-slideWidth}
          y={0}
          hide
      >
        <Lines/>
      </Slide>
      <Slide
          id="tiling"
          relX={slideWidth}
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
          x={0}
          y={slideWidth}
      >
        <Repetition/>
      </Slide>
      <Slide
          id="displacement-repetition"
          relX={slideWidth}
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
          x={0}
          y={2*slideWidth}
      >
        <Recursion/>
      </Slide>
      <Slide
          id="serpinski"
          relX={slideWidth}
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
          x={-4*slideWidth}
          y={3*slideWidth}
          hide
      >
        <ColorsRGB/>
      </Slide>
      <Slide
          id="colorsHSL"
          relX={slideWidth}
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
      <Slide
          id="overview"
          scale="5"
          x={2000}
          y={1000}
      />
      <Slide
          id="resources"
          x={0}
          y={4*slideWidth}
          slide
          hide
      >
          <Resources/>
      </Slide>
      <Slide
            id="end"
            scale="5"
            x={2000}
            y={1000}
      />
    </Impress>
  );
}

export default App;
