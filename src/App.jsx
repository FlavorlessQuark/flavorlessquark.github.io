import logo from './logo.svg';
// import Module from './test';
// import { test } from '.';
import { useEffect } from 'react';
import React from "react"
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"
import { Route1 } from './Route1';
import { Route2 } from './Route2';
// const html = htmlModule.default;
// import { returniframe } from './embedWASM/embedded';
const App = () => {
//   useEffect(() => {
//     window.TEST({
//       canvas: (() => document.getElementById('canvas'))(),
//     })
//     .then(() => {
//       console.log("loaded");
//       });
//   }, []);
  return (
    // <Router>

      <Routes>
        <Route path="/test2" element={<Route1/>}/>
        <Route path="/" element={<Route2/>}/>
      </Routes>
    // </Router>
  );
}

export default App;
