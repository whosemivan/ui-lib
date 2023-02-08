import { FC } from 'react';
import "./GridItem.css";
export interface GridItemProps {
    rowSpan?: number;
    colSpan?: number;
    children?: string | JSX.Element | JSX.Element[];
    area?: string;
}
declare const GridItem: FC<GridItemProps>;
export default GridItem;
