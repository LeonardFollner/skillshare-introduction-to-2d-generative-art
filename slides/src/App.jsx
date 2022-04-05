import Impress from "./Impress";
import {useEffect} from "react";
import Slide from "./Slide";
import Lines from "./Slides/Lines";
import Tiling from "./Slides/Tiling";
import Displacement from "./Slides/Displacement";
import TilingVertical from "./Slides/TilingVertical";
import Curves from "./Slides/Curves";
import CurvesDisplacement from "./Slides/CurvesDisplacement";
import Repetition from "./Slides/Repetition";

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
          id="curves-displacement"
      >
        <CurvesDisplacement/>
      </Slide>
      <Slide
          id="repetition"
      >
        <Repetition/>
      </Slide>
    </Impress>
  );
}

export default App;
