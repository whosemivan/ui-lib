import React, { FC } from 'react';
import './Card.css'

export interface CardProps {
    title?: string;
    description?: string;
    link?: string;
    image?: string;
    imageAlt?: string;
    widthBlock?: number | string;
    heightBlock?: number | string;
}

const Card: FC<CardProps> = ({ title, description, link, image, imageAlt, widthBlock, heightBlock, ...props }) => {

    return (
        <div className='card' {...props} style={{
            width: widthBlock,
            height: heightBlock
        }}>
            {image && (
                <img className='card__image' src={image} alt={imageAlt} />
            )}
            {title ? (
                <h2 className='card__title'>{title}</h2>
            ) : <h2>Card</h2>}
            {description && (
                <p className='card__description'>{description}</p>
            )}
            {link && (
                <a href={link} className='card__link'>Link...</a>
            )}
        </div>
    );
};

export default Card;