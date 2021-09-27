import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from "./Main"; 
import { RecoilRoot } from "recoil";
import { HashRouter} from "react-router-dom";

ReactDOM.render(
  <HashRouter>
  <RecoilRoot>
  <Main/>
  </RecoilRoot>
  </HashRouter>, 
  document.getElementById("root")
);

