import { createStitches } from "@stitches/react";
import uiTypographyConfig from "./config/uiTypographyConfig";

export const {
    styled,// a function to create React components with styles.
    css, // a function to create CSS rules.
    globalCss, // define our global styles
    keyframes, // A function to create a global CSS @keyframe rule.
    theme, //Set up your design theme tokens. 
    createTheme,
    config,
    getCssText} = createStitches({
        theme:{
            colors:{
                //add colors 
                // white100: "rgba(255,255,255, 0.1)",
                // white200: "rgba(255,255,255, 0.2)",
                // white300: "rgba(255,255,255, 0.3)",
                // white400: "rgba(255,255,255, 0.4)",
                // white500: "rgba(255,255,255, 0.5)",
                // white600: "rgba(255,255,255, 0.6)",
                // white700: "rgba(255,255,255, 0.7)",
                // white800: "rgba(255,255,255, 0.8)",
                // white900: "rgba(255,255,255, 0.9)",
                // white: "rgba(255,255,255, 1)",
                // black100: "rgba(0,0,0,0.1)",
                // black160: "rgba(0,0,0,0.16)",
                // black200: "rgba(0,0,0,0.2)",
                // black300: "rgba(0,0,0,0.3)",
                // black400: "rgba(0,0,0,0.4)",
                // bladsd
ck500: "rgba(0,0,0,0.5)",
                // black600: "rgba(0,0,0,0.6)",
                // black700: "rgba(0,0,0,0.7)",
                // black800: "rgba(0,0,0,0.8)",
                // black900: "rgba(0,0,0,0.9)",
                // black: "#rgba(0, 0, 0, 1)",
                // dark: "rgba(23, 27, 30, 1)",
                // dark800: "rgba(23, 27, 30, 0.8)",
                // turquoise: "rgba(0, 167, 187, 1)",
                // woodsmoke: "rgba(23, 27, 30, 1)",
                // woodsmoke600: "rgba(23, 27, 30, 0.6)",
                // woodsmoke800: "rgba(23, 27, 30, 0.8)",
                // yellow: "#F2C94C",
                // atomic: "#3B4950",
            },
            page:{
                // background:""
            },
            typography: uiTypographyConfig,
            //add any object styles you want....  
        },
        media:{
            bp1: "(min-width: 480px)",
        }
    }
)