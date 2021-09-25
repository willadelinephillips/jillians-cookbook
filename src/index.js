import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from "./Main"; 
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
  <Main/>
  </RecoilRoot>, 
  document.getElementById("root")
);
