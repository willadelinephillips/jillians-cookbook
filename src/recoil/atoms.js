  import { atom } from "recoil";

  export const Corruption = atom({
    key: "Corruption",
    default: 0,
  });

  export const Recipe = atom({
    key:"Recipe",
    default:"Recipe1",
  })

  export const Post = atom({
    key:"Post",
    default:null,
  })

  export const whichVideo = atom({
    key:"whichVideo",
    default:null,
  })

  export const hideQuestions = atom({
    key:"hideQuestions",
    default:"hidden",
  })

  export const username = atom({
    key:"username",
    default:"JillianEvans"
  })

  export const password = atom({
    key:"password",
    default:"imissyoumom"
  })