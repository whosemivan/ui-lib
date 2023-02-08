import { FC } from 'react';
import './Card.css';
export interface CardProps {
    title?: string;
    description?: string;
    link?: string;
    image?: string;
    imageAlt?: string;
    widthBlock?: number | string;
    heightBlock?: number | string;
}
declare const Card: FC<CardProps>;
export default Card;
