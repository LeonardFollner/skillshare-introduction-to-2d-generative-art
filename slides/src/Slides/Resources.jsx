import React from 'react';

const Resources = () => {
    return (
        <>
            <h1>Resources</h1>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
                <div>
                    <h2>Artists</h2>
                    <ul>
                        <li>Matt DesLauriers: <a href="https://twitter.com/mattdesl" target="_blank">@mattdesl</a></li>
                        <li>Anders Hoff: <a href="https://twitter.com/inconvergent" target="_blank">@inconvergent</a></li>
                        <li>Manolo Gamboa Naon: <a href="https://twitter.com/manoloidee" target="_blank">@manoloide</a></li>
                        <li>Tyler Hobbs: <a href="https://twitter.com/tylerxhobbs" target="_blank">@tylerxhobbs</a></li>
                    </ul>

                    <h2>Tools</h2>
                    <ul>
                        <li><a href="https://github.com/mattdesl/canvas-sketch/"
                               target="_blank"><code>mattdesl/canvas-sketch</code></a></li>
                        <li><a href="https://processing.org/" target="_blank">Processing</a>, <a href="https://p5js.org/"
                                                                                                 target="_blank">p5js</a></li>
                        <li><a href="https://threejs.org/" target="_blank">three.js</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Tutorials</h2>
                    <ul>
                        <li><a href="https://generativeartistry.com/" target="_blank">Generative Artistry</a></li>
                        <li><a href="https://inconvergent.net/generative/" target="_blank">inconvergent</a></li>
                    </ul>

                    <h2>Blogs</h2>
                    <ul>
                        <li>Tyler Hobbs: <a href="https://tylerxhobbs.com/essays" target="_blank">tylerxhobbs.com/essays</a>
                        </li>
                        <li>Anders Hoff: <a href="https://inconvergent.net/#writing" target="_blank">inconvergent.net</a></li>
                    </ul>

                    <h2>Communities</h2>
                    <ul>
                        <li><a href="https://twitter.com/search?q=%23plottertwitter" target="_blank">#plottertwitter</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Resources;