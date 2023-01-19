import { theme} from "@/stitches.config";
import { CSS, styled, VariantProps } from "@stitches/react";
import {ReactNode } from "react";


const TextStyled = styled('div',{
    fontStyle: "normal",
    marginBottom: 0,
    marginTop: 0,
    variants:{
        level: {
            1:{
            fontSize: theme.typography.fontSizeH1,
            lineHeight: theme.typography.lineHeightH1,
            fontWeight: theme.typography.fontWeightH1,    
            },
            2: {
            fontSize: theme.typography.fontSizeH2,
            lineHeight: theme.typography.lineHeightH2,
            fontWeight: theme.typography.fontWeightH2,
            letterSpacing: "-0.02rem",
            },
            3: {
            fontSize: theme.typography.fontSizeH3,
            lineHeight: theme.typography.lineHeightH3,
            fontWeight: theme.typography.fontWeightH3,
            letterSpacing: "-0.02rem",
            },
            4: {
            fontSize: theme.typography.fontSizeH4,
            lineHeight: theme.typography.lineHeightH4,
            fontWeight: theme.typography.fontWeightH4,
            letterSpacing: "-0.02rem",
            },
            5: {
            fontSize: theme.typography.fontSizeH5,
            lineHeight: theme.typography.lineHeightH5,
            fontWeight: theme.typography.fontWeightH5,
            },
            6: {
            fontSize: theme.typography.fontSizeH6,
            lineHeight: theme.typography.lineHeightH6,
            fontWeight: theme.typography.fontWeightH6,
            letterSpacing: "-0.02rem",
            },
            7: {
            fontSize: theme.typography.fontSizeH7,
            lineHeight: theme.typography.lineHeightH7,
            fontWeight: theme.typography.fontWeightH7,
            letterSpacing: "-0.02rem",
            },
        },
        textType: {
            P1: {
                fontSize: theme.typography.fontSizeP1,
                lineHeight: theme.typography.lineHeightP1,
                fontWeight: theme.typography.fontWeightP1,
            },
            P2: {
                fontSize: theme.typography.fontSizeP2,
                lineHeight: theme.typography.lineHeightP2,
                fontWeight: theme.typography.fontWeightP2,
            },
        
            B1: {
                fontSize: theme.typography.fontSizeB1,
                lineHeight: theme.typography.lineHeightB1,
                fontWeight: theme.typography.fontWeightB1,
            },
            B2: {
                fontSize: theme.typography.fontSizeB2,
                lineHeight: theme.typography.lineHeightB2,
                fontWeight: theme.typography.fontWeightB2,
            },
        
            N1: {
                fontSize: theme.typography.fontSizeN1,
                lineHeight: theme.typography.lineHeightN1,
                fontWeight: theme.typography.fontWeightN1,
            },
            N2: {
                fontSize: theme.typography.fontSizeN2,
                lineHeight: theme.typography.lineHeightN2,
                fontWeight: theme.typography.fontWeightN2,
            },
            N3: {
                fontSize: theme.typography.fontSizeN3,
                lineHeight: theme.typography.lineHeightN3,
                fontWeight: theme.typography.fontWeightN3,
            },
        
            A1: {
                fontSize: theme.typography.fontSizeA1,
                lineHeight: theme.typography.lineHeightA1,
                fontWeight: theme.typography.fontWeightA1,
            },
            A2: {
                fontSize: theme.typography.fontSizeA2,
                lineHeight: theme.typography.lineHeightA2,
                fontWeight: theme.typography.fontWeightA2,
                letterSpacing: "1px",
            },
            A3: {
                fontSize: theme.typography.fontSizeA3,
                lineHeight: theme.typography.lineHeightA3,
                fontWeight: theme.typography.fontWeightA3,
                letterSpacing: "2px",
            },
            A4: {
                fontSize: theme.typography.fontSizeA4,
                lineHeight: theme.typography.lineHeightA4,
                fontWeight: theme.typography.fontWeightA4,
                letterSpacing: "2px",
            },
            A5: {
                fontSize: theme.typography.fontSizeA5,
                lineHeight: theme.typography.lineHeightA5,
                fontWeight: theme.typography.fontWeightA5,
            },
        
            T1: {
                fontSize: theme.typography.fontSizeT1,
                lineHeight: theme.typography.lineHeightT1,
                fontWeight: theme.typography.fontWeightT1,
            },
            T2: {
                fontSize: theme.typography.fontSizeT2,
                lineHeight: theme.typography.lineHeightT2,
                fontWeight: theme.typography.fontWeightT2,
                letterSpacing: "1px",
            },
            T3: {
                fontSize: theme.typography.fontSizeT3,
                lineHeight: theme.typography.lineHeightT3,
                fontWeight: theme.typography.fontWeightT3,
            },
        }
    },
});
type IHeadings = 1 | 2 | 3 | 4 | 5 | 6 | 7 ;
type ITextTypes =
    | "P1"
    | "P2"
    | "B1"
    | "B2"
    | "N1"
    | "N2"
    | "N3"
    | "A1"
    | "A2"
    | "A3"
    | "A4"
    | "A5"
    | "T1"
    | "T2"
    | "T3";
interface TypographyProps extends VariantProps<typeof TextStyled> {
    level?: IHeadings
    textType?: ITextTypes
    children?: ReactNode
    css?: CSS
    as?: any;
    href?: string;
    textOverflow?: "ellipsis";
    textTransform?: "uppercase" | "lowercase" | "capitalize";
    target?: string;
    lineClamp?: "yes";
    dangerouslySetInnerHTML?: {
    __html: string;
    };
}

const Typography = ({children, ...rest}:TypographyProps) => (    
    <TextStyled {...rest}>{children}</TextStyled>
)

export default Typography