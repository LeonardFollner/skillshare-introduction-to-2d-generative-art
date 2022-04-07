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
    </Impress>
  );
}

export default App;
