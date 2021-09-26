import { Corruption } from './Recoil/atoms';
import {
  useRecoilValue,
} from 'recoil';
import React from 'react';

export function TestDisplay() {
  const darkness = useRecoilValue(Corruption);
      return (
        <p>
          {darkness}%
        </p>
      );
}