import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

import { fontSizeState } from "./atoms"; 

export function FontButton() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    return (
      <button onClick={() => setFontSize((size) => size + 1)} style={{fontSize}}>
        Click to Enlarge
      </button>
    );
  }