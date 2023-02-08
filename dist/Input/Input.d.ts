import { FC } from 'react';
import './Input.css';
export interface InputProps {
    inputSize?: string;
    placeholder: string;
    label?: string;
    widthBlock?: number | string;
    borderColor?: string;
    inputStyle?: string;
}
declare const Input: FC<InputProps>;
export default Input;
