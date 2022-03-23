import "./App.scss";
import Impress from "./Impress";
import {useEffect} from "react";
import Slide from "./Slide";

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
          id="second"
          relX={300}
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
