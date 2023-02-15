import React, { FC } from 'react';
import "./AlienProvider.css";

// that component wiil reset default css for body, add some styles like font-family, visually-hidden, titles styles and other..

export interface AlienProviderProps {
    children?: string | JSX.Element | JSX.Element[];
};

const AlienProvider: FC<AlienProviderProps> = ({ children, ...props }) => {
  
    return (
        <div className='alienui'>
            {children}
        </div>
    );
};

export default AlienProvider;