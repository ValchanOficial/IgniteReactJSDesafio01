import { IconProps } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    Icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
    iconAlt?: string;
    transparent?: boolean;
}

export function Button({ children, Icon, iconAlt, transparent, ...rest }: ButtonProps) {
    return (
        <button className={transparent ? styles.buttonTransparent : styles.button} {...rest}>
            {children}
            {Icon && <Icon alt={iconAlt} size={24} />}
        </button>
    );
}
