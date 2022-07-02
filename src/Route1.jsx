import logo from './logo.svg';
// import Module from './test';
// import { test } from '.';
import React, { useEffect, useState } from 'react';

export const Route1 = () => {
    const [load, setLoad] = useState(false)
    useEffect(() => {
    if (!load)
    {

        window.TEST({
            canvas: (() => document.getElementById('canvas'))(),
        })
        .then(() => {
            console.log("loaded");
            setLoad(true);
        });
    }
    }, []);
    return (
      <div >
          
           <canvas  id="canvas" ></canvas>
          
      </div>
    );
  }
  
  