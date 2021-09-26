  import { atom } from "recoil";

  export const Corruption = atom({
    key: "Corruption",
    default: 0,
  });

  export const whichRecipe = atom({
    key:"whichRecipe",
    default:null,
  })

  export const whichPost = atom({
    key:"whichPost",
    default:null,
  })

  export const whichVideo = atom({
    key:"whichVideo",
    default:null,
  })