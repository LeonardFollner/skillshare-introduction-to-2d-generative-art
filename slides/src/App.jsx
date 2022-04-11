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
import Workflow from "./Slides/Workflow";
import PictureFrame from "./PictureFrame";
import tylerxhobbs from "./Slides/images/tyler-hobbs-fidenza-612.png";
import manoloide01 from "./Slides/images/manoloide_taun_01.png";
import manoloide02 from "./Slides/images/manoloide_taun_02.png";
import manoloide03 from "./Slides/images/manoloide_taun_03.png";
import manoloide04 from "./Slides/images/manoloide_taun_04.png";
import mattdesl01 from "./Slides/images/mattdesl_reflect_01.png";
import mattdesl02 from "./Slides/images/mattdesl_reflect_02.png";
import kgolid from "./Slides/images/kgolid_iterationI.png";

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
          x={2.1*slideWidth}
          y={-1.2*slideWidth}
          scale={4}
      >
          <div style={{width: 1.2*slideWidth}}>
              <h1>Generative (2D) Art</h1>
              <p>A workshop <em>heavily</em> inspired by Tim Holman’s great <a href="https://youtu.be/4Se0_w0ISYk">»Generative Art Speedrun«</a></p>
              <p>Find the active source code right next to the <code>&lt;canvas&gt;</code> in the page's source.</p>
          </div>
      </Slide>
      <Slide
          id="tylerxhobbs"
          x={4.5 * slideWidth}
          relY={35.5}
      >
          <PictureFrame
              images={[tylerxhobbs]}
              label={"Tyler Hobbs: Fidenza – 612"}
          />
      </Slide>
      <Slide
          id="mattdesl"
          relX={0.9*slideWidth}
          relY={0}
      >
          <PictureFrame
              images={[mattdesl02, mattdesl01]}
              label={"Matt DesLauriers: reflect"}
          />
      </Slide>
      <Slide
          id="manoloide"
          relX={0.9 * slideWidth}
      >
          <PictureFrame
              images={[manoloide01, manoloide02, manoloide03, manoloide04]}
              label={"Manolo Gamboa Naon: taun"}
          />
      </Slide>
      <Slide
          id="definition"
          relX={slideWidth*1.1}
          slide
          hide
      >
          <div style={{display: "flex", justifyContent: "center", height: "100%", flexDirection: "column", paddingLeft: "70px", paddingRight: "330px"}}>
              generative art
              <h1>making machines that make art</h1>
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
          relX={0.9*slideWidth}
      >
          <Images/>
      </Slide>
      <Slide
          id="overview"
          scale="6"
          x={2700}
          y={800}
      />
      <Slide
          id="workflow"
          x={200}
          y={4*slideWidth}
          slide
      >
          <Workflow/>
      </Slide>
      <Slide
          id="resources"
          relX={1024 * 1.1}
          slide
      >
          <Resources/>
      </Slide>
      <Slide
            id="end"
            scale="6"
            x={2700}
            y={1300}
      />
    </Impress>
  );
}

export default App;
