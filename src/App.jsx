import logo from './logo.svg';
// import Module from './test';
// import { test } from '.';
import { useEffect } from 'react';
// import InnerHTML from 'dangerously-set-html-content'
// eslint-disable-next-line import/no-webpack-loader-syntax
// const htmlModule = require('raw-loader!./test.html');
// const html = htmlModule.default;
// import { returniframe } from './embedWASM/embedded';
const App = () => {
  useEffect(() => {
    window.Module({
      canvas: (() => document.getElementById('canvas'))(),
    })
    .then(() => {
      console.log("loaded");
      });
  }, []);
  return (
    <div className="App">
        
         {/* <div className="content" dangerouslySetInnerHTML={{__html: rawHTMLCode}}></div> */}
         {/* <InnerHTML html={html} /> */}
         <canvas  id="canvas" ></canvas>
        
    </div>
  );
}

export default App;
