import {
    useRecoilValue,
  } from 'recoil';
  
import { Corruption } from './Recoil/atoms.js';

export function TestDisplay() {
    const darkness = useRecoilValue(Corruption);
      return (
        <p>
          {darkness}%
        </p>
      );
}