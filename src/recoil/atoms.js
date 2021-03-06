  import { atom } from "recoil";
  
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
    default:"JillianEvans",
  })

  export const password = atom({
    key:"password",
    default:"imissyoumom",
  })

  export const potentialuser = atom({
    key:"potentialuser",
    default:"",
  })

  export const potentialpass = atom({
    key:"potentialpass",
    default:"",
  })
  export const securityUser = atom({
    key:"securityUser",
    default:"hidden",
  })
  export const showPassword = atom({
    key:"showPassword",
    default:"hidden"
  })

  //Darkness Aesthetic Controls
  export const darknessColor = atom({
    key:"darknessColor",
    default:"#46313C",
  })
  export const darknessFont = atom({
    key:"darknessFont",
    default:"masqualero, sans-serif",
  })
  export const darknessBackground = atom({
    key:"darknessBackground",
    default:"#e7d3e6",
  })
  export const darknessNavColor = atom({
    key:"darknessNavColor",
    default:"rgb(151, 89, 153)"
  })

  //Cupcakes
  export const cupcakes = atom({
    key:"cupcakes",
    default:null,
  })

  //Endgame
  export const theScream = atom({
    key:"theScream",
    default:false
  })
  export const goodEnding = atom({
    key:"goodEnding",
    default:false
  })

  export const badEnding = atom({
    key:"badEnding",
    default:false
  })

  //Beta Keys
  export const betaKey = atom({
    key:"betaKey",
    default:"TVC973TjT9"
  })