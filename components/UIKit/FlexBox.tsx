import { styled, VariantProps, CSS} from "@stitches/react";

const FlexWrapper = styled('div',{
    display: 'flex',
    flexWrap: 'wrap',
    variants: {
        alignItems: {
            center: {
            alignItems: "center",
            },
            flexStart: {
            alignItems: "flex-start",
            },
            flexEnd: {
            alignItems: "flex-end",
            },
        },
        justifyContent: {
            center: {
            justifyContent: "center",
            },
            flexStart: {
            justifyContent: "flex-start",
            },
            flexEnd: {
            justifyContent: "flex-end",
            },
            spaceBetween: {
            justifyContent: "space-between",
            },
        },
        flexDirection: {
            column: {
            flexDirection: "column",
            },
            columnReverse: {
            flexDirection: "column-reverse",
            },
            row: {
            flexDirection: "row",
            },
            rowReverse: {
            flexDirection: "row-reverse",
            },
        },
        flexWrap: {
            wrap: {
            flexWrap: "wrap",
            },
            nowrap: {
            flexWrap: "nowrap",
            },
            none: {
            flexWrap: "nowrap",
            },
        },
        },
})

interface FlexProps extends VariantProps<typeof FlexWrapper> {
    children: React.ReactNode;
    alignItems?: "center" | "flexStart" | "flexEnd";
    justifyContent?: "center" | "flexStart" | "flexEnd" | "spaceBetween";
    flexDirection?: "column" | "row" | "columnReverse" | "rowReverse";
    flexWrap?: "wrap" | "none" | "nowrap";
    css?: CSS;
    className?: string;
}

const FlexBox = ({ children, ...rest }: FlexProps) => {
    return <FlexWrapper {...rest}>{children}</FlexWrapper>;
};
export default FlexBox;
