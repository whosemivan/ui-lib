import React, { FC } from 'react';
import './Input.css'

export interface InputProps {
    inputSize?: string;
    placeholder: string;
    label?: string;
    widthBlock?: number | string;
    borderColor?: string;
    inputStyle?: string;
}

const Input: FC<InputProps> = ({ inputSize, placeholder, label, widthBlock, borderColor, inputStyle, ...props }) => {
    const rootClasses = ['input-block__input'];

    switch (inputSize) {
        case "sm":
            rootClasses.push('input-block__input--sm');
            break;
        case "lg":
            rootClasses.push('input-block__input--lg');
            break;
    }

    if (inputStyle === "filled") {
        rootClasses.push('input-block__input--filled');
    }

    return (
        <div className='input-block' style={{
            width: widthBlock
        }}>
            <label className='input-block__label'>{label}</label>
            <input className={rootClasses.join(' ')} placeholder={placeholder} {...props} style={{
                borderColor: borderColor
            }} />
        </div>
    );
};

export default Input;