import React, { useEffect } from 'react';

export const Route2 = () => {
    useEffect(() => {
        window.Draw({
          canvas: (() => document.getElementById('canvas'))(),
        })
        .then(() => {
          console.log("loaded");
          });
      }, []);
    return (
      <div >
          
           <canvas  id="canvas" ></canvas>
          
      </div>
    );
  }
  