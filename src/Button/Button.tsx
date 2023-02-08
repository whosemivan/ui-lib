import React, {FC} from 'react';
import "../fonts.css";
import "./Button.css";

export interface ButtonProps {
    children: string;
    size?: string;
    designStyle?: string;
    bgColor?: string;
    borderColor?: string;
};

const Button: FC<ButtonProps> = ({children = 'Button', ...props}) => {
    
    const rootClasses = ['button'];

    switch (props.size) {
        case "sm":
            rootClasses.push('button--sm');
            break;
        case "lg":
            rootClasses.push('button--lg');
            break;
    }


    if (props.designStyle === "outline") {
        rootClasses.push('button--outline');
    }

    return (
        <button className={rootClasses.join(' ')} {...props} style={{
            background: props.bgColor,
            borderColor: props.borderColor
        }}>
            {children}
        </button>
    ); 
};

export default Button;