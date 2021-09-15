  import { atom } from "recoil";

  export const Corruption = atom({
    key: "Corruption",
    default: {
      percent: 0,
    },
  });

  export const fontSizeState = atom({
    key: 'fontSizeState',
    default: 14,
  });