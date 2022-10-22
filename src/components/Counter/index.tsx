import { HTMLAttributes } from 'react';
import styles from './Counter.module.css';

export type Color = "primary" | "secondary";

interface CounterProps extends HTMLAttributes<HTMLParagraphElement> {
    counter: string | number;
    color?: Color;
}

export function Counter({ children, counter, color = "primary", ...rest }: CounterProps) {
    return (
        <p className={`${styles.counter} ${styles[color]}`} {...rest}>
            {children}<span>{counter}</span>
        </p>
    );
}
