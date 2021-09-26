import { Corruption } from './Recoil/atoms';
import {
  useRecoilValue,
} from 'recoil';
import React from 'react';
import useSound from 'use-sound';
import laugh from "./Audio/laugh.mp3"

export function TestDisplay() {
  const darkness = useRecoilValue(Corruption);
  
    const [play] = useSound(laugh);

      return (
        <p>
          {darkness}%
          <button onClick={play}>Heh!</button>
        </p>
      );
}