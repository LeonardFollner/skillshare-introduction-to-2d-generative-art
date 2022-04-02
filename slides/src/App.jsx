import "./App.scss";
import Impress from "./Impress";
import {useEffect} from "react";
import Slide from "./Slide";
import Lines from "./Slides/Lines";
import Tiling from "./Slides/Tiling";

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
          <code>Find the source code right next to the &lt;canvas&gt; in the page's source.</code>
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
          id="second"
      >
        <h1>Second Slide</h1>
      </Slide>
      <Slide
          id="third"
      >
        <h1>Third Slide</h1>
      </Slide>
    </Impress>
  );
}

export default App;
