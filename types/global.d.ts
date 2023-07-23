// types /global.d.ts

export { }

declare global {
    interface TextProps {
        text: string;
        color?: string;
        center?: boolean;
        other?: string;
    }
    interface CTAButtonProps {
        href: string;
        textProp: TextProps;
    }
}