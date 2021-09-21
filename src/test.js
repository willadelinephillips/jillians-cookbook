import {
    useRecoilValue,
  } from 'recoil';
  import { useEffect } from 'react';
  
import { Corruption } from './Recoil/atoms.js';

export function TestDisplay() {
    const darkness = useRecoilValue(Corruption);
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `${darkness}`;
    });
      return (
        <p>
          {darkness}%
        </p>
      );
}