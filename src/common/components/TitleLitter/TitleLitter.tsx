import clsx from "clsx";
import s from './TitleLitter.module.scss';
import { useEffect, useState } from "react";

type Props = {
    children: React.ReactNode;
    index: number;
}

export function TitleLitter({ children, index }: Props) {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 100);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <span 
            className={clsx(
                s.animatedElement, 
                isVisible && s.visible,
                isHovered && s.hovered
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onAnimationEnd={() => setIsHovered(false)}
        >
            {children === ' ' ? '\u00A0' : children}
        </span>
    );
}