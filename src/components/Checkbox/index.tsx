import { InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
}

export function Checkbox({ ...rest }: CheckboxProps) {
    return (
        <label className={styles.container}>
            <input type="checkbox" className={styles.checkbox} {...rest} />
            <span className={styles.checkmark} />
        </label>
    );
}
