import { Corruption } from './Recoil/atoms';
import { useEffect } from 'react';
import {
  useRecoilValue,
} from 'recoil';

export function TestDisplay() {
  const darkness = useRecoilValue(Corruption);
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `${darkness}`;
    }, [darkness]);
      return (
        <p>
          {darkness}%
        </p>
      );
}