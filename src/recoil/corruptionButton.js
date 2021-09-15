import {
    useRecoilState,
  } from 'recoil';
  
import { Corruption } from './atoms';
  
export function CorruptionButton() {
    const [darkness, setDarkness] = useRecoilState(Corruption);
      return (
        <button onClick={() => setDarkness((dark) => dark + 5)}>
          Click to Corrupt - Corruption Percent: {darkness}%
        </button>
      );
}