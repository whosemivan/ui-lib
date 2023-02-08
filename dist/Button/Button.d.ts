import { FC } from 'react';
import "../fonts.css";
import "./Button.css";
export interface ButtonProps {
    children: string;
    size?: string;
    designStyle?: string;
    bgColor?: string;
    borderColor?: string;
}
declare const Button: FC<ButtonProps>;
export default Button;
