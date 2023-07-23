// types /global.d.ts

export { }

declare global {
    interface TextProps {
        text: string;
        color?: string;
        center?: boolean;
        other?: string;
    }
    interface WrapperProps {
        id?: string;
        baseProps?: string;
        secondProps?: string;
        row?: boolean;
        children?: React.ReactNode;
        center?: boolean;
    }
    interface CTAButtonProps {
        href?: string;
        textProp: TextProps;
    }
    interface SectionProps {
        id?: string;
        children?: React.ReactNode;
    }

    interface HeroImage {
        src: string;
        alt: string;
    }
}