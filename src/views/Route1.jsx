// import Module from './test';
// import { test } from '.';
import React, { useEffect, useState } from 'react';
import {Helmet} from 'react-helmet';

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

    useEffect(() => {
        // console.log("noo")
        // const script = document.createElement("script");
        // script.type="application/javascript";
        // script.src = "../assets/custom-loading.js";
        // script.async = true;
        // script.onload = () => {
        //     console.log("Uwu")
            // window.TEST({
            //             canvas: (() => document.getElementById('canvas'))(),
            //         })
            //         .then(() => {
            //             console.log("loaded");
            //         });
        // }
      
        // document.body.appendChild(script);
      }, [])
    return (
      <div >
          
           <canvas  id="canvas" ></canvas>
          <Helmet>
              <script
                src= "../assets/custom-loading.js"/>
                
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
  
  