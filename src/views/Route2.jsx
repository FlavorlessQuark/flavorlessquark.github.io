import React, { useEffect } from 'react';

export const Route2 = () => {
    useEffect(() => {
        window.Draw({
          canvas: (() => document.getElementById('canvas'))(),
          
          });
      }, []);
    return (
      <div >
           <canvas  id="canvas"></canvas>
      </div>
    )
}
