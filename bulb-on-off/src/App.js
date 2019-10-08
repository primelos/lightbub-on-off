import React, { useState } from 'react';
import { render } from "react-dom";
import './App.css';
import BulbOnOff from '../src/Component/BulbOnOff';

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App(props) {
  

  return (
    <BulbOnOff white={white} yellow={yellow}/>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

export default App;
