import { Corruption } from './Recoil/atoms';
import {
  useRecoilValue,
} from 'recoil';

export function TestDisplay() {
  const darkness = useRecoilValue(Corruption);
      return (
        <p>
          {darkness}%
        </p>
      );
}