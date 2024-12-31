declare module "react-responsive-carousel" {
    import React from "react";
    import { ReactNode } from "react";
    declare module "react-responsive-carousel" {
        interface CarouselProps {
            children?: ReactNode;
        }
    }

    export interface CarouselProps {
        showArrows?: boolean;
        showStatus?: boolean;
        showIndicators?: boolean;
        infiniteLoop?: boolean;
        showThumbs?: boolean;
        useKeyboardArrows?: boolean;
        autoPlay?: boolean;
        stopOnHover?: boolean;
        interval?: number;
        transitionTime?: number;
        swipeable?: boolean;
        dynamicHeight?: boolean;
        emulateTouch?: boolean;
        width?: string | number;
        className?: string;
    }

    export class Carousel extends React.Component<CarouselProps, any> {}
}
