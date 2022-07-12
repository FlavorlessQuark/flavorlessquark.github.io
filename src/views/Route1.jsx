// import Module from './test';
// import { test } from '.';
import React, { useEffect, useState } from 'react';
import {Helmet} from 'react-helmet';
// import Script

export const Route1 = () => {
    const [load, setLoad] = useState(false)
    // useEffect(() => {
    //     window.TEST({
    //         canvas: (() => document.getElementById('canvas'))(),
    //     })
    //     .then(() => {
    //         console.log("loaded");
    //         setLoad(true);
    //     });
    // }, []);
    const handleScript = (e) => {
      console.log("loaded", window.TEST);
    };

    // useEffect(() => {
    //     console.log("noo")
    //     const script = document.createElement("script");
    //     script.type="application/javascript";
    //     script.src = "https://raw.github.com/FlavorlessQuark/flavorlessquark.github.io/blob/Heroku/public/custom-loading.js";
    //     script.async = true;
    //     document.body.appendChild(script);
    //     script.addEventListener("load", handleScript);
    //     script.addEventListener("error", handleScript);
    //     // script.onload = () => {
    //     // //     console.log("Uwu")
    //     // window.TEST({
    //     //             canvas: (() => document.getElementById('canvas'))(),
    //     //         })
    //     //         .then(() => {
    //     //             console.log("loaded");
    //     //         });
    //     // }
      
    //   }, [])
    return (
      <div >
          
           <canvas  id="canvas" ></canvas>
          <Helmet>
              <script
                type='text/plain'
                src="https://cdn.jsdelivr.net/gh/FlavorlessQuark/flavorlessquark.github.io/public/custom-loading.js"/>
                
                <script>
          {`
            console.log('Test', window.TEST);
          `}
        </script>
          </Helmet>
          <button onClick={() =>console.log(window.TEST)}/>
      </div>
    );
  }
  
  