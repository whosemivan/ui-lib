import React, {FC} from 'react';
import "./GridItem.css";

export interface GridItemProps {
    rowSpan?: number;
    colSpan?: number;
    children?: string | JSX.Element | JSX.Element[];
    area?: string;
};

const GridItem: FC<GridItemProps> = ({colSpan, rowSpan, children, area, ...props}) => {
    return (
            <div className='grid__item' {...props} style={{
                gridArea: area,
                gridColumn: `span ${colSpan} / span ${colSpan}`,
                gridRow: `span ${rowSpan} / span ${rowSpan}`,
                background: 'lightgreen',
            }}>
                {children}
            </div>
    ); 
};

export default GridItem;